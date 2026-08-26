# PROMPT — AG-ANATOM: Reparación del visor anatómico 3D compuesto

## CONTEXTO DEL PROYECTO

Plan Maestro OS: aplicación web personal (Astro + React + Three.js + TypeScript) desplegada en GitHub Pages (estático, sin backend). El repositorio usa un sistema multi-agente con worktrees. La rama de trabajo es `agent/anatomia` en el worktree `E:\Laboral\.worktrees\anatomia\`.

**AG-ANATOM** construye el visor anatómico 3D interactivo: un modelo compuesto que fusiona 5 GLB (esqueleto base, miembro superior, miembro inferior, mano, cráneo coloreado) en una sola escena Three.js con sistema de selección jerárquica, capas multi-seleccionables, aislamiento, ocultar/mostrar, y ficha técnica rica conectada a la base de datos anatómica.

**Stack**: Astro 5.18, React 19.2, Three.js 0.184, TypeScript, Vitest.

## ESTADO ACTUAL (ciclo 7 — 18 commits en agent/anatomia)

### Lo que FUNCIONA:
- Carga progresiva de 5 GLB con barra de progreso
- Layout 2 columnas: visor 3D izquierda + panel derecho con tabs (Estructuras/Ficha)
- Capas multi-seleccionables (12 tipos con color por tipo)
- Filtros de selección (qué tipos son clickeables)
- Focus por región (Completo/Cráneo/Mano/Miembro superior/inferior/Vértebras)
- Cráneo: toggle coloreado/vista general + slider de explosión
- Ficha rica con todos los campos de la BD + trazabilidad
- Reporte cobertura 3D (211/267 mapeadas)
- Jerarquía anatómica explícita (80 grupos, 267/267 estructuras)
- ROM articular verificado (19/19 articulaciones con cita)
- Overlay markers detectados (26 piezas "part of" mapeadas a su músculo padre)

### Lo que NO FUNCIONA (reportado por el usuario):
1. **Click sobre un músculo resalta solo la pieza individual, no el conjunto.** El primer click debería seleccionar el CONJUNTO entero (todas las piezas de la estructura), pero solo resalta la pieza individual golpeada por el ray.
2. **El highlight tras selección es demasiado alto** — se ve como una mancha blanca. Debe ser más sutil, como el hover.
3. **El hover debe reducirse a 35% de su intensidad actual.**
4. **El aislamiento no permite aislar subconjuntos dentro del conjunto aislado.** Solo se puede aislar el conjunto grande.
5. **La ficha muestra el nombre del grupo anatómico en vez del nombre de la estructura específica** al primer click.
6. **Body of sternum duplicado** en la vista completa (el skeleton lo trae Y upper-limb también).
7. **Fascias mal clasificadas** (Brachial fascia estaba en ligamentos en vez de fascia).

### CAUSA RAÍZ de los problemas 1-3:
La función `resolveClick` en composite.ts tiene una máquina de estados que alterna entre niveles (conjunto → subconjunto → pieza). El problema es que el PRIMER click sobre una estructura nueva ejecuta la rama que hace `return { structureId, groupKey: null, pieceKey: null }` (conjunto), pero el highlight effect NO está iluminando todas las piezas del conjunto — solo ilumina la pieza clickeada. Esto es porque el highlight effect usa `unitPieceKeys(path, g.groups)` que depende de que `groupsByStructureRef` tenga los grupos construidos para esa estructura, pero estos grupos se construyen con `ensureGroups(ownerId)` que se llama DENTRO del onClick handler, y el highlight effect corre ANTES de que el estado se haya propagado completamente.

Además, el doble click dispara 2 eventos click + 1 evento dblclick. Los 2 clicks ciclan la selección (conjunto → pieza → conjunto o similar), y el dblclick luego lee el estado modificado, produciendo resultados impredecibles.

### FIX del aislamiento negro:
El aislamiento usa claves explícitas (no test espacial). El problema era que `aabbRef` nunca se llenaba. Esto ya se corrigió: los AABB se calculan en carga. Pero el usuario reporta que el aislamiento sigue sin funcionar correctamente para subconjuntos.

## ARQUITECTURA DEL SISTEMA

### Flujo de datos:
1. **compositePlan.ts** — 1380 piezas generadas por analyze-merge.mjs desde los 8 GLBs. Cada pieza: {model, name, region, kind, container, hiddenByDup?}
2. **AnatomyViewer.tsx** — carga 5 GLBs progresivamente. Cada mesh se registra en piecesRef con su clave model:name. applyVisibility() decide visibilidad por pieza.
3. **anatomyGraph.ts** — 267 estructuras del grafo anatómico. Cada una tiene modelMeshes: {modelo: [nombres de nodo]}.
4. **anatomyHierarchy.ts** — 80 grupos anatómicos que agrupan las 267 estructuras.
5. **overlayMarkers.ts** — 26 piezas "part of" mapeadas a su músculo padre sólido.
6. **jointRom.ts** — ROM verificado por articulación con cita.
7. **viewerLogic.ts** — buildOwnerIndex (dueño específico), resolveClick (máquina de fases), pieceVisible.

### Selección jerárquica (resolveClick):
- 1er click en estructura nueva → {structureId, groupKey: null, pieceKey: null} (CONJUNTO)
- 2º click en misma estructura → baja al subconjunto (grupo) o a la pieza si el grupo es hoja
- 3º click → baja a la pieza individual
- Click en la misma pieza → mantiene (no sube)

### Highlight jerárquico:
- Unidad seleccionada → emissive fuerte + color shift
- Contenedor padre → emissive suave
- Resto → prístino + tinte por tipo

### Aislamiento:
- Doble click → aisla las piezas de la unidad actual (claves explícitas)
- Doble click fuera → desaisla
- El aislamiento usa un Set<string> de claves model:name

## TAREAS PARA EL AGENTE WEB

### 1. FIX: Selección de conjunto (primer click)
El primer click sobre cualquier pieza debe seleccionar la ESTRUCTURA COMPLETA (todas sus piezas), no solo la pieza individual. El highlight debe cubrir todas las piezas de la estructura. El problema está en la interacción entre resolveClick (que sí devuelve conjunto), el highlight effect (que puede no estar iluminando todas las piezas), y el hover handler (que puede estar restaurando piezas del highlight).

### 2. FIX: Highlight visible y consistente
El highlight de selección debe ser claramente visible en TODOS los músculos (no solo biceps/triceps). La intensidad debe ser sutil (se ve el músculo como tal, no una mancha blanca). El hover debe ser 35% de su intensidad actual.

### 3. FIX: Aislamiento jerárquico
El aislamiento debe permitir: aislar el conjunto → luego aislar un subconjunto dentro → luego aislar una pieza dentro del subconjunto. Cada nivel de aislamiento reemplaza al anterior.

### 4. FIX: Body of sternum duplicado
El overview-skeleton trae Body_of_sternum y upper-limb también lo trae en su contenedor "Thorax - bones". El dedup por AABB no lo captura. Verificar por qué y corregir.

### 5. FIX: Fascias mal clasificadas
Brachial_fasciar estaba clasificada como ligamento. Ya se corrigió en el kindFromContainer pero verificar que todas las fascias estén correctas.

### 6. Lista de estructuras sin mapear
Generar lista clara de las 56 estructuras sin mapping 3D, clasificadas por: (a) sin GLB que las contenga (torso/cabeza), (b) parte de otra pieza, (c) overlay semitransparente.

## ARCHIVOS FUENTE COMPLETOS


### src/components/fitness/anatomy/AnatomyViewer.tsx

```tsx
﻿// src/components/fitness/anatomy/AnatomyViewer.tsx
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

```

### src/components/fitness/anatomy/composite.ts

```ts
// src/components/fitness/anatomy/composite.ts
// AG-ANATOM — lógica PURA del modelo compuesto y su UX (ciclo 5, mandato
// usuario: capas multi-seleccionables, selección por fases, aislamiento múltiple,
// ocultar/desocultar, color por tipo, focus por región). Testeable sin WebGL.

import type { CompositeKind, CompositeRegion } from '../../../data/fitness/anatomy/compositePlan';

export type { CompositeKind, CompositeRegion };

// ── Focus por región ─────────────────────────────────────────────────────────

export type CompositeFocus = 'full' | 'skull' | 'hand' | 'upper' | 'lower' | 'vertebrae';

export const FOCUS_LABELS: Record<CompositeFocus, string> = {
  full: 'Completo',
  skull: 'Cráneo',
  hand: 'Mano',
  upper: 'Miembro superior',
  lower: 'Miembro inferior',
  vertebrae: 'Vértebras aisladas',
};

/** Modelo deep-link legacy (?model=) → focus equivalente (compatibilidad URLs). */
export function focusFromLegacyModel(model: string | null | undefined): CompositeFocus | null {
  switch (model) {
    case 'colored-skull-base':
    case 'exploded-skull':
    case 'overview-colored-skull':
      return 'skull';
    case 'hand':
      return 'hand';
    case 'upper-limb':
      return 'upper';
    case 'lower-limb':
      return 'lower';
    case 'vertebrae':
      return 'vertebrae';
    case 'overview-skeleton':
      return 'full';
    default:
      return null;
  }
}

/** Piezas del modelo vertebrae (focus "Vértebras aisladas": solo esas, de cualquier fuente). */
export const VERTEBRAE_PIECES = new Set(
  ['Cervical vertebra (C4)', 'Thoracic vertebra (T7)', 'Lumbar vertebra (L3)'].map((n) => n.toLowerCase()),
);

// ── Capas (multi-seleccionables) ─────────────────────────────────────────────

export interface LayerDef {
  kind: CompositeKind;
  label: string;
  /** color de identidad de la capa (tinte base + highlight) */
  color: number;
}

/** Orden de aparición en la UI. Colores pensados sobre fondo oscuro. */
export const LAYER_DEFS: LayerDef[] = [
  { kind: 'bone', label: 'Huesos', color: 0xe8e0d0 },
  { kind: 'muscle', label: 'Músculos', color: 0xc9564a },
  { kind: 'tendon', label: 'Tendones', color: 0xe0b34d },
  { kind: 'ligament', label: 'Ligamentos', color: 0x9a7fd1 },
  { kind: 'nerve', label: 'Nervios', color: 0xf2d24b },
  { kind: 'artery', label: 'Arterias', color: 0xd94f4f },
  { kind: 'vein', label: 'Venas', color: 0x4f7fd9 },
  { kind: 'cartilage', label: 'Cartílagos', color: 0x7fd0c0 },
  { kind: 'bursa', label: 'Bursas', color: 0xd9925b },
  { kind: 'fascia', label: 'Fascia', color: 0xb8a6d9 },
  { kind: 'overlay', label: 'Superficie', color: 0xc9c9c9 },
  { kind: 'other', label: 'Otras', color: 0x9aa4b0 },
];

const LAYER_MAP = new Map(LAYER_DEFS.map((l) => [l.kind, l]));

export function layerDef(kind: CompositeKind): LayerDef {
  return LAYER_MAP.get(kind) ?? LAYER_DEFS[LAYER_DEFS.length - 1];
}

/** Capas activas por defecto: esquelético + muscular + tendinoso + ligamentoso + nervioso. */
export const DEFAULT_LAYERS: CompositeKind[] = ['bone', 'muscle', 'tendon', 'ligament', 'nerve'];

// ── Claves de pieza ──────────────────────────────────────────────────────────

/** Clave única de pieza en el compuesto: `model:name`. */
export function pieceKey(model: string, name: string): string {
  return `${model}:${name}`;
}

/** AABB serializable (mundo) de una pieza o unidad. */
export interface Aabb { min: [number, number, number]; max: [number, number, number] }

export function aabbIntersects(a: Aabb, b: Aabb): boolean {
  return a.min[0] <= b.max[0] && a.max[0] >= b.min[0]
    && a.min[1] <= b.max[1] && a.max[1] >= b.min[1]
    && a.min[2] <= b.max[2] && a.max[2] >= b.min[2];
}

export interface VisibilityState {
  focus: CompositeFocus;
  /** capas VISIBLES (independiente de lo seleccionable). */
  layers: ReadonlySet<CompositeKind>;
  /** claves de pieza ocultas manualmente (model:name). */
  hidden: ReadonlySet<string>;
  /** aislamiento: claves EXPLÍCITAS de las piezas aisladas (sin test espacial). */
  isolation: { keys: ReadonlySet<string>; label: string } | null;
}

/**
 * Visibilidad de UNA pieza del compuesto (decisión única por pieza).
 * Prioridad: aislamiento > oculta manual > capas > focus > dedup.
 * `aabb`: caja mundial de la pieza (solo necesaria con aislamiento activo).
 */
export function pieceVisible(
  piece: { model: string; name: string; region: CompositeRegion; kind: CompositeKind; hiddenByDup?: string },
  state: VisibilityState,
): boolean {
  const key = pieceKey(piece.model, piece.name);
  // aislamiento: SOLO las claves explícitas de la unidad aislada
  if (state.isolation) return state.isolation.keys.has(key);
  if (state.hidden.has(key)) return false;
  if (state.focus !== 'full') {
    if (state.focus === 'vertebrae') {
      if (!VERTEBRAE_PIECES.has(piece.name.toLowerCase())) return false;
    } else if (piece.region !== state.focus) return false;
  }
  if (!state.layers.has(piece.kind)) return false;
  if (piece.hiddenByDup) return false;
  return true;
}

/** kind seleccionable/clickeable (filtros de selección). */
export function kindSelectable(kind: CompositeKind, selectable: ReadonlySet<CompositeKind>): boolean {
  return selectable.has(kind);
}

// ── Selección jerárquica por fases (conjunto → subconjunto → pieza) ─────────

export interface SelectionPath {
  /** estructura (conjunto) — siempre presente al seleccionar. */
  structureId: string;
  /** subconjunto (nivel 1): clave de grupo derivada del nombre de pieza. */
  groupKey: string | null;
  /** pieza individual (nivel hoja). */
  pieceKey: string | null;
}

const STOPWORDS = new Set(['of', 'the', 'and', 'de', 'la', 'el']);

function tokenize(name: string): string[] {
  return (name || '')
    .normalize('NFD').replace(/[\u0300-\u036f\u200b-\u200d\ufeff]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, ' ')
    .trim()
    .split(' ')
    .filter((t) => t && !STOPWORDS.has(t));
}

/**
 * Agrupa las piezas de una estructura en SUBCONJUNTOS derivados del nombre:
 * tokens de la pieza menos los tokens comunes con la estructura.
 * p.ej. "Long head of triceps brachii" en "Triceps brachii" → grupo "long head".
 * `pieces` son pares [clave completa model:name, nombre runtime]. Los grupos
 * guardan CLAVES COMPLETAS (una misma estructura puede tener piezas en
 * distintos modelos del compuesto).
 */
export function buildSubgroups(structureNameEn: string, pieces: Array<[string, string]>): Map<string, string[]> {
  const base = new Set(tokenize(structureNameEn));
  const groups = new Map<string, string[]>();
  for (const [key, name] of pieces) {
    const toks = tokenize(name);
    const diff = toks.filter((t) => !base.has(t));
    const g = diff.length ? diff.join(' ') : '(estructura)';
    groups.set(g, [...(groups.get(g) ?? []), key]);
  }
  return groups;
}

/**
 * Resuelve la selección tras un click sobre una pieza (máquina de fases).
 * El PRIMER click SIEMPRE selecciona el CONJUNTO (estructura entera) — nunca
 * salta a la pieza. Los clicks siguientes descienden: subconjunto → pieza.
 * Click en la misma pieza del nivel hoja → sube un nivel.
 */
export function resolveClick(args: {
  current: SelectionPath | null;
  clickedPieceKey: string;
  clickedStructureId: string;
  /** grupos (groupKey → claves de pieza) de la estructura clickeada. */
  groups: Map<string, string[]>;
  /** grupo al que pertenece la pieza clickeada. */
  clickedGroupKey: string;
}): SelectionPath {
  const { current, clickedStructureId, groups, clickedGroupKey } = args;
  // NUEVO conjunto o cambio de estructura: SIEMPRE fase conjunto
  if (!current || current.structureId !== clickedStructureId)
    return { structureId: clickedStructureId, groupKey: null, pieceKey: null };
  const p = current;
  const groupSize = groups.get(clickedGroupKey)?.length ?? 1;
  // conjunto → subconjunto (multi-pieza) o directamente pieza (grupo hoja)
  if (p.groupKey === null && p.pieceKey === null) {
    return groupSize > 1
      ? { ...p, groupKey: clickedGroupKey }
      : { ...p, pieceKey: args.clickedPieceKey };
  }
  // subconjunto → pieza, o cambio de subconjunto
  if (p.groupKey !== clickedGroupKey) {
    return groupSize > 1
      ? { ...p, groupKey: clickedGroupKey, pieceKey: null }
      : { ...p, groupKey: clickedGroupKey, pieceKey: args.clickedPieceKey };
  }
  // misma pieza → mantener selección (no subir; usar breadcrumb para subir)
  if (p.pieceKey === args.clickedPieceKey) return { ...p };
  return { ...p, pieceKey: args.clickedPieceKey };
}

/** Claves de pieza de la unidad seleccionada en el nivel actual del path. */
export function unitPieceKeys(path: SelectionPath, groups: Map<string, string[]>): string[] {
  if (path.pieceKey) return [path.pieceKey];
  if (path.groupKey) return groups.get(path.groupKey) ?? [];
  return [...new Set([...groups.values()].flat())];
}

/**
 * Etiqueta de fase para la ficha: extrae el nombre legible de la cabeza/pieza
 * desde el nombre runtime (p.ej. "Long head of triceps brachii").
 */
export function phaseLabel(pieceName: string): string {
  return pieceName
    .replace(/[\u200b-\u200d\u2060\ufeff]/g, '')
    .replace(/_/g, ' ')
    .replace(/\.(r|l)$/i, '')
    .trim();
}

// ── Color por tipo ───────────────────────────────────────────────────────────

/** Tinte base aplicado a un material por tipo (lerp sobre el color original). */
export const KIND_TINT_STRENGTH = 0.55;
/** Intensidad emisiva del highlight por tipo. */
export const HIGHLIGHT_EMISSIVE_BY_KIND = 1.4;

/** Color hex de highlight para un kind (versión brillante del color de capa). */
export function highlightColor(kind: CompositeKind): number {
  const base = layerDef(kind).color;
  // aclarar hacia blanco un 25% para el highlight
  const r = Math.min(255, ((base >> 16) & 255) + 64);
  const g = Math.min(255, ((base >> 8) & 255) + 64);
  const b = Math.min(255, (base & 255) + 64);
  return (r << 16) | (g << 8) | b;
}

```

### src/components/fitness/anatomy/viewerLogic.ts

```ts
// src/components/fitness/anatomy/viewerLogic.ts
// AG-ANATOM — lógica PURA del visor (ciclo 4, corrección de bugs de
// selección/aislamiento/capas). Extraída de AnatomyViewer.tsx para poder
// testearla sin WebGL. Sin dependencias de three ni del DOM.

/** Selección del visor: una estructura del grafo O una pieza suelta sin ficha. */
export type ViewerSelection =
  | { type: 'structure'; id: string }
  | { type: 'mesh'; name: string };

/**
 * Nombre de nodo/mesh listo para UI: elimina zero-width chars del export de
 * Blender ("Art_cart_of_talusr_\u200b") y sustituye underscores por espacios.
 * SOLO presentación: los datos y lookups usan el nombre runtime crudo.
 */
export function prettyMeshName(name: string): string {
  return name.replace(/[\u200b-\u200d\u2060\ufeff]/g, '').replace(/_/g, ' ').trim();
}

export interface OwnerIndexInput {
  id: string;
  modelMeshes: Record<string, string[]>;
}

/**
 * Índice nombre-runtime → id de estructura dueña, para el click en el visor.
 *
 * Dos correcciones del ciclo 4:
 * 1. Normaliza alias: si un mapping apunta a un nombre de GEOMETRÍA en vez del
 *    de nodo (p.ej. 'Flexor_retinaculum_of_wrist' en upper-limb), resuelve al
 *    nombre de nodo vía `aliasToPrimary` (geometryName → nodeName) para que el
 *    click sobre la pieza (que devuelve nombre de NODO) encuentre al dueño.
 * 2. Dueño MÁS ESPECÍFICO: ante varias estructuras que mapean la misma pieza
 *    (el hueso 'Femurr' lo mapean también la cadera y la rodilla), gana el
 *    mapping más pequeño (el hueso, 1 pieza < articulación, 2-3 piezas).
 *    Empate → orden del grafo (músculos antes que tendones, huesos antes que
 *    ligamentos).
 */
export function buildOwnerIndex(
  structures: OwnerIndexInput[],
  modelKey: string,
  aliasToPrimary: ReadonlyMap<string, string> = new Map(),
): Map<string, string> {
  const best = new Map<string, { id: string; specificity: number; order: number }>();
  structures.forEach((s, order) => {
    const names = s.modelMeshes[modelKey] ?? [];
    for (const raw of names) {
      const primary = aliasToPrimary.get(raw) ?? raw;
      for (const name of new Set([raw, primary])) {
        const prev = best.get(name);
        if (!prev || names.length < prev.specificity) {
          best.set(name, { id: s.id, specificity: names.length, order });
        }
      }
    }
  });
  const out = new Map<string, string>();
  for (const [name, v] of best) out.set(name, v.id);
  return out;
}

/**
 * Expande los nombres de mapping de una estructura a nombres de NODO
 * (alias de geometría → nodo). El visor decide visibilidad/highlight por
 * nombre de nodo: es el único garantizado en runtime.
 */
export function resolveSelectionNames(
  selection: ViewerSelection | null | undefined,
  modelKey: string,
  getStructure: (id: string) => { modelMeshes: Record<string, string[]> } | undefined,
  aliasToPrimary: ReadonlyMap<string, string> = new Map(),
): string[] {
  if (!selection) return [];
  if (selection.type === 'mesh') return [selection.name];
  const s = getStructure(selection.id);
  if (!s) return [];
  const names = s.modelMeshes[modelKey] ?? [];
  return names.map((n) => aliasToPrimary.get(n) ?? n);
}

/**
 * Visibilidad de UN mesh — decisión ÚNICA por pieza (ciclo 4): antes se
 * decidía por alias (el mismo mesh aparecía bajo nombre de nodo Y de geometría
 * y la última escritura ganaba, rompiendo filtros y aislamiento).
 * Prioridad: aislamiento > filtro de capa > vista completa (oculta solo 'aux').
 */
export function decideMeshVisibility(args: {
  name: string;
  kind: string;
  isoNames: ReadonlySet<string> | null;
  filterKinds: readonly string[] | null;
}): boolean {
  const { name, kind, isoNames, filterKinds } = args;
  if (isoNames) return isoNames.has(name);
  if (filterKinds) return filterKinds.includes(kind);
  return kind !== 'aux';
}

```

### src/data/fitness/anatomy/anatomyHierarchy.ts

```ts
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

```

### src/data/fitness/anatomy/overlayMarkers.ts

```ts
// src/data/fitness/anatomy/overlayMarkers.ts
// AG-ANATOM — GENERADO por gen-overlay-markers.mjs
// Marcadores de región sobre músculos padre (overlays semitransparentes).
// NO son aislables independientemente: al seleccionarlos resaltan el músculo
// padre + aumentan su opacidad para mostrar la región.

/** pieceKey del marcador → pieceKey del músculo padre sólido. */
export const OVERLAY_PARENT: Record<string, string> = {
  'lower-limb:Ligament_of_head_of_femurr': 'lower-limb:Femurr',
  'lower-limb:Common_tendon_of_Semitendinosus_and_Long_head_of_biceps_femoris': 'lower-limb:Common_tendon_of_biceps_femorisr',
  'lower-limb:Lateral_head_of_gastrocnemiusr': 'lower-limb:Lateral_subtendinous_bursa_of_gastrocnemius_muscler',
  'lower-limb:Long_head_of_biceps_femorisr': 'lower-limb:Common_tendon_of_biceps_femorisr',
  'lower-limb:Medial_head_of_gastrocnemiusr': 'lower-limb:Lateral_subtendinous_bursa_of_gastrocnemius_muscler',
  'lower-limb:Short_head_of_biceps_femorisr': 'lower-limb:Common_tendon_of_biceps_femorisr',
  'upper-limb:Lateral_head_of_triceps_brachiir': 'upper-limb:Common_tendon_of_triceps_brachiir',
  'upper-limb:Long_head_of_biceps_brachiir': 'upper-limb:Common_tendon_of_biceps_brachiir',
  'upper-limb:Long_head_of_triceps_brachiir': 'upper-limb:Common_tendon_of_triceps_brachiir',
  'upper-limb:Medial_head_of_triceps_brachiir': 'upper-limb:Common_tendon_of_triceps_brachiir',
  'upper-limb:Short_head_of_biceps_brachiir': 'upper-limb:Common_tendon_of_biceps_brachiir',
  'upper-limb:Humeral_head_of_extensor_carpi_ulnarisr': 'upper-limb:Common_tendon_of_extensor_carpi_ulnarisr',
  'upper-limb:Humeral_head_of_flexor_carpi_ulnarisr': 'upper-limb:Common_tendon_of_flexor_carpi_ulnarisr',
  'upper-limb:Ulnar_head_of_extensor_carpi_ulnarisr': 'upper-limb:Common_tendon_of_extensor_carpi_ulnarisr',
  'upper-limb:Ulnar_head_of_flexor_carpi_ulnarisr': 'upper-limb:Common_tendon_of_flexor_carpi_ulnarisr',
  'upper-limb:Thickened_part_of_antebrachial_fascia': 'upper-limb:Antebrachial_fasciar',
  'upper-limb:Oblique_head_of_adductor_pollicisr': 'upper-limb:Adductor_pollicisr',
  'upper-limb:Transverse_head_of_adductor_pollicisr': 'upper-limb:Adductor_pollicisr',
  'upper-limb:Acromial_part_of_deltoid_muscler': 'upper-limb:Deltoid_muscler',
  'upper-limb:Ascending_part_of_Trapezius_muscler': 'upper-limb:Trapezius_muscler',
  'upper-limb:Clavicular_part_of_deltoid_muscler': 'upper-limb:Deltoid_muscler',
  'upper-limb:Descending_part_of_Trapezius_muscler': 'upper-limb:Trapezius_muscler',
  'upper-limb:Spinal_part_of_deltoid_muscler': 'upper-limb:Deltoid_muscler',
  'upper-limb:Transverse_part_of_trapezius_muscler': 'upper-limb:Trapezius_muscler',
  'hand:Oblique_head_of_adductor_pollicis': 'hand:Adductor_pollicis',
  'hand:Transverse_head_of_adductor_pollicis': 'hand:Adductor_pollicis',
};

/** pieceKey del marcador → nombre legible del marcador (para UI). */
export const OVERLAY_LABELS: Record<string, string> = {
  'lower-limb:Ligament_of_head_of_femurr': 'Femurr',
  'lower-limb:Common_tendon_of_Semitendinosus_and_Long_head_of_biceps_femoris': 'Common_tendon_of_biceps_femorisr',
  'lower-limb:Lateral_head_of_gastrocnemiusr': 'Lateral_subtendinous_bursa_of_gastrocnemius_muscler',
  'lower-limb:Long_head_of_biceps_femorisr': 'Common_tendon_of_biceps_femorisr',
  'lower-limb:Medial_head_of_gastrocnemiusr': 'Lateral_subtendinous_bursa_of_gastrocnemius_muscler',
  'lower-limb:Short_head_of_biceps_femorisr': 'Common_tendon_of_biceps_femorisr',
  'upper-limb:Lateral_head_of_triceps_brachiir': 'Common_tendon_of_triceps_brachiir',
  'upper-limb:Long_head_of_biceps_brachiir': 'Common_tendon_of_biceps_brachiir',
  'upper-limb:Long_head_of_triceps_brachiir': 'Common_tendon_of_triceps_brachiir',
  'upper-limb:Medial_head_of_triceps_brachiir': 'Common_tendon_of_triceps_brachiir',
  'upper-limb:Short_head_of_biceps_brachiir': 'Common_tendon_of_biceps_brachiir',
  'upper-limb:Humeral_head_of_extensor_carpi_ulnarisr': 'Common_tendon_of_extensor_carpi_ulnarisr',
  'upper-limb:Humeral_head_of_flexor_carpi_ulnarisr': 'Common_tendon_of_flexor_carpi_ulnarisr',
  'upper-limb:Ulnar_head_of_extensor_carpi_ulnarisr': 'Common_tendon_of_extensor_carpi_ulnarisr',
  'upper-limb:Ulnar_head_of_flexor_carpi_ulnarisr': 'Common_tendon_of_flexor_carpi_ulnarisr',
  'upper-limb:Thickened_part_of_antebrachial_fascia': 'Antebrachial_fasciar',
  'upper-limb:Oblique_head_of_adductor_pollicisr': 'Adductor_pollicisr',
  'upper-limb:Transverse_head_of_adductor_pollicisr': 'Adductor_pollicisr',
  'upper-limb:Acromial_part_of_deltoid_muscler': 'Deltoid_muscler',
  'upper-limb:Ascending_part_of_Trapezius_muscler': 'Trapezius_muscler',
  'upper-limb:Clavicular_part_of_deltoid_muscler': 'Deltoid_muscler',
  'upper-limb:Descending_part_of_Trapezius_muscler': 'Trapezius_muscler',
  'upper-limb:Spinal_part_of_deltoid_muscler': 'Deltoid_muscler',
  'upper-limb:Transverse_part_of_trapezius_muscler': 'Trapezius_muscler',
  'hand:Oblique_head_of_adductor_pollicis': 'Adductor_pollicis',
  'hand:Transverse_head_of_adductor_pollicis': 'Adductor_pollicis',
};

export function overlayParent(pieceKeyStr: string): string | null {
  return OVERLAY_PARENT[pieceKeyStr] ?? null;
}

```

### src/data/fitness/anatomy/jointRom.ts

```ts
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

```

### src/data/fitness/anatomy/compositePlan.ts

```ts
// src/data/fitness/anatomy/compositePlan.ts
// AG-ANATOM — GENERADO por rag/anatomy/scripts/analyze-merge.mjs (no editar a mano).
// Plan del modelo COMPUESTO: unión de los 5 GLB con dedup geométrico por AABB
// mundial (Δ=0 en todas las piezas comunes: los GLB comparten espacio mundial).
// Regiones: hand > skull > lower > upper (prioridad) > axial (solo skeleton).
// hiddenByDup: la pieza queda oculta por defecto porque un especialista la
// representa con geometría idéntica en el mismo sitio.
// Regenerar: node rag/anatomy/scripts/analyze-merge.mjs
// (emitido como tuplas compactas: 1380 object literals desbordan el inferidor de TS)

export type CompositeRegion = 'axial' | 'skull' | 'upper' | 'lower' | 'hand';
export type CompositeKind =
  | 'muscle' | 'tendon' | 'ligament' | 'nerve' | 'bone' | 'cartilage'
  | 'bursa' | 'artery' | 'vein' | 'fascia' | 'overlay' | 'other';

export interface CompositePiece {
  model: string;
  name: string;
  region: CompositeRegion;
  kind: CompositeKind;
  container: string;
  /** model:name del especialista que representa esta pieza (oculta por defecto). */
  hiddenByDup?: string;
}

// [model, name, region, kind, container, hiddenByDup?]
const RAW: Array<[string, string, CompositeRegion, CompositeKind, string, string?]> = [
  ['overview-skeleton', 'Atlas_(C1)', 'axial', 'bone', 'Bones', 'upper-limb:Atlas_(C1)'],
  ['overview-skeleton', 'Axis_(C2)', 'axial', 'bone', 'Bones', 'upper-limb:Axis_(C2)'],
  ['overview-skeleton', 'Body_of_sternum', 'upper', 'bone', 'Bones'],
  ['overview-skeleton', 'Cervical_vertebrae_(C3)', 'axial', 'bone', 'Bones', 'upper-limb:Cervical_vertebra_(C3)'],
  ['overview-skeleton', 'Cervical_vertebrae_(C4)', 'axial', 'bone', 'Bones', 'upper-limb:Cervical_vertebra_(C4)'],
  ['overview-skeleton', 'Cervical_vertebrae_(C5)', 'axial', 'bone', 'Bones', 'upper-limb:Cervical_vertebra_(C5)'],
  ['overview-skeleton', 'Cervical_vertebrae_(C6)', 'axial', 'bone', 'Bones', 'upper-limb:Cervical_vertebra_(C6)'],
  ['overview-skeleton', 'Cervical_vertebrae_(C7)', 'axial', 'bone', 'Bones', 'upper-limb:Cervical_vertebra_(C7)'],
  ['overview-skeleton', 'Coccyx', 'axial', 'bone', 'Bones', 'lower-limb:Coccyx'],
  ['overview-skeleton', 'Ethmoid_Bone', 'skull', 'bone', 'Bones', 'colored-skull-base:(región cráneo completa)'],
  ['overview-skeleton', 'Frontal_bone', 'skull', 'bone', 'Bones', 'colored-skull-base:(región cráneo completa)'],
  ['overview-skeleton', 'Lumbar_vertebrae_(L1)', 'axial', 'bone', 'Bones', 'lower-limb:Lumbar_vertebra_(L1)'],
  ['overview-skeleton', 'Lumbar_vertebrae_(L2)', 'axial', 'bone', 'Bones', 'lower-limb:Lumbar_vertebra_(L2)'],
  ['overview-skeleton', 'Lumbar_vertebrae_(L3)', 'axial', 'bone', 'Bones', 'lower-limb:Lumbar_vertebra_(L3)'],
  ['overview-skeleton', 'Lumbar_vertebrae_(L4)', 'axial', 'bone', 'Bones', 'lower-limb:Lumbar_vertebra_(L4)'],
  ['overview-skeleton', 'Lumbar_vertebrae_(L5)', 'axial', 'bone', 'Bones', 'lower-limb:Lumbar_vertebra_(L5)'],
  ['overview-skeleton', 'Mandible_bone', 'skull', 'bone', 'Bones', 'colored-skull-base:(región cráneo completa)'],
  ['overview-skeleton', 'Manubrium_of_sternum', 'upper', 'bone', 'Bones'],
  ['overview-skeleton', 'Occipital_bone', 'skull', 'bone', 'Bones', 'colored-skull-base:(región cráneo completa)'],
  ['overview-skeleton', 'Parietal_bone_left', 'skull', 'bone', 'Bones', 'colored-skull-base:(región cráneo completa)'],
  ['overview-skeleton', 'Parietal_bone_right', 'skull', 'bone', 'Bones', 'colored-skull-base:(región cráneo completa)'],
  ['overview-skeleton', 'Sacrum', 'axial', 'bone', 'Bones', 'lower-limb:Sacrum'],
  ['overview-skeleton', 'Sphenoid_bone', 'skull', 'bone', 'Bones', 'colored-skull-base:(región cráneo completa)'],
  ['overview-skeleton', 'Thoracic_vertebrae_(T1)', 'axial', 'bone', 'Bones', 'upper-limb:Thoracic_vertebra_(T1)'],
  ['overview-skeleton', 'Thoracic_vertebrae_(T10)', 'axial', 'bone', 'Bones', 'upper-limb:Thoracic_vertebra_(T10)'],
  ['overview-skeleton', 'Thoracic_vertebrae_(T11)', 'axial', 'bone', 'Bones', 'upper-limb:Thoracic_vertebra_(T11)'],
  ['overview-skeleton', 'Thoracic_vertebrae_(T12)', 'axial', 'bone', 'Bones', 'lower-limb:Thoracic_vertebra_(T12)'],
  ['overview-skeleton', 'Thoracic_vertebrae_(T2)', 'axial', 'bone', 'Bones', 'upper-limb:Thoracic_vertebra_(T2)'],
  ['overview-skeleton', 'Thoracic_vertebrae_(T3)', 'axial', 'bone', 'Bones', 'upper-limb:Thoracic_vertebra_(T3)'],
  ['overview-skeleton', 'Thoracic_vertebrae_(T4)', 'axial', 'bone', 'Bones', 'upper-limb:Thoracic_vertebra_(T4)'],
  ['overview-skeleton', 'Thoracic_vertebrae_(T5)', 'axial', 'bone', 'Bones', 'upper-limb:Thoracic_vertebra_(T5)'],
  ['overview-skeleton', 'Thoracic_vertebrae_(T6)', 'axial', 'bone', 'Bones', 'upper-limb:Thoracic_vertebra_(T6)'],
  ['overview-skeleton', 'Thoracic_vertebrae_(T7)', 'axial', 'bone', 'Bones', 'upper-limb:Thoracic_vertebra_(T7)'],
  ['overview-skeleton', 'Thoracic_vertebrae_(T8)', 'axial', 'bone', 'Bones', 'upper-limb:Thoracic_vertebra_(T8)'],
  ['overview-skeleton', 'Thoracic_vertebrae_(T9)', 'axial', 'bone', 'Bones', 'upper-limb:Thoracic_vertebra_(T9)'],
  ['overview-skeleton', 'Vomer', 'skull', 'bone', 'Bones', 'colored-skull-base:(región cráneo completa)'],
  ['overview-skeleton', '1st_metacarpal_boner', 'upper', 'bone', 'Bones_right', 'hand:1st_metacarpal_bone'],
  ['overview-skeleton', '2nd_metacarpal_boner', 'upper', 'bone', 'Bones_right', 'hand:2nd_metacarpal_bone'],
  ['overview-skeleton', '3rd_metacarpal_boner', 'upper', 'bone', 'Bones_right', 'hand:3rd_metacarpal_bone'],
  ['overview-skeleton', '4th_metacarpal_boner', 'upper', 'bone', 'Bones_right', 'hand:4th_metacarpal_bone'],
  ['overview-skeleton', '5th_metacarpal_boner', 'upper', 'bone', 'Bones_right', 'hand:5th_metacarpal_bone'],
  ['overview-skeleton', 'Calcaneusr', 'lower', 'bone', 'Bones_right'],
  ['overview-skeleton', 'Capitater', 'hand', 'bone', 'Bones_right'],
  ['overview-skeleton', 'Clavicler', 'upper', 'bone', 'Bones_right'],
  ['overview-skeleton', 'Cuboid_boner', 'lower', 'bone', 'Bones_right'],
  ['overview-skeleton', 'Distal_phalanx_of_1st_fingerr', 'upper', 'bone', 'Bones_right', 'hand:Distal_phalanx_of_1st_finger'],
  ['overview-skeleton', 'Distal_phalanx_of_2d_fingerr', 'upper', 'bone', 'Bones_right', 'hand:Distal_phalanx_of_2d_finger'],
  ['overview-skeleton', 'Distal_phalanx_of_3d_fingerr', 'upper', 'bone', 'Bones_right', 'hand:Distal_phalanx_of_3d_finger'],
  ['overview-skeleton', 'Distal_phalanx_of_4th_fingerr', 'upper', 'bone', 'Bones_right', 'hand:Distal_phalanx_of_4th_finger'],
  ['overview-skeleton', 'Distal_phalanx_of_5th_fingerr', 'upper', 'bone', 'Bones_right', 'hand:Distal_phalanx_of_5th_finger'],
  ['overview-skeleton', 'Distal_phalanx_of_fifth_finger_of_footr', 'lower', 'bone', 'Bones_right'],
  ['overview-skeleton', 'Distal_phalanx_of_first_finger_of_footr', 'lower', 'bone', 'Bones_right'],
  ['overview-skeleton', 'Distal_phalanx_of_fourth_finger_of_footr', 'lower', 'bone', 'Bones_right'],
  ['overview-skeleton', 'Distal_phalanx_of_second_finger_of_footr', 'lower', 'bone', 'Bones_right'],
  ['overview-skeleton', 'Distal_phalanx_of_third_finger_of_footr', 'lower', 'bone', 'Bones_right'],
  ['overview-skeleton', 'Femurr', 'lower', 'bone', 'Bones_right'],
  ['overview-skeleton', 'Fibular', 'lower', 'bone', 'Bones_right'],
  ['overview-skeleton', 'Fifth_metatarsal_boner', 'lower', 'bone', 'Bones_right'],
  ['overview-skeleton', 'First_metatarsal_boner', 'lower', 'bone', 'Bones_right'],
  ['overview-skeleton', 'Fourth_metatarsal_boner', 'lower', 'bone', 'Bones_right'],
  ['overview-skeleton', 'Hamater', 'hand', 'bone', 'Bones_right'],
  ['overview-skeleton', 'Hip_boner', 'lower', 'bone', 'Bones_right'],
  ['overview-skeleton', 'Humerusr', 'upper', 'bone', 'Bones_right'],
  ['overview-skeleton', 'Inferior_nasal_concha_boner', 'skull', 'bone', 'Bones_right', 'colored-skull-base:(región cráneo completa)'],
  ['overview-skeleton', 'Intermediate_cuneiform_boner', 'lower', 'bone', 'Bones_right'],
  ['overview-skeleton', 'Lacrimal_boner', 'skull', 'bone', 'Bones_right', 'colored-skull-base:(región cráneo completa)'],
  ['overview-skeleton', 'Lateral_cuneiform_boner', 'lower', 'bone', 'Bones_right'],
  ['overview-skeleton', 'Lower_caniner', 'skull', 'bone', 'Bones_right', 'colored-skull-base:(región cráneo completa)'],
  ['overview-skeleton', 'Lower_first_molar_toothr', 'skull', 'bone', 'Bones_right', 'colored-skull-base:(región cráneo completa)'],
  ['overview-skeleton', 'Lower_first_premolarr', 'skull', 'bone', 'Bones_right', 'colored-skull-base:(región cráneo completa)'],
  ['overview-skeleton', 'Lower_lateral_incisorr', 'skull', 'bone', 'Bones_right', 'colored-skull-base:(región cráneo completa)'],
  ['overview-skeleton', 'Lower_medial_incisorr', 'skull', 'bone', 'Bones_right', 'colored-skull-base:(región cráneo completa)'],
  ['overview-skeleton', 'Lower_second_molar_toothr', 'skull', 'bone', 'Bones_right', 'colored-skull-base:(región cráneo completa)'],
  ['overview-skeleton', 'Lower_second_premolarr', 'skull', 'bone', 'Bones_right', 'colored-skull-base:(región cráneo completa)'],
  ['overview-skeleton', 'Lunate_boner', 'hand', 'bone', 'Bones_right'],
  ['overview-skeleton', 'Maxilla_boner', 'skull', 'bone', 'Bones_right', 'colored-skull-base:(región cráneo completa)'],
  ['overview-skeleton', 'Medial_cuneiform_boner', 'lower', 'bone', 'Bones_right'],
  ['overview-skeleton', 'Middle_phalanx_of_2d_fingerr', 'upper', 'bone', 'Bones_right', 'hand:Middle_phalanx_of_2d_finger'],
  ['overview-skeleton', 'Middle_phalanx_of_3rd_fingerr', 'upper', 'bone', 'Bones_right', 'hand:Middle_phalanx_of_3rd_finger'],
  ['overview-skeleton', 'Middle_phalanx_of_4th_fingerr', 'upper', 'bone', 'Bones_right', 'hand:Middle_phalanx_of_4th_finger'],
  ['overview-skeleton', 'Middle_phalanx_of_5th_fingerr', 'upper', 'bone', 'Bones_right', 'hand:Middle_phalanx_of_5th_finger'],
  ['overview-skeleton', 'Middle_phalanx_of_fifth_finger_of_footr', 'lower', 'bone', 'Bones_right'],
  ['overview-skeleton', 'Middle_phalanx_of_fourth_finger_of_footr', 'lower', 'bone', 'Bones_right'],
  ['overview-skeleton', 'Middle_phalanx_of_second_finger_of_footr', 'lower', 'bone', 'Bones_right'],
  ['overview-skeleton', 'Middle_phalanx_of_third_finger_of_footr', 'lower', 'bone', 'Bones_right'],
  ['overview-skeleton', 'Nasal_boner', 'skull', 'bone', 'Bones_right', 'colored-skull-base:(región cráneo completa)'],
  ['overview-skeleton', 'Navicular_boner', 'lower', 'bone', 'Bones_right'],
  ['overview-skeleton', 'Palatine_boner', 'skull', 'bone', 'Bones_right', 'colored-skull-base:(región cráneo completa)'],
  ['overview-skeleton', 'Patellar', 'lower', 'bone', 'Bones_right'],
  ['overview-skeleton', 'Pisiformr', 'upper', 'bone', 'Bones_right', 'hand:Pisiform'],
  ['overview-skeleton', 'Proximal_phalanx_of_1st_fingerr', 'upper', 'bone', 'Bones_right', 'hand:Proximal_phalanx_of_1st_finger'],
  ['overview-skeleton', 'Proximal_phalanx_of_2d_fingerr', 'upper', 'bone', 'Bones_right', 'hand:Proximal_phalanx_of_2d_finger'],
  ['overview-skeleton', 'Proximal_phalanx_of_3rd_fingerr', 'upper', 'bone', 'Bones_right', 'hand:Proximal_phalanx_of_3rd_finger'],
  ['overview-skeleton', 'Proximal_phalanx_of_4th_fingerr', 'upper', 'bone', 'Bones_right', 'hand:Proximal_phalanx_of_4th_finger'],
  ['overview-skeleton', 'Proximal_phalanx_of_5th_fingerr', 'upper', 'bone', 'Bones_right', 'hand:Proximal_phalanx_of_5th_finger'],
  ['overview-skeleton', 'Proximal_phalanx_of_fifth_finger_of_footr', 'lower', 'bone', 'Bones_right'],
  ['overview-skeleton', 'Proximal_phalanx_of_first_finger_of_footr', 'lower', 'bone', 'Bones_right'],
  ['overview-skeleton', 'Proximal_phalanx_of_fourth_finger_of_footr', 'lower', 'bone', 'Bones_right'],
  ['overview-skeleton', 'Proximal_phalanx_of_second_finger_of_footr', 'lower', 'bone', 'Bones_right'],
  ['overview-skeleton', 'Proximal_phalanx_of_third_finger_of_footr', 'lower', 'bone', 'Bones_right'],
  ['overview-skeleton', 'Radiusr', 'hand', 'bone', 'Bones_right'],
  ['overview-skeleton', 'Rib_(10th)r', 'upper', 'bone', 'Bones_right'],
  ['overview-skeleton', 'Rib_(11th)r', 'upper', 'bone', 'Bones_right'],
  ['overview-skeleton', 'Rib_(12th)r', 'upper', 'bone', 'Bones_right'],
  ['overview-skeleton', 'Rib_(1st)r', 'upper', 'bone', 'Bones_right'],
  ['overview-skeleton', 'Rib_(2nd)r', 'upper', 'bone', 'Bones_right'],
  ['overview-skeleton', 'Rib_(3rd)r', 'upper', 'bone', 'Bones_right'],
  ['overview-skeleton', 'Rib_(4th)r', 'upper', 'bone', 'Bones_right'],
  ['overview-skeleton', 'Rib_(5th)r', 'upper', 'bone', 'Bones_right'],
  ['overview-skeleton', 'Rib_(6th)r', 'upper', 'bone', 'Bones_right'],
  ['overview-skeleton', 'Rib_(7th)r', 'upper', 'bone', 'Bones_right'],
  ['overview-skeleton', 'Rib_(8th)r', 'upper', 'bone', 'Bones_right'],
  ['overview-skeleton', 'Rib_(9th)r', 'upper', 'bone', 'Bones_right'],
  ['overview-skeleton', 'Scaphoidr', 'hand', 'bone', 'Bones_right'],
  ['overview-skeleton', 'Scapular', 'upper', 'bone', 'Bones_right'],
  ['overview-skeleton', 'Second_metatarsal_boner', 'lower', 'bone', 'Bones_right'],
  ['overview-skeleton', 'Sesamoid_bones_of_footr', 'lower', 'bone', 'Bones_right'],
  ['overview-skeleton', 'Sesamoid_bones_of_handr', 'upper', 'bone', 'Bones_right', 'hand:Sesamoid_bones'],
  ['overview-skeleton', 'Talusr', 'lower', 'bone', 'Bones_right'],
  ['overview-skeleton', 'Temporal_boner', 'skull', 'bone', 'Bones_right', 'colored-skull-base:(región cráneo completa)'],
  ['overview-skeleton', 'Third_metatarsal_boner', 'lower', 'bone', 'Bones_right'],
  ['overview-skeleton', 'Tibiar', 'lower', 'bone', 'Bones_right'],
  ['overview-skeleton', 'Trapeziumr', 'hand', 'bone', 'Bones_right'],
  ['overview-skeleton', 'Trapezoidr', 'upper', 'bone', 'Bones_right', 'hand:Trapezoid'],
  ['overview-skeleton', 'Triquetrumr', 'upper', 'bone', 'Bones_right', 'hand:Hamate'],
  ['overview-skeleton', 'Ulnar', 'hand', 'bone', 'Bones_right'],
  ['overview-skeleton', 'Upper_caniner', 'skull', 'bone', 'Bones_right', 'colored-skull-base:(región cráneo completa)'],
  ['overview-skeleton', 'Upper_first_molar_toothr', 'skull', 'bone', 'Bones_right', 'colored-skull-base:(región cráneo completa)'],
  ['overview-skeleton', 'Upper_first_premolarr', 'skull', 'bone', 'Bones_right', 'colored-skull-base:(región cráneo completa)'],
  ['overview-skeleton', 'Upper_lateral_incisorr', 'skull', 'bone', 'Bones_right', 'colored-skull-base:(región cráneo completa)'],
  ['overview-skeleton', 'Upper_medial_incisorr', 'skull', 'bone', 'Bones_right', 'colored-skull-base:(región cráneo completa)'],
  ['overview-skeleton', 'Upper_second_molar_toothr', 'skull', 'bone', 'Bones_right', 'colored-skull-base:(región cráneo completa)'],
  ['overview-skeleton', 'Upper_second_premolarr', 'skull', 'bone', 'Bones_right', 'colored-skull-base:(región cráneo completa)'],
  ['overview-skeleton', 'Zygomatic_boner', 'skull', 'bone', 'Bones_right', 'colored-skull-base:(región cráneo completa)'],
  ['overview-skeleton', 'Costal_cart_of_10th_ribr', 'axial', 'cartilage', 'Cartilages_right', 'upper-limb:Costal_cart_of_10thribr'],
  ['overview-skeleton', 'Costal_cart_of_1st_ribr', 'axial', 'cartilage', 'Cartilages_right', 'upper-limb:Costal_cart_of_1stribr'],
  ['overview-skeleton', 'Costal_cart_of_2nd_ribr', 'axial', 'cartilage', 'Cartilages_right', 'upper-limb:Costal_cart_of_2ndribr'],
  ['overview-skeleton', 'Costal_cart_of_3rd_ribr', 'axial', 'cartilage', 'Cartilages_right', 'upper-limb:Costal_cart_of_3rdribr'],
  ['overview-skeleton', 'Costal_cart_of_4th_ribr', 'axial', 'cartilage', 'Cartilages_right', 'upper-limb:Costal_cart_of_4thribr'],
  ['overview-skeleton', 'Costal_cart_of_5th_ribr', 'axial', 'cartilage', 'Cartilages_right', 'upper-limb:Costal_cart_of_5thribr'],
  ['overview-skeleton', 'Costal_cart_of_6th_ribr', 'axial', 'cartilage', 'Cartilages_right', 'upper-limb:Costal_cart_of_6thribr'],
  ['overview-skeleton', 'Costal_cart_of_7th_ribr', 'axial', 'cartilage', 'Cartilages_right', 'upper-limb:Costal_cart_of_7thribr'],
  ['overview-skeleton', 'Costal_cart_of_8th_ribr', 'axial', 'cartilage', 'Cartilages_right', 'upper-limb:Costal_cart_of_8thribr'],
  ['overview-skeleton', 'Costal_cart_of_9th_ribr', 'axial', 'cartilage', 'Cartilages_right', 'upper-limb:Costal_cart_of_9thribr'],
  ['lower-limb', 'Calcaneusr', 'lower', 'bone', 'Bones'],
  ['lower-limb', 'Coccyx', 'lower', 'bone', 'Bones'],
  ['lower-limb', 'Cuboid_boner', 'lower', 'bone', 'Bones'],
  ['lower-limb', 'Distal_phalanx_of_fifth_finger_of_footr', 'lower', 'bone', 'Bones'],
  ['lower-limb', 'Distal_phalanx_of_first_finger_of_footr', 'lower', 'bone', 'Bones'],
  ['lower-limb', 'Distal_phalanx_of_fourth_finger_of_footr', 'lower', 'bone', 'Bones'],
  ['lower-limb', 'Distal_phalanx_of_second_finger_of_footr', 'lower', 'bone', 'Bones'],
  ['lower-limb', 'Distal_phalanx_of_third_finger_of_footr', 'lower', 'bone', 'Bones'],
  ['lower-limb', 'Femurr', 'lower', 'bone', 'Bones'],
  ['lower-limb', 'Fibular', 'lower', 'bone', 'Bones'],
  ['lower-limb', 'Fifth_metatarsal_boner', 'lower', 'bone', 'Bones'],
  ['lower-limb', 'First_metatarsal_boner', 'lower', 'bone', 'Bones'],
  ['lower-limb', 'Fourth_metatarsal_boner', 'lower', 'bone', 'Bones'],
  ['lower-limb', 'Hip_boner', 'lower', 'bone', 'Bones'],
  ['lower-limb', 'Intermediate_cuneiform_boner', 'lower', 'bone', 'Bones'],
  ['lower-limb', 'Lateral_cuneiform_boner', 'lower', 'bone', 'Bones'],
  ['lower-limb', 'Lumbar_vertebra_(L1)', 'lower', 'bone', 'Bones'],
  ['lower-limb', 'Lumbar_vertebra_(L2)', 'lower', 'bone', 'Bones'],
  ['lower-limb', 'Lumbar_vertebra_(L3)', 'lower', 'bone', 'Bones'],
  ['lower-limb', 'Lumbar_vertebra_(L4)', 'lower', 'bone', 'Bones'],
  ['lower-limb', 'Lumbar_vertebra_(L5)', 'lower', 'bone', 'Bones'],
  ['lower-limb', 'Medial_cuneiform_boner', 'lower', 'bone', 'Bones'],
  ['lower-limb', 'Middle_phalanx_of_fifth_finger_of_footr', 'lower', 'bone', 'Bones'],
  ['lower-limb', 'Middle_phalanx_of_fourth_finger_of_footr', 'lower', 'bone', 'Bones'],
  ['lower-limb', 'Middle_phalanx_of_second_finger_of_footr', 'lower', 'bone', 'Bones'],
  ['lower-limb', 'Middle_phalanx_of_third_finger_of_footr', 'lower', 'bone', 'Bones'],
  ['lower-limb', 'Navicular_boner', 'lower', 'bone', 'Bones'],
  ['lower-limb', 'Patellar', 'lower', 'bone', 'Bones'],
  ['lower-limb', 'Proximal_phalanx_of_fifth_finger_of_footr', 'lower', 'bone', 'Bones'],
  ['lower-limb', 'Proximal_phalanx_of_first_finger_of_footr', 'lower', 'bone', 'Bones'],
  ['lower-limb', 'Proximal_phalanx_of_fourth_finger_of_footr', 'lower', 'bone', 'Bones'],
  ['lower-limb', 'Proximal_phalanx_of_second_finger_of_footr', 'lower', 'bone', 'Bones'],
  ['lower-limb', 'Proximal_phalanx_of_third_finger_of_footr', 'lower', 'bone', 'Bones'],
  ['lower-limb', 'Sacrum', 'lower', 'bone', 'Bones'],
  ['lower-limb', 'Second_metatarsal_boner', 'lower', 'bone', 'Bones'],
  ['lower-limb', 'Sesamoid_bones_of_footr', 'lower', 'bone', 'Bones'],
  ['lower-limb', 'Talusr', 'lower', 'bone', 'Bones'],
  ['lower-limb', 'Third_metatarsal_boner', 'lower', 'bone', 'Bones'],
  ['lower-limb', 'Thoracic_vertebra_(T12)', 'lower', 'bone', 'Bones'],
  ['lower-limb', 'Tibiar', 'lower', 'bone', 'Bones'],
  ['lower-limb', 'Acetabular_labrumr', 'lower', 'cartilage', 'Cartilages'],
  ['lower-limb', 'Annulus_fibrosus_L1_L2', 'lower', 'cartilage', 'Cartilages'],
  ['lower-limb', 'Annulus_fibrosus_L2_L3', 'lower', 'cartilage', 'Cartilages'],
  ['lower-limb', 'Annulus_fibrosus_L3_L4', 'lower', 'cartilage', 'Cartilages'],
  ['lower-limb', 'Annulus_fibrosus_L4_L5', 'lower', 'cartilage', 'Cartilages'],
  ['lower-limb', 'Annulus_fibrosus_L5_S1', 'lower', 'cartilage', 'Cartilages'],
  ['lower-limb', 'Annulus_fibrosus_T12_L1', 'lower', 'cartilage', 'Cartilages'],
  ['lower-limb', 'Art_cart_of_calcaneusr_', 'lower', 'cartilage', 'Cartilages'],
  ['lower-limb', 'Art_cart_of_cuboid_boner', 'lower', 'cartilage', 'Cartilages'],
  ['lower-limb', 'Art_cart_of_femur_distal_endr', 'lower', 'cartilage', 'Cartilages'],
  ['lower-limb', 'Art_cart_of_femur_headr', 'lower', 'cartilage', 'Cartilages'],
  ['lower-limb', 'Art_cart_of_fibula_proximal_tibiofibular_jointr', 'lower', 'cartilage', 'Cartilages'],
  ['lower-limb', 'Art_cart_of_fibula_talofibular_jointr', 'lower', 'cartilage', 'Cartilages'],
  ['lower-limb', 'Art_cart_of_hip_bone_pubisr_', 'lower', 'cartilage', 'Cartilages'],
  ['lower-limb', 'Art_cart_of_intermediate_cuneiform_boner', 'lower', 'cartilage', 'Cartilages'],
  ['lower-limb', 'Art_cart_of_lateral_cuneiform_boner', 'lower', 'cartilage', 'Cartilages'],
  ['lower-limb', 'Art_cart_of_medial_cuneiform_boner_', 'lower', 'cartilage', 'Cartilages'],
  ['lower-limb', 'Art_cart_of_navicular_boner', 'lower', 'cartilage', 'Cartilages'],
  ['lower-limb', 'Art_cart_of_patellar', 'lower', 'cartilage', 'Cartilages'],
  ['lower-limb', 'Art_cart_of_sacrococcygeal_joint_on_coccyx', 'lower', 'cartilage', 'Cartilages'],
  ['lower-limb', 'Art_cart_of_sacrococcygeal_joint_on_sacrum', 'lower', 'cartilage', 'Cartilages'],
  ['lower-limb', 'Art_cart_of_sacroiliac_joint_on_hip_bone', 'lower', 'cartilage', 'Cartilages'],
  ['lower-limb', 'Art_cart_of_sacroiliac_joint_on_sacrum', 'lower', 'cartilage', 'Cartilages'],
  ['lower-limb', 'Art_cart_of_Sesamoid_bonesr', 'lower', 'cartilage', 'Cartilages'],
  ['lower-limb', 'Art_cart_of_talusr_​', 'lower', 'cartilage', 'Cartilages'],
  ['lower-limb', 'Art_cart_of_tibia_distal_endr_', 'lower', 'cartilage', 'Cartilages'],
  ['lower-limb', 'Art_cart_of_tibia_proximal_endr', 'lower', 'cartilage', 'Cartilages'],
  ['lower-limb', 'Art_cart_of_tibia_proximal_tibiofibular_jointr​', 'lower', 'cartilage', 'Cartilages'],
  ['lower-limb', 'Art_carts_of_distal_phalanges_of_footr', 'lower', 'cartilage', 'Cartilages'],
  ['lower-limb', 'Art_carts_of_metatarsal_bonesr', 'lower', 'cartilage', 'Cartilages'],
  ['lower-limb', 'Art_carts_of_middle_phalanges_of_footr', 'lower', 'cartilage', 'Cartilages'],
  ['lower-limb', 'Art_carts_of_proximal_phalanges_of_footr', 'lower', 'cartilage', 'Cartilages'],
  ['lower-limb', 'Lateral_meniscusr', 'lower', 'cartilage', 'Cartilages'],
  ['lower-limb', 'Medial_meniscusr', 'lower', 'cartilage', 'Cartilages'],
  ['lower-limb', 'Symphysis_of_sacrococcygeal_joint', 'lower', 'cartilage', 'Cartilages'],
  ['lower-limb', 'Synovial_membranes_of_kneer', 'lower', 'cartilage', 'Cartilages'],
  ['lower-limb', 'Anterior_cruciate_ligamentr', 'lower', 'ligament', 'Ligaments'],
  ['lower-limb', 'Anterior_horn_of_Lateral_meniscusr', 'lower', 'ligament', 'Ligaments'],
  ['lower-limb', 'Anterior_horn_of_Medial_meniscusr', 'lower', 'ligament', 'Ligaments'],
  ['lower-limb', 'Anterior_sacro-iliac_ligamentr', 'lower', 'ligament', 'Ligaments'],
  ['lower-limb', 'Anterior_talocalcaneal_ligamentr', 'lower', 'ligament', 'Ligaments'],
  ['lower-limb', 'Anterior_talofibular_ligamentr', 'lower', 'ligament', 'Ligaments'],
  ['lower-limb', 'Anterior_tibiofibular_ligamentr', 'lower', 'ligament', 'Ligaments'],
  ['lower-limb', 'Anterior_tibiotalar_ligament_(Tibiospring_lig)r', 'lower', 'ligament', 'Ligaments'],
  ['lower-limb', 'Articular_capsule_of_knee_jointr', 'lower', 'ligament', 'Ligaments'],
  ['lower-limb', 'Articular_capsules_of_distal_interphalangeal_joints', 'lower', 'ligament', 'Ligaments', 'hand:Articular_capsules_of_distal_interphalangeal_joints'],
  ['lower-limb', 'Articular_capsules_of_metatarsophalangeal_jointsr', 'lower', 'ligament', 'Ligaments'],
  ['lower-limb', 'Articular_capsules_of_proximal_interphalangealr', 'lower', 'ligament', 'Ligaments'],
  ['lower-limb', 'Articular_cartilage_of_hip_bone_acetabulumr', 'lower', 'ligament', 'Ligaments'],
  ['lower-limb', 'Bifurcatum_ligament', 'lower', 'ligament', 'Ligaments'],
  ['lower-limb', 'Calcaneofibular_ligamentr', 'lower', 'ligament', 'Ligaments'],
  ['lower-limb', 'Capsule_of_talocrural_jointr', 'lower', 'ligament', 'Ligaments'],
  ['lower-limb', 'Cervical_ligament_(anterior_talocalcaneal_ligament)r', 'lower', 'ligament', 'Ligaments'],
  ['lower-limb', 'Cuneometatarsal_interosseus_ligamentsr', 'lower', 'ligament', 'Ligaments'],
  ['lower-limb', 'Deep_transverse_metatarsal_ligamentr', 'lower', 'ligament', 'Ligaments'],
  ['lower-limb', 'Dorsal_calcaneocuboid_ligamentr', 'lower', 'ligament', 'Ligaments'],
  ['lower-limb', 'Dorsal_cuboidonavicular_ligamentr', 'lower', 'ligament', 'Ligaments'],
  ['lower-limb', 'Dorsal_cuneocuboid_ligamentr', 'lower', 'ligament', 'Ligaments'],
  ['lower-limb', 'Dorsal_cuneonavicular_ligamentsr', 'lower', 'ligament', 'Ligaments'],
  ['lower-limb', 'Dorsal_intercuneiform_ligamentsr', 'lower', 'ligament', 'Ligaments'],
  ['lower-limb', 'Dorsal_metatarsal_ligamentsr', 'lower', 'ligament', 'Ligaments'],
  ['lower-limb', 'Dorsal_tarsometatarsal_ligamentsr', 'lower', 'ligament', 'Ligaments'],
  ['lower-limb', 'Extensor_apparatus_of_1st_toer', 'lower', 'ligament', 'Ligaments'],
  ['lower-limb', 'Extensor_apparatus_of_2nd_toer', 'lower', 'ligament', 'Ligaments'],
  ['lower-limb', 'Extensor_apparatus_of_3rd_toer', 'lower', 'ligament', 'Ligaments'],
  ['lower-limb', 'Extensor_apparatus_of_4th_toer', 'lower', 'ligament', 'Ligaments'],
  ['lower-limb', 'Extensor_apparatus_of_5th_toer', 'lower', 'ligament', 'Ligaments'],
  ['lower-limb', 'Fibular_collateral_ligamentr', 'lower', 'ligament', 'Ligaments'],
  ['lower-limb', 'Hip_joint_capsuler', 'lower', 'ligament', 'Ligaments'],
  ['lower-limb', 'Iliolumbar_ligament_r', 'lower', 'ligament', 'Ligaments'],
  ['lower-limb', 'Intercornual_ligamentr', 'lower', 'ligament', 'Ligaments'],
  ['lower-limb', 'Intercuneiform_interosseus_ligamentsr', 'lower', 'ligament', 'Ligaments'],
  ['lower-limb', 'Interossea__Posterior_sacro-iliac_ligamentr', 'lower', 'ligament', 'Ligaments'],
  ['lower-limb', 'Interosseous_membrane_of_legr', 'lower', 'ligament', 'Ligaments'],
  ['lower-limb', 'Interosseus_talocalcaneal_ligamentr', 'lower', 'ligament', 'Ligaments'],
  ['lower-limb', 'Interpubic_disc', 'lower', 'ligament', 'Ligaments'],
  ['lower-limb', 'Intersesamoid_ligamentr', 'lower', 'ligament', 'Ligaments'],
  ['lower-limb', 'Ligament_of_head_of_femurr', 'lower', 'ligament', 'Ligaments'],
  ['lower-limb', 'Ligaments_of_fibular_headr', 'lower', 'ligament', 'Ligaments'],
  ['lower-limb', 'Long_plantar_ligamentr', 'lower', 'ligament', 'Ligaments'],
  ['lower-limb', 'Medial_talocalcaneal_ligamentr', 'lower', 'ligament', 'Ligaments'],
  ['lower-limb', 'Metatarsal_interosseous_ligamentsr', 'lower', 'ligament', 'Ligaments'],
  ['lower-limb', 'Obturator_membraner', 'lower', 'ligament', 'Ligaments'],
  ['lower-limb', 'Plantar_calcaneocuboid_ligamentr', 'lower', 'ligament', 'Ligaments'],
  ['lower-limb', 'Plantar_calcaneonavicular_ligamentr', 'lower', 'ligament', 'Ligaments'],
  ['lower-limb', 'Plantar_cuboideonavicular_ligamentr', 'lower', 'ligament', 'Ligaments'],
  ['lower-limb', 'Plantar_cuneocuboid_ligamentr', 'lower', 'ligament', 'Ligaments'],
  ['lower-limb', 'Plantar_cuneonavicular_ligamentsr', 'lower', 'ligament', 'Ligaments'],
  ['lower-limb', 'Plantar_intercuneiform_ligamentsr', 'lower', 'ligament', 'Ligaments'],
  ['lower-limb', 'Plantar_metatarsal_ligamentsr', 'lower', 'ligament', 'Ligaments'],
  ['lower-limb', 'Plantar_tarsometatarsal_ligamentsr', 'lower', 'ligament', 'Ligaments'],
  ['lower-limb', 'Posterior_cruciate_ligamentr', 'lower', 'ligament', 'Ligaments'],
  ['lower-limb', 'Posterior_horn_of_Lateral_meniscusr', 'lower', 'ligament', 'Ligaments'],
  ['lower-limb', 'Posterior_horn_of_Medial_meniscusr', 'lower', 'ligament', 'Ligaments'],
  ['lower-limb', 'Posterior_meniscofemoral_ligamentr', 'lower', 'ligament', 'Ligaments'],
  ['lower-limb', 'Posterior_talocalcaneal_ligamentr', 'lower', 'ligament', 'Ligaments'],
  ['lower-limb', 'Posterior_tibiofibular_ligamentr', 'lower', 'ligament', 'Ligaments'],
  ['lower-limb', 'Posterior_tibiotalar_ligamentr', 'lower', 'ligament', 'Ligaments'],
  ['lower-limb', 'Sacrospinous_ligamentr', 'lower', 'ligament', 'Ligaments'],
  ['lower-limb', 'Sacrotuberal_ligamentr', 'lower', 'ligament', 'Ligaments'],
  ['lower-limb', 'Sup,_Inf,_Ant,_Post,_Pubic_ligaments', 'lower', 'ligament', 'Ligaments'],
  ['lower-limb', 'Superficial_transverse_metatarsal_ligamentr', 'lower', 'ligament', 'Ligaments'],
  ['lower-limb', 'Talonavicular_ligamentr', 'lower', 'ligament', 'Ligaments'],
  ['lower-limb', 'Tibiocalcaneal_ligamentr', 'lower', 'ligament', 'Ligaments'],
  ['lower-limb', 'Tibionavicular_ligamentr', 'lower', 'ligament', 'Ligaments'],
  ['lower-limb', 'Transverse_acetabular_ligamentr', 'lower', 'ligament', 'Ligaments'],
  ['lower-limb', 'Transverse_ligament_of_kneer', 'lower', 'ligament', 'Ligaments'],
  ['lower-limb', 'Transverse_tibiofibular_ligamentr', 'lower', 'ligament', 'Ligaments'],
  ['lower-limb', '1st_Dorsal_interossei_muscles_of_footr', 'lower', 'muscle', 'Muscles'],
  ['lower-limb', '2nd_Dorsal_interossei_muscles_of_footr', 'lower', 'muscle', 'Muscles'],
  ['lower-limb', '3rd_Dorsal_interossei_muscles_of_footr', 'lower', 'muscle', 'Muscles'],
  ['lower-limb', '4th_Dorsal_interossei_muscles_of_footr', 'lower', 'muscle', 'Muscles'],
  ['lower-limb', 'Abductor_digiti_minimi_of_footr', 'lower', 'muscle', 'Muscles'],
  ['lower-limb', 'Abductor_hallucisr', 'lower', 'muscle', 'Muscles'],
  ['lower-limb', 'Adductor_brevisr', 'lower', 'muscle', 'Muscles'],
  ['lower-limb', 'Adductor_longusr', 'lower', 'muscle', 'Muscles'],
  ['lower-limb', 'Adductor_magnusr', 'lower', 'muscle', 'Muscles'],
  ['lower-limb', 'Articularis_genusr', 'lower', 'muscle', 'Muscles'],
  ['lower-limb', 'Calcaneal_tendonr', 'lower', 'tendon', 'Muscles'],
  ['lower-limb', 'Coccygeus_muscler', 'lower', 'muscle', 'Muscles'],
  ['lower-limb', 'Common_tendon_of_biceps_femorisr', 'lower', 'tendon', 'Muscles'],
  ['lower-limb', 'Common_tendon_of_Semitendinosus_and_Long_head_of_biceps_femoris', 'lower', 'tendon', 'Muscles'],
  ['lower-limb', 'Extensor_digitorum_brevisr', 'lower', 'muscle', 'Muscles'],
  ['lower-limb', 'Extensor_digitorum_longus_tendonsr', 'lower', 'tendon', 'Muscles'],
  ['lower-limb', 'Extensor_digitorum_longusr', 'lower', 'muscle', 'Muscles'],
  ['lower-limb', 'Extensor_hallucis_brevisr', 'lower', 'muscle', 'Muscles'],
  ['lower-limb', 'Extensor_hallucis_longusr', 'lower', 'muscle', 'Muscles'],
  ['lower-limb', 'Fibularis_brevis_muscler', 'lower', 'muscle', 'Muscles'],
  ['lower-limb', 'Fibularis_longus_muscler', 'lower', 'muscle', 'Muscles'],
  ['lower-limb', 'Fibularis_tertius_muscler', 'lower', 'muscle', 'Muscles'],
  ['lower-limb', 'Flexor_digiti_minimi_brevis_of_footr', 'lower', 'muscle', 'Muscles'],
  ['lower-limb', 'Flexor_digitorum_brevisr', 'lower', 'muscle', 'Muscles'],
  ['lower-limb', 'Flexor_digitorum_longusr', 'lower', 'muscle', 'Muscles'],
  ['lower-limb', 'Flexor_hallucis_longusr', 'lower', 'muscle', 'Muscles'],
  ['lower-limb', 'Gluteus_maximus_muscler', 'lower', 'muscle', 'Muscles'],
  ['lower-limb', 'Gluteus_medius_muscler', 'lower', 'muscle', 'Muscles'],
  ['lower-limb', 'Gluteus_minimus_muscler', 'lower', 'muscle', 'Muscles'],
  ['lower-limb', 'Gracilis_muscler', 'lower', 'muscle', 'Muscles'],
  ['lower-limb', 'Iliacus_muscler', 'lower', 'muscle', 'Muscles'],
  ['lower-limb', 'Inferior_gemellus_muscler', 'lower', 'muscle', 'Muscles'],
  ['lower-limb', 'Infrapatellar_fat_padr', 'lower', 'muscle', 'Muscles'],
  ['lower-limb', 'Lateral_head_of_flexor_hallucis_brevisr', 'lower', 'muscle', 'Muscles'],
  ['lower-limb', 'Lateral_head_of_gastrocnemiusr', 'lower', 'muscle', 'Muscles'],
  ['lower-limb', 'Long_head_of_biceps_femorisr', 'lower', 'muscle', 'Muscles'],
  ['lower-limb', 'Lumbrical_muscles_of_footr', 'lower', 'muscle', 'Muscles'],
  ['lower-limb', 'Medial_head_of_flexor_hallucis_brevisr', 'lower', 'muscle', 'Muscles'],
  ['lower-limb', 'Medial_head_of_gastrocnemiusr', 'lower', 'muscle', 'Muscles'],
  ['lower-limb', 'Oblique_head_of_adductor_hallucisr', 'lower', 'muscle', 'Muscles'],
  ['lower-limb', 'Obturator_externusr', 'lower', 'muscle', 'Muscles'],
  ['lower-limb', 'Obturator_internusr', 'lower', 'muscle', 'Muscles'],
  ['lower-limb', 'Opponens_digiti_minimi_muscle_of_footr', 'lower', 'muscle', 'Muscles'],
  ['lower-limb', 'Pectineus_muscler', 'lower', 'muscle', 'Muscles'],
  ['lower-limb', 'Pes_anserinus_common_tendonr', 'lower', 'tendon', 'Muscles'],
  ['lower-limb', 'Piriformis_muscler', 'lower', 'muscle', 'Muscles'],
  ['lower-limb', 'Plantar_aponeurosisr', 'lower', 'muscle', 'Muscles'],
  ['lower-limb', 'Plantar_interossei_musclesr', 'lower', 'muscle', 'Muscles'],
  ['lower-limb', 'Plantaris_muscler', 'lower', 'muscle', 'Muscles'],
  ['lower-limb', 'Popliteus_muscler', 'lower', 'muscle', 'Muscles'],
  ['lower-limb', 'Psoas_majorr', 'lower', 'muscle', 'Muscles'],
  ['lower-limb', 'Psoas_minorr', 'lower', 'muscle', 'Muscles'],
  ['lower-limb', 'Quadratus_femoris_muscler', 'lower', 'muscle', 'Muscles'],
  ['lower-limb', 'Quadratus_plantae_muscler', 'lower', 'muscle', 'Muscles'],
  ['lower-limb', 'Quadriceps_common_tendon_and_patellar_ligamentr', 'lower', 'tendon', 'Muscles'],
  ['lower-limb', 'Rectus_femorisr', 'lower', 'muscle', 'Muscles'],
  ['lower-limb', 'Sartorius_muscler', 'lower', 'muscle', 'Muscles'],
  ['lower-limb', 'Semimembranosus_muscle_tendonr', 'lower', 'tendon', 'Muscles'],
  ['lower-limb', 'Semimembranosus_muscler', 'lower', 'muscle', 'Muscles'],
  ['lower-limb', 'Semitendinosus_muscler', 'lower', 'muscle', 'Muscles'],
  ['lower-limb', 'Short_head_of_biceps_femorisr', 'lower', 'muscle', 'Muscles'],
  ['lower-limb', 'Soleus_muscler', 'lower', 'muscle', 'Muscles'],
  ['lower-limb', 'Superior_gemellus_muscler', 'lower', 'muscle', 'Muscles'],
  ['lower-limb', 'Synovial_sheaths_of_toesr', 'lower', 'muscle', 'Muscles'],
  ['lower-limb', 'Tensor_fasciae_lataer', 'lower', 'fascia', 'Muscles'],
  ['lower-limb', 'Tibialis_anterior_muscler', 'lower', 'muscle', 'Muscles'],
  ['lower-limb', 'Tibialis_posterior_muscler', 'lower', 'muscle', 'Muscles'],
  ['lower-limb', 'Transverse_head_of_adductor_hallucisr', 'lower', 'muscle', 'Muscles'],
  ['lower-limb', 'Vastus_intermedius_muscler', 'lower', 'muscle', 'Muscles'],
  ['lower-limb', 'Vastus_lateralis_muscler', 'lower', 'muscle', 'Muscles'],
  ['lower-limb', 'Vastus_medialis_muscler', 'lower', 'muscle', 'Muscles'],
  ['lower-limb', 'Anterior_intermuscular_septum_of_legr', 'lower', 'fascia', 'Fascia'],
  ['lower-limb', 'Crural_fasciar', 'lower', 'fascia', 'Fascia'],
  ['lower-limb', 'Fascia_latar', 'lower', 'fascia', 'Fascia'],
  ['lower-limb', 'Flexor_retinaculum_of_ankler', 'lower', 'fascia', 'Fascia'],
  ['lower-limb', 'Gluteal_aponeurosisr', 'lower', 'fascia', 'Fascia'],
  ['lower-limb', 'Iliotibial_tractr', 'lower', 'fascia', 'Fascia'],
  ['lower-limb', 'Inferior_extensor_retinaculumr', 'lower', 'fascia', 'Fascia'],
  ['lower-limb', 'Inferior_fibular_retinaculumr', 'lower', 'fascia', 'Fascia'],
  ['lower-limb', 'Lateral_femoral_intermuscular_septumr', 'lower', 'fascia', 'Fascia'],
  ['lower-limb', 'Medial_femoral_intermuscular_septumr', 'lower', 'fascia', 'Fascia'],
  ['lower-limb', 'Posterior_intermuscular_septum_of_legr', 'lower', 'fascia', 'Fascia'],
  ['lower-limb', 'Superior_extensor_retinaculum_of_ankler', 'lower', 'fascia', 'Fascia'],
  ['lower-limb', 'Superior_fibular_retinaculumr', 'lower', 'fascia', 'Fascia'],
  ['lower-limb', 'Transverse_intermuscular_septum_of_legr', 'lower', 'fascia', 'Fascia'],
  ['lower-limb', '1th_to_4th_perforating_branches_of_the_deep_femoral_arteryr', 'lower', 'artery', 'Arteries'],
  ['lower-limb', 'Anterior_lateral_malleolar_arteryr', 'lower', 'artery', 'Arteries'],
  ['lower-limb', 'Anterior_medial_malleolar_arteryr', 'lower', 'artery', 'Arteries'],
  ['lower-limb', 'Anterior_tibial_arteryr', 'lower', 'artery', 'Arteries'],
  ['lower-limb', 'Anterior_tibial_recurrent_arteryr', 'lower', 'artery', 'Arteries'],
  ['lower-limb', 'Arcuate_arteryr', 'lower', 'artery', 'Arteries'],
  ['lower-limb', 'Ascending_branch_of_lateral_circumflex_femoral_arteryr', 'lower', 'artery', 'Arteries'],
  ['lower-limb', 'Communicating_brof_Posterior_tibial_a_and_Femoral_ar', 'lower', 'artery', 'Arteries'],
  ['lower-limb', 'Deep_artery_of_the_thighr', 'lower', 'artery', 'Arteries'],
  ['lower-limb', 'Deep_branch_of_Medial_plantar_arteryr', 'lower', 'artery', 'Arteries'],
  ['lower-limb', 'Deep_plantar_archr', 'lower', 'artery', 'Arteries'],
  ['lower-limb', 'Deep_plantar_arteryr', 'lower', 'artery', 'Arteries'],
  ['lower-limb', 'Descending_branch_of_lateral_circumflex_femoral_arteryr', 'lower', 'artery', 'Arteries'],
  ['lower-limb', 'Descending_genicular_arteryr', 'lower', 'artery', 'Arteries'],
  ['lower-limb', 'Dorsal_digital_arteries_of_footr', 'lower', 'artery', 'Arteries'],
  ['lower-limb', 'Dorsal_metatarsal_arteriesr', 'lower', 'artery', 'Arteries'],
  ['lower-limb', 'Dorsal_pedis_arteryr', 'lower', 'artery', 'Arteries'],
  ['lower-limb', 'Femoral_arteryr', 'lower', 'artery', 'Arteries'],
  ['lower-limb', 'Femoral_neck_vesselsr', 'lower', 'artery', 'Arteries'],
  ['lower-limb', 'Fibular_arteryr', 'lower', 'artery', 'Arteries'],
  ['lower-limb', 'Inferior_lateral_genicular_arteryr', 'lower', 'artery', 'Arteries'],
  ['lower-limb', 'Inferior_medial_genicular_arteryr', 'lower', 'artery', 'Arteries'],
  ['lower-limb', 'Lateral_calcaneal_branch_of_fibular_arteryr', 'lower', 'artery', 'Arteries'],
  ['lower-limb', 'Lateral_circumflex_femoral_arteryr', 'lower', 'artery', 'Arteries'],
  ['lower-limb', 'Lateral_malleolar_branches_of_Fibular_arteryr', 'lower', 'artery', 'Arteries'],
  ['lower-limb', 'Lateral_plantar_arteryr', 'lower', 'artery', 'Arteries'],
  ['lower-limb', 'Lateral_tarsal_arteryr', 'lower', 'artery', 'Arteries'],
  ['lower-limb', 'Medial_calcaneal_arteryr', 'lower', 'artery', 'Arteries'],
  ['lower-limb', 'Medial_circumflex_femoral_arteryr', 'lower', 'artery', 'Arteries'],
  ['lower-limb', 'Medial_malleolar_artery_of_Posterior_tibial_arteryr', 'lower', 'artery', 'Arteries'],
  ['lower-limb', 'Medial_plantar_arteryr', 'lower', 'artery', 'Arteries'],
  ['lower-limb', 'Medial_tarsal_arteriesr', 'lower', 'artery', 'Arteries'],
  ['lower-limb', 'Middle_genicular_arteryr', 'lower', 'artery', 'Arteries'],
  ['lower-limb', 'Perforating_br_between_Arcuate_a_and_Deep_plantar_archr', 'lower', 'artery', 'Arteries'],
  ['lower-limb', 'Perforating_branches_of_fibular_arteryr', 'lower', 'artery', 'Arteries'],
  ['lower-limb', 'Plantar_metatarsal_arteriesr', 'lower', 'artery', 'Arteries'],
  ['lower-limb', 'Popliteal_arteryr', 'lower', 'artery', 'Arteries'],
  ['lower-limb', 'Posterior_tibial_arteryr', 'lower', 'artery', 'Arteries'],
  ['lower-limb', 'Posterior_tibial_recurrent_arteryr', 'lower', 'artery', 'Arteries'],
  ['lower-limb', 'Superficial_branch_of_Medial_planter_arteryr', 'lower', 'artery', 'Arteries'],
  ['lower-limb', 'Superficial_circumflex_iliac_arteryr', 'lower', 'artery', 'Arteries'],
  ['lower-limb', 'Superficial_epigastric_arteryr', 'lower', 'artery', 'Arteries'],
  ['lower-limb', 'Superficial_external_pudendal_arteryr', 'lower', 'artery', 'Arteries'],
  ['lower-limb', 'Superior_lateral_genicular_arteryr', 'lower', 'artery', 'Arteries'],
  ['lower-limb', 'Superior_medial_genicular_arteryr', 'lower', 'artery', 'Arteries'],
  ['lower-limb', 'Sural_arteryr', 'lower', 'artery', 'Arteries'],
  ['lower-limb', '1th_to_4th_perforating_branches_of_the_deep_femoral_veinr', 'lower', 'vein', 'Veins'],
  ['lower-limb', 'Accessory_saphenous_veinr', 'lower', 'vein', 'Veins'],
  ['lower-limb', 'Accompanying_veins_of_arcuate_and_dorsal_arteriesr', 'lower', 'vein', 'Veins'],
  ['lower-limb', 'Accompanying_veins_of_dorsal_digital_metatarsal_arteriesr', 'lower', 'vein', 'Veins'],
  ['lower-limb', 'Anterior_femoral_cutaneous_veinr', 'lower', 'vein', 'Veins'],
  ['lower-limb', 'Anterior_tibial_veinr', 'lower', 'vein', 'Veins'],
  ['lower-limb', 'Deep_femoral_veinr', 'lower', 'vein', 'Veins'],
  ['lower-limb', 'Dorsal_digital_vein_of_medial_side_of_great_toer', 'lower', 'vein', 'Veins'],
  ['lower-limb', 'Dorsal_digital_veinsr', 'lower', 'vein', 'Veins'],
  ['lower-limb', 'Dorsal_metatarsal_veinsr', 'lower', 'vein', 'Veins'],
  ['lower-limb', 'Dorsal_venous_arch_of_footr', 'lower', 'vein', 'Veins'],
  ['lower-limb', 'Dorsal_venous_network_of_footr', 'lower', 'vein', 'Veins'],
  ['lower-limb', 'Femoral_veinr', 'lower', 'vein', 'Veins'],
  ['lower-limb', 'Fibular_veinr', 'lower', 'vein', 'Veins'],
  ['lower-limb', 'Great_saphenous_veinr', 'lower', 'vein', 'Veins'],
  ['lower-limb', 'Inferior_lateral_genicular_veinr', 'lower', 'vein', 'Veins'],
  ['lower-limb', 'Inferior_medial_genicular_veinr', 'lower', 'vein', 'Veins'],
  ['lower-limb', 'Intercapitular_veins_of_footr', 'lower', 'vein', 'Veins'],
  ['lower-limb', 'Lateral_circumflex_femoral_veinr', 'lower', 'vein', 'Veins'],
  ['lower-limb', 'Lateral_marginal_veinr', 'lower', 'vein', 'Veins'],
  ['lower-limb', 'Lateral_plantar_veinr', 'lower', 'vein', 'Veins'],
  ['lower-limb', 'Medial_circumflex_femoral_veinr', 'lower', 'vein', 'Veins'],
  ['lower-limb', 'Medial_marginal_veinr', 'lower', 'vein', 'Veins'],
  ['lower-limb', 'Medial_plantar_veinr', 'lower', 'vein', 'Veins'],
  ['lower-limb', 'Middle_genicular_veinr', 'lower', 'vein', 'Veins'],
  ['lower-limb', 'Perforating_branches_(Boyd\'s_veins)r', 'lower', 'vein', 'Veins'],
  ['lower-limb', 'Perforating_branches_(Cockett\'s_veins)r', 'lower', 'vein', 'Veins'],
  ['lower-limb', 'Perforating_branches_(Dodd\'s_veins)r', 'lower', 'vein', 'Veins'],
  ['lower-limb', 'Plantar_digital_veinsr', 'lower', 'vein', 'Veins'],
  ['lower-limb', 'Plantar_metatarsal_veinsr', 'lower', 'vein', 'Veins'],
  ['lower-limb', 'Plantar_venous_archr', 'lower', 'vein', 'Veins'],
  ['lower-limb', 'Popliteal_veinr', 'lower', 'vein', 'Veins'],
  ['lower-limb', 'Posterior_arch_veinsr', 'lower', 'vein', 'Veins'],
  ['lower-limb', 'Posterior_tibial_veinr', 'lower', 'vein', 'Veins'],
  ['lower-limb', 'Small_saphenous_veinr', 'lower', 'vein', 'Veins'],
  ['lower-limb', 'Superficial_circumflex_iliac_veinr', 'lower', 'vein', 'Veins'],
  ['lower-limb', 'Superficial_epigastric_veinr', 'lower', 'vein', 'Veins'],
  ['lower-limb', 'Superficial_external_pudendal_veinr', 'lower', 'vein', 'Veins'],
  ['lower-limb', 'Superior_lateral_genicular_veinr', 'lower', 'vein', 'Veins'],
  ['lower-limb', 'Superior_medial_genicular_veinr', 'lower', 'vein', 'Veins'],
  ['lower-limb', 'Sural_veinr', 'lower', 'vein', 'Veins'],
  ['lower-limb', 'Tributary_veins_of_Great_and_small_saphenous_veinsr', 'lower', 'vein', 'Veins'],
  ['lower-limb', 'Anterior_branch_of_Iliohypogastric_nerver', 'lower', 'nerve', 'Nerves'],
  ['lower-limb', 'Anterior_branch_of_Obturator_nerver', 'lower', 'nerve', 'Nerves'],
  ['lower-limb', 'Anterior_cutaneous_branches_of_Femoral_nerver', 'lower', 'nerve', 'Nerves'],
  ['lower-limb', 'Common_fibular_nerver', 'lower', 'nerve', 'Nerves'],
  ['lower-limb', 'Common_plantar_digital_nervesr', 'lower', 'nerve', 'Nerves'],
  ['lower-limb', 'Cutaneous_br_of_Anterior_br_of_Obturator_nerver', 'lower', 'nerve', 'Nerves'],
  ['lower-limb', 'Deep_branch_of_Lateral_plantar_nerver', 'lower', 'nerve', 'Nerves'],
  ['lower-limb', 'Deep_fibular_nerver', 'lower', 'nerve', 'Nerves'],
  ['lower-limb', 'Dorsal_digital_branches_of_deep_fibular_nerver', 'lower', 'nerve', 'Nerves'],
  ['lower-limb', 'Dorsal_digital_branches_of_superficial_fibular_nerver', 'lower', 'nerve', 'Nerves'],
  ['lower-limb', 'Femoral_branch_of_Genitofemoral_nerver', 'lower', 'nerve', 'Nerves'],
  ['lower-limb', 'Femoral_nerver', 'lower', 'nerve', 'Nerves'],
  ['lower-limb', 'Genital_branch_of_Genitofemoral_nerver', 'lower', 'nerve', 'Nerves'],
  ['lower-limb', 'Ilioinguinal_nerver', 'lower', 'nerve', 'Nerves'],
  ['lower-limb', 'Inferior_clunial_br_of_post_cutaneous_nerve_of_the_thighr', 'lower', 'nerve', 'Nerves'],
  ['lower-limb', 'Inferior_gluteal_nerver', 'lower', 'nerve', 'Nerves'],
  ['lower-limb', 'Infrapatellar_branch_of_Saphenous_nerver', 'lower', 'nerve', 'Nerves'],
  ['lower-limb', 'Lateral_branch_of_deep_fibular_nerver', 'lower', 'nerve', 'Nerves'],
  ['lower-limb', 'Lateral_calcaneal_nervesr', 'lower', 'nerve', 'Nerves'],
  ['lower-limb', 'Lateral_cutaneous_branch_of_Iliohypogaticus_nerver', 'lower', 'nerve', 'Nerves'],
  ['lower-limb', 'Lateral_dorsal_cutaneous_nerve_(Sural_n)r', 'lower', 'nerve', 'Nerves'],
  ['lower-limb', 'Lateral_dorsal_cutaneous_nerver', 'lower', 'nerve', 'Nerves'],
  ['lower-limb', 'Lateral_femoral_cuteneous_nerver', 'lower', 'nerve', 'Nerves'],
  ['lower-limb', 'Lateral_plantar_cutaneous_nerve_(Sural_n)r', 'lower', 'nerve', 'Nerves'],
  ['lower-limb', 'Lateral_plantar_nerver', 'lower', 'nerve', 'Nerves'],
  ['lower-limb', 'Lateral_sural_cutaneous_nerver', 'lower', 'nerve', 'Nerves'],
  ['lower-limb', 'Medial_branch_of_deep_fibular_nerver', 'lower', 'nerve', 'Nerves'],
  ['lower-limb', 'Medial_calcaneal_branches_of_Tibial_nerver', 'lower', 'nerve', 'Nerves'],
  ['lower-limb', 'Medial_dorsal_cutaneous_nerver', 'lower', 'nerve', 'Nerves'],
  ['lower-limb', 'Medial_plantar_nerver', 'lower', 'nerve', 'Nerves'],
  ['lower-limb', 'Medial_sural_cutaneous_nerver', 'lower', 'nerve', 'Nerves'],
  ['lower-limb', 'Muscular_branches_of_the_Femoral_nerver', 'lower', 'nerve', 'Nerves'],
  ['lower-limb', 'Obturator_nerver', 'lower', 'nerve', 'Nerves'],
  ['lower-limb', 'Plexus_lumbarisr', 'lower', 'nerve', 'Nerves'],
  ['lower-limb', 'Posterior_branch_of_Obturator_nerver', 'lower', 'nerve', 'Nerves'],
  ['lower-limb', 'Posterior_cutaneous_nerve_of_the_thighr', 'lower', 'nerve', 'Nerves'],
  ['lower-limb', 'Proper_plantar_digital_branches_(Lateral_plantar_nerve)r', 'lower', 'nerve', 'Nerves'],
  ['lower-limb', 'Proper_plantar_digital_branches_(Medial_plantar_nerve)r', 'lower', 'nerve', 'Nerves'],
  ['lower-limb', 'Saphenous_branch_of_Femoralis_nerver', 'lower', 'nerve', 'Nerves'],
  ['lower-limb', 'Saphenous_nerve_(Medial_crural_cutaneous_branches)r', 'lower', 'nerve', 'Nerves'],
  ['lower-limb', 'Schiatic_nerver', 'lower', 'nerve', 'Nerves'],
  ['lower-limb', 'Superficial_branch_of_Lateral_plantar_nerver', 'lower', 'nerve', 'Nerves'],
  ['lower-limb', 'Superficial_fibular_nerver', 'lower', 'nerve', 'Nerves'],
  ['lower-limb', 'Superior_clunial_nerve_(posterior_rami)r', 'lower', 'nerve', 'Nerves'],
  ['lower-limb', 'Superior_gluteal_nerver', 'lower', 'nerve', 'Nerves'],
  ['lower-limb', 'Sural_nerver', 'lower', 'nerve', 'Nerves'],
  ['lower-limb', 'Tibial_nerver', 'lower', 'nerve', 'Nerves'],
  ['lower-limb', 'Bursa_of_piriformisr', 'lower', 'bursa', 'Bursae'],
  ['lower-limb', 'Common_tendon_sheath_of_fibularis_musclesr', 'lower', 'tendon', 'Bursae'],
  ['lower-limb', 'Deep_Infrapatellar_bursar', 'lower', 'bursa', 'Bursae'],
  ['lower-limb', 'Extensor_digitorum_longus-fibularis_tertius_vaginae_tendinumr', 'lower', 'tendon', 'Bursae'],
  ['lower-limb', 'Extensor_hallucis_longus_tendon_sheathr', 'lower', 'tendon', 'Bursae'],
  ['lower-limb', 'Flexor_digitorum_longus_tendon_sheathr', 'lower', 'tendon', 'Bursae'],
  ['lower-limb', 'Flexor_hallucis_longus_tendon_sheathr', 'lower', 'tendon', 'Bursae'],
  ['lower-limb', 'Iliopectineal_bursar', 'lower', 'bursa', 'Bursae'],
  ['lower-limb', 'Inferior_subtendinous_bursa_of_biceps_femorisr', 'lower', 'bursa', 'Bursae'],
  ['lower-limb', 'Intermuscular_gluteal_bursaer', 'lower', 'bursa', 'Bursae'],
  ['lower-limb', 'Lateral_subtendinous_bursa_of_gastrocnemius_muscler', 'lower', 'bursa', 'Bursae'],
  ['lower-limb', 'Medial_subtendinous_bursa_of_gastrocnemius_muscler', 'lower', 'bursa', 'Bursae'],
  ['lower-limb', 'Pes_anserine_bursar', 'lower', 'bursa', 'Bursae'],
  ['lower-limb', 'Plantar_tendinous_sheath_of_fibularis_longusr', 'lower', 'tendon', 'Bursae'],
  ['lower-limb', 'Sciatic_bursa_of_gluteus_maximus_(Ischiogluteal_bursa)r', 'lower', 'bursa', 'Bursae'],
  ['lower-limb', 'Sciatic_bursa_of_obturator_internusr', 'lower', 'bursa', 'Bursae'],
  ['lower-limb', 'Semimembranosus_bursa_deep_to_tendonr', 'lower', 'tendon', 'Bursae'],
  ['lower-limb', 'Subcutaneous_bursa_of__medial_malleolusr', 'lower', 'bursa', 'Bursae'],
  ['lower-limb', 'Subcutaneous_bursa_of_lateral_malleolusr', 'lower', 'bursa', 'Bursae'],
  ['lower-limb', 'Subcutaneous_bursa_of_tuberosity_of_tibiar', 'lower', 'bursa', 'Bursae'],
  ['lower-limb', 'Subcutaneous_calcaneal_bursar', 'lower', 'bursa', 'Bursae'],
  ['lower-limb', 'Subcutaneous_Infrapatellar_bursar', 'lower', 'bursa', 'Bursae'],
  ['lower-limb', 'Subcutaneous_prepatellar_bursar', 'lower', 'bursa', 'Bursae'],
  ['lower-limb', 'Subcutaneous_trochanteric_bursar', 'lower', 'bursa', 'Bursae'],
  ['lower-limb', 'Subfascial_prepatellar_bursar', 'lower', 'fascia', 'Bursae'],
  ['lower-limb', 'Subpopliteal_recessr', 'lower', 'bursa', 'Bursae'],
  ['lower-limb', 'Subtendinous_bursa_of_iliacusr', 'lower', 'bursa', 'Bursae'],
  ['lower-limb', 'Subtendinous_bursa_of_obturator_internusr', 'lower', 'bursa', 'Bursae'],
  ['lower-limb', 'Subtendinous_bursa_of_sartoriusr', 'lower', 'bursa', 'Bursae'],
  ['lower-limb', 'Subtendinous_bursa_of_tibialis_anteriorr', 'lower', 'bursa', 'Bursae'],
  ['lower-limb', 'Subtendinous_calcaneal_bursar', 'lower', 'bursa', 'Bursae'],
  ['lower-limb', 'Subtendinous_prepatellar_bursar', 'lower', 'bursa', 'Bursae'],
  ['lower-limb', 'Superior_bursa_of_biceps_femorisr', 'lower', 'bursa', 'Bursae'],
  ['lower-limb', 'Tibialis_anterior_tendon_sheathr', 'lower', 'tendon', 'Bursae'],
  ['lower-limb', 'Tibialis_posterior_tendon_sheathr', 'lower', 'tendon', 'Bursae'],
  ['lower-limb', 'Trochanteric_bursa_of_gluteus_maximusr', 'lower', 'bursa', 'Bursae'],
  ['lower-limb', 'Trochanteric_bursa_of_gluteus_minimusr', 'lower', 'bursa', 'Bursae'],
  ['lower-limb', 'Trochanteric_bursae_of_gluteus_mediusr', 'lower', 'bursa', 'Bursae'],
  ['lower-limb', 'Adductor_canalr', 'lower', 'muscle', 'Overlays'],
  ['lower-limb', 'Adductor_hiatusr', 'lower', 'muscle', 'Overlays'],
  ['lower-limb', 'Adductor_minimus_overlayr', 'lower', 'muscle', 'Overlays'],
  ['lower-limb', 'Annular_ligaments_of_1st_toe_A1-A5r', 'lower', 'ligament', 'Overlays'],
  ['lower-limb', 'Annular_ligaments_of_2nd_toe_A1-A5r', 'lower', 'ligament', 'Overlays'],
  ['lower-limb', 'Annular_ligaments_of_3rd_toe_A1-A5r', 'lower', 'ligament', 'Overlays'],
  ['lower-limb', 'Annular_ligaments_of_4th_toe_A1-A5r', 'lower', 'ligament', 'Overlays'],
  ['lower-limb', 'Annular_ligaments_of_5th_toe_A1-A5r', 'lower', 'ligament', 'Overlays'],
  ['lower-limb', 'Anterior_ligament_of_fibular_headr', 'lower', 'ligament', 'Overlays'],
  ['lower-limb', 'Anterior_pubic_ligament', 'lower', 'ligament', 'Overlays'],
  ['lower-limb', 'Arcuate_ligamentr', 'lower', 'ligament', 'Overlays'],
  ['lower-limb', 'Calcaneocuboid_ligamentr', 'lower', 'ligament', 'Overlays'],
  ['lower-limb', 'Calcaneonavicular_ligamentr', 'lower', 'ligament', 'Overlays'],
  ['lower-limb', 'Collateral_ligament_of_proximal_interphalangeal_jointsr', 'lower', 'ligament', 'Overlays'],
  ['lower-limb', 'Collateral_ligaments_of_distal_interphalangeal_jointsr', 'lower', 'ligament', 'Overlays'],
  ['lower-limb', 'Collateral_ligaments_of_metatarsophalangeal_jointsr', 'lower', 'ligament', 'Overlays'],
  ['lower-limb', 'Cruciform_ligaments_or_1st_toer', 'lower', 'ligament', 'Overlays'],
  ['lower-limb', 'Cruciform_ligaments_or_2nd_toer', 'lower', 'ligament', 'Overlays'],
  ['lower-limb', 'Cruciform_ligaments_or_3rd_toer', 'lower', 'ligament', 'Overlays'],
  ['lower-limb', 'Cruciform_ligaments_or_4th_toer', 'lower', 'ligament', 'Overlays'],
  ['lower-limb', 'Cruciform_ligaments_or_5th_toer', 'lower', 'ligament', 'Overlays'],
  ['lower-limb', 'Descending_part_of_Iliofemoral_ligamentr', 'lower', 'ligament', 'Overlays'],
  ['lower-limb', 'Femoral_canalr', 'lower', 'other', 'Overlays'],
  ['lower-limb', 'Femoral_ringr', 'lower', 'other', 'Overlays'],
  ['lower-limb', 'Femoral_triangler', 'lower', 'other', 'Overlays'],
  ['lower-limb', 'Fibrous_sheath_of_toesr', 'lower', 'ligament', 'Overlays'],
  ['lower-limb', 'Ishciofemoral_ligamentr', 'lower', 'ligament', 'Overlays'],
  ['lower-limb', 'Lateral_patellar_retinaculum_(horizontal_part)r', 'lower', 'fascia', 'Overlays'],
  ['lower-limb', 'Lateral_patellar_retinaculum_(vertical_part)r', 'lower', 'fascia', 'Overlays'],
  ['lower-limb', 'Medial_collatertal_ligamentr', 'lower', 'ligament', 'Overlays'],
  ['lower-limb', 'Medial_patellar_retinaculum_(horizontal_part)r', 'lower', 'fascia', 'Overlays'],
  ['lower-limb', 'Medial_patellar_retinaculum_(vertical_part)r', 'lower', 'fascia', 'Overlays'],
  ['lower-limb', 'Oblique_popliteal_ligamentr', 'lower', 'ligament', 'Overlays'],
  ['lower-limb', 'Palmar_ligament_of_proximal_interphalangeal_jointsr', 'lower', 'ligament', 'Overlays'],
  ['lower-limb', 'Palmar_ligaments_of_distal_interphalangeal_jointsr', 'lower', 'ligament', 'Overlays'],
  ['lower-limb', 'Palmar_ligaments_of_metatarsophalangeal_jointsr', 'lower', 'ligament', 'Overlays'],
  ['lower-limb', 'Posterior_ligament_of_fibular_headr', 'lower', 'ligament', 'Overlays'],
  ['lower-limb', 'Posterior_pubic_ligament', 'lower', 'ligament', 'Overlays'],
  ['lower-limb', 'Posterior_talofibular_ligamentr', 'lower', 'ligament', 'Overlays'],
  ['lower-limb', 'Pubofemoral_ligamentr', 'lower', 'ligament', 'Overlays'],
  ['lower-limb', 'Quadriceps_common_tendon_and_patellar_ligament', 'lower', 'tendon', 'Overlays'],
  ['lower-limb', 'Saphenous_openingr', 'lower', 'other', 'Overlays'],
  ['lower-limb', 'Suprapatellar_bursa_overlayr', 'lower', 'bursa', 'Overlays'],
  ['lower-limb', 'Tendinous_arch_of_soleusr', 'lower', 'other', 'Overlays'],
  ['lower-limb', 'Transverse_part_of_Iliofemoral_ligamentr', 'lower', 'ligament', 'Overlays'],
  ['lower-limb', 'Zona_orbicularis_of_hip_jointr', 'lower', 'ligament', 'Overlays'],
  ['upper-limb', 'Lumbar_vertebra_(L1)', 'upper', 'bone', 'Back - bones', 'lower-limb:Lumbar_vertebra_(L1)'],
  ['upper-limb', 'Lumbar_vertebra_(L2)', 'upper', 'bone', 'Back - bones', 'lower-limb:Lumbar_vertebra_(L2)'],
  ['upper-limb', 'Lumbar_vertebra_(L3)', 'upper', 'bone', 'Back - bones', 'lower-limb:Lumbar_vertebra_(L3)'],
  ['upper-limb', 'Lumbar_vertebra_(L4)', 'upper', 'bone', 'Back - bones', 'lower-limb:Lumbar_vertebra_(L4)'],
  ['upper-limb', 'Lumbar_vertebra_(L5)', 'upper', 'bone', 'Back - bones', 'lower-limb:Lumbar_vertebra_(L5)'],
  ['upper-limb', 'Sacrum', 'upper', 'bone', 'Back - bones', 'lower-limb:Sacrum'],
  ['upper-limb', 'Thoracic_vertebra_(T1)', 'upper', 'bone', 'Back - bones'],
  ['upper-limb', 'Thoracic_vertebra_(T10)', 'upper', 'bone', 'Back - bones'],
  ['upper-limb', 'Thoracic_vertebra_(T11)', 'upper', 'bone', 'Back - bones'],
  ['upper-limb', 'Thoracic_vertebra_(T12)', 'upper', 'bone', 'Back - bones', 'lower-limb:Thoracic_vertebra_(T12)'],
  ['upper-limb', 'Thoracic_vertebra_(T2)', 'upper', 'bone', 'Back - bones'],
  ['upper-limb', 'Thoracic_vertebra_(T3)', 'upper', 'bone', 'Back - bones'],
  ['upper-limb', 'Thoracic_vertebra_(T4)', 'upper', 'bone', 'Back - bones'],
  ['upper-limb', 'Thoracic_vertebra_(T5)', 'upper', 'bone', 'Back - bones'],
  ['upper-limb', 'Thoracic_vertebra_(T6)', 'upper', 'bone', 'Back - bones'],
  ['upper-limb', 'Thoracic_vertebra_(T7)', 'upper', 'bone', 'Back - bones'],
  ['upper-limb', 'Thoracic_vertebra_(T8)', 'upper', 'bone', 'Back - bones'],
  ['upper-limb', 'Thoracic_vertebra_(T9)', 'upper', 'bone', 'Back - bones'],
  ['upper-limb', 'Humerusr', 'upper', 'bone', 'Arm - bones'],
  ['upper-limb', 'Bicipital_aponeurosisr', 'upper', 'muscle', 'Arm - muscles'],
  ['upper-limb', 'Brachialis_muscler', 'upper', 'muscle', 'Arm - muscles'],
  ['upper-limb', 'Common_tendon_of_biceps_brachiir', 'upper', 'tendon', 'Arm - muscles'],
  ['upper-limb', 'Common_tendon_of_triceps_brachiir', 'upper', 'tendon', 'Arm - muscles'],
  ['upper-limb', 'Coracobrachialis_muscler', 'upper', 'muscle', 'Arm - muscles'],
  ['upper-limb', 'Lateral_head_of_triceps_brachiir', 'upper', 'muscle', 'Arm - muscles'],
  ['upper-limb', 'Long_head_of_biceps_brachii_tendon_sheathr', 'upper', 'tendon', 'Arm - muscles'],
  ['upper-limb', 'Long_head_of_biceps_brachiir', 'upper', 'muscle', 'Arm - muscles'],
  ['upper-limb', 'Long_head_of_triceps_brachiir', 'upper', 'muscle', 'Arm - muscles'],
  ['upper-limb', 'Medial_head_of_triceps_brachiir', 'upper', 'muscle', 'Arm - muscles'],
  ['upper-limb', 'Short_head_of_biceps_brachiir', 'upper', 'muscle', 'Arm - muscles'],
  ['upper-limb', 'Axillary_nerve_-_superior_lateral_br_cutaneous_nerver', 'upper', 'nerve', 'Arm - nerves'],
  ['upper-limb', 'Lateral_root_of_median_nerver', 'upper', 'nerve', 'Arm - nerves'],
  ['upper-limb', 'Medial_brachial_cutaneous_nerver', 'upper', 'nerve', 'Arm - nerves'],
  ['upper-limb', 'Medial_root_of_median_nerver', 'upper', 'nerve', 'Arm - nerves'],
  ['upper-limb', 'Median_nerver', 'upper', 'nerve', 'Arm - nerves'],
  ['upper-limb', 'Musculocutaneus_nerver', 'upper', 'nerve', 'Arm - nerves'],
  ['upper-limb', 'Radial_nerve_(deep_branch)r', 'upper', 'nerve', 'Arm - nerves'],
  ['upper-limb', 'Radial_nerve_(inferior_lateral_brachial_cutaneous_n)r', 'upper', 'nerve', 'Arm - nerves'],
  ['upper-limb', 'Radial_nerve_(posterior_antebrachial_cutaneous_n)r', 'upper', 'nerve', 'Arm - nerves'],
  ['upper-limb', 'Radial_nerve_(posterior_brachial_cutaneous_n)r', 'upper', 'nerve', 'Arm - nerves'],
  ['upper-limb', 'Radial_nerve_(posterior_interosseus_n)r', 'upper', 'nerve', 'Arm - nerves'],
  ['upper-limb', 'Radial_nerve_(superficial_br)r', 'upper', 'nerve', 'Arm - nerves'],
  ['upper-limb', 'Radial_nerver', 'upper', 'nerve', 'Arm - nerves'],
  ['upper-limb', 'Ulnar_nerver', 'upper', 'nerve', 'Arm - nerves'],
  ['upper-limb', 'Arm_superficial_vein-Basilic_veinr', 'upper', 'vein', 'Arm - veins'],
  ['upper-limb', 'Arm_superficial_vein-Cephalic_veinr', 'upper', 'vein', 'Arm - veins'],
  ['upper-limb', 'Arm_superficial_vein-Median_antebrachial_veinr', 'upper', 'vein', 'Arm - veins'],
  ['upper-limb', 'Arm_superficial_vein-Median_cubital_veinr', 'upper', 'vein', 'Arm - veins'],
  ['upper-limb', 'Axillary_veinr', 'upper', 'vein', 'Arm - veins'],
  ['upper-limb', 'Deep_veins_of_the_armr', 'upper', 'vein', 'Arm - veins'],
  ['upper-limb', 'Superficial_veins_of_upper_limbr', 'upper', 'vein', 'Arm - veins'],
  ['upper-limb', 'Anterior_circumflex_humeral_arteryr', 'upper', 'artery', 'Arm - arteries'],
  ['upper-limb', 'Axillary_arteryr', 'upper', 'artery', 'Arm - arteries'],
  ['upper-limb', 'Brachial_arteryr', 'upper', 'artery', 'Arm - arteries'],
  ['upper-limb', 'Brachiocephalic_arteryr', 'upper', 'artery', 'Arm - arteries'],
  ['upper-limb', 'Deep_artery_of_armr', 'upper', 'artery', 'Arm - arteries'],
  ['upper-limb', 'Inferior_ulnar_collateral_arteryr', 'upper', 'artery', 'Arm - arteries'],
  ['upper-limb', 'Medial_collateral_arteryr', 'upper', 'artery', 'Arm - arteries'],
  ['upper-limb', 'Middle_collateral_arteryr', 'upper', 'artery', 'Arm - arteries'],
  ['upper-limb', 'Posterior_circumflex_humeral_arteryr', 'upper', 'artery', 'Arm - arteries'],
  ['upper-limb', 'Posterior_ulnar_recurrent_arteryr', 'upper', 'artery', 'Arm - arteries'],
  ['upper-limb', 'Radial_collateral_arteryr', 'upper', 'artery', 'Arm - arteries'],
  ['upper-limb', 'Superior_ulnar_collateral_arteryr', 'upper', 'artery', 'Arm - arteries'],
  ['upper-limb', 'Articular_capsule_of_glenohumeral_jointr', 'upper', 'ligament', 'Arm - capsules, ligaments, fasciae'],
  ['upper-limb', 'Brachial_fasciar', 'upper', 'fascia', 'Arm - capsules, ligaments, fasciae'],
  ['upper-limb', 'Coracohumeral_ligamentr', 'upper', 'ligament', 'Arm - capsules, ligaments, fasciae'],
  ['upper-limb', 'Glenoid_labrumr', 'upper', 'ligament', 'Arm - capsules, ligaments, fasciae'],
  ['upper-limb', 'Inferior_glenohumeral_ligamentr', 'upper', 'ligament', 'Arm - capsules, ligaments, fasciae'],
  ['upper-limb', 'Lateral_intermuscular_septum_of_armr', 'upper', 'ligament', 'Arm - capsules, ligaments, fasciae'],
  ['upper-limb', 'Medial_intermuscular_septum_of_armr', 'upper', 'ligament', 'Arm - capsules, ligaments, fasciae'],
  ['upper-limb', 'Middle_glenohumeral_ligamentr', 'upper', 'ligament', 'Arm - capsules, ligaments, fasciae'],
  ['upper-limb', 'Superior_glenohumeral_ligamentr', 'upper', 'ligament', 'Arm - capsules, ligaments, fasciae'],
  ['upper-limb', 'Transverse_humeral_ligamentr', 'upper', 'ligament', 'Arm - capsules, ligaments, fasciae'],
  ['upper-limb', 'Art_cart_of_humerus_distal_endr​', 'upper', 'cartilage', 'Arm - cartilages'],
  ['upper-limb', 'Art_cart_of_humerus_head​r', 'upper', 'cartilage', 'Arm - cartilages'],
  ['upper-limb', 'Coracobrachial_bursar', 'upper', 'bursa', 'Arm - synovia, bursae'],
  ['upper-limb', 'Intratendinous_olecranon_bursar', 'upper', 'bursa', 'Arm - synovia, bursae'],
  ['upper-limb', 'Subcutaneous_olecranon_bursar', 'upper', 'bursa', 'Arm - synovia, bursae'],
  ['upper-limb', 'Subtendinous_bursa_of_infraspinatus_muscler', 'upper', 'bursa', 'Arm - synovia, bursae'],
  ['upper-limb', 'Subtendinous_bursa_of_latissimus_dorsir', 'upper', 'bursa', 'Arm - synovia, bursae'],
  ['upper-limb', 'Subtendinous_bursa_of_subscapularisr', 'upper', 'bursa', 'Arm - synovia, bursae'],
  ['upper-limb', 'Subtendinous_bursa_of_teres_majorr', 'upper', 'bursa', 'Arm - synovia, bursae'],
  ['upper-limb', 'Annulus_fibrosus_L1_L20', 'upper', 'cartilage', 'Back - cartilages', 'lower-limb:Annulus_fibrosus_L1_L2'],
  ['upper-limb', 'Annulus_fibrosus_L2_L3', 'upper', 'cartilage', 'Back - cartilages', 'lower-limb:Annulus_fibrosus_L2_L3'],
  ['upper-limb', 'Annulus_fibrosus_L3_L4', 'upper', 'cartilage', 'Back - cartilages', 'lower-limb:Annulus_fibrosus_L3_L4'],
  ['upper-limb', 'Annulus_fibrosus_L4_L5', 'upper', 'cartilage', 'Back - cartilages', 'lower-limb:Annulus_fibrosus_L4_L5'],
  ['upper-limb', 'Annulus_fibrosus_L5_S1', 'upper', 'cartilage', 'Back - cartilages', 'lower-limb:Annulus_fibrosus_L5_S1'],
  ['upper-limb', 'Annulus_fibrosus_T1_T2', 'upper', 'cartilage', 'Back - cartilages'],
  ['upper-limb', 'Annulus_fibrosus_T10_T11', 'upper', 'cartilage', 'Back - cartilages'],
  ['upper-limb', 'Annulus_fibrosus_T11_T12', 'upper', 'cartilage', 'Back - cartilages'],
  ['upper-limb', 'Annulus_fibrosus_T12_L1', 'upper', 'cartilage', 'Back - cartilages', 'lower-limb:Annulus_fibrosus_T12_L1'],
  ['upper-limb', 'Annulus_fibrosus_T2_T3', 'upper', 'cartilage', 'Back - cartilages'],
  ['upper-limb', 'Annulus_fibrosus_T3_T4', 'upper', 'cartilage', 'Back - cartilages'],
  ['upper-limb', 'Annulus_fibrosus_T4_T5', 'upper', 'cartilage', 'Back - cartilages'],
  ['upper-limb', 'Annulus_fibrosus_T5_T6', 'upper', 'cartilage', 'Back - cartilages'],
  ['upper-limb', 'Annulus_fibrosus_T6_T7', 'upper', 'cartilage', 'Back - cartilages'],
  ['upper-limb', 'Annulus_fibrosus_T7_T8', 'upper', 'cartilage', 'Back - cartilages'],
  ['upper-limb', 'Annulus_fibrosus_T8_T9', 'upper', 'cartilage', 'Back - cartilages'],
  ['upper-limb', 'Annulus_fibrosus_T9_T10', 'upper', 'cartilage', 'Back - cartilages'],
  ['upper-limb', 'art_cart_of_sacrum_art_processr', 'upper', 'cartilage', 'Back - cartilages'],
  ['upper-limb', 'art_cart_of_sacrum_lumbosacral_joint', 'upper', 'cartilage', 'Back - cartilages'],
  ['upper-limb', 'Nucleus_pulposus_L1-S1', 'upper', 'cartilage', 'Back - cartilages'],
  ['upper-limb', 'Vertebra_L1_art_cart', 'upper', 'cartilage', 'Back - cartilages'],
  ['upper-limb', 'Vertebra_L2_art_cart', 'upper', 'cartilage', 'Back - cartilages'],
  ['upper-limb', 'Vertebra_L3_art_cart', 'upper', 'cartilage', 'Back - cartilages'],
  ['upper-limb', 'Vertebra_L4_art_cart', 'upper', 'cartilage', 'Back - cartilages'],
  ['upper-limb', 'Vertebra_L5_art_cart', 'upper', 'cartilage', 'Back - cartilages'],
  ['upper-limb', 'Vertebra_T1_art_cart', 'upper', 'cartilage', 'Back - cartilages'],
  ['upper-limb', 'Vertebra_T10_art_cart', 'upper', 'cartilage', 'Back - cartilages'],
  ['upper-limb', 'Vertebra_T11_art_cart', 'upper', 'cartilage', 'Back - cartilages'],
  ['upper-limb', 'Vertebra_T12_art_cart', 'upper', 'cartilage', 'Back - cartilages'],
  ['upper-limb', 'Vertebra_T2_art_cart', 'upper', 'cartilage', 'Back - cartilages'],
  ['upper-limb', 'Vertebra_T3_art_cart', 'upper', 'cartilage', 'Back - cartilages'],
  ['upper-limb', 'Vertebra_T4_art_cart', 'upper', 'cartilage', 'Back - cartilages'],
  ['upper-limb', 'Vertebra_T5_art_cart', 'upper', 'cartilage', 'Back - cartilages'],
  ['upper-limb', 'Vertebra_T6_art_cart', 'upper', 'cartilage', 'Back - cartilages'],
  ['upper-limb', 'Vertebra_T7_art_cart', 'upper', 'cartilage', 'Back - cartilages'],
  ['upper-limb', 'Vertebra_T8_art_cart', 'upper', 'cartilage', 'Back - cartilages'],
  ['upper-limb', 'Vertebra_T9_art_cart', 'upper', 'cartilage', 'Back - cartilages'],
  ['upper-limb', 'Anterior_interosseous_arteryr', 'upper', 'artery', 'Forearm - arteries'],
  ['upper-limb', 'Anterior_ulnar_recurrent_arteryr', 'upper', 'artery', 'Forearm - arteries'],
  ['upper-limb', 'Common_interosseous_arteryr', 'upper', 'artery', 'Forearm - arteries'],
  ['upper-limb', 'Interosseous_recurrent_arteryr', 'upper', 'artery', 'Forearm - arteries'],
  ['upper-limb', 'Posterior_interosseous_arteryr', 'upper', 'artery', 'Forearm - arteries'],
  ['upper-limb', 'Radial_arteryr', 'upper', 'artery', 'Forearm - arteries'],
  ['upper-limb', 'Radial_recrurrent_arteryr', 'upper', 'artery', 'Forearm - arteries'],
  ['upper-limb', 'Ulnar_artery_(dorsal_carpal_br)r', 'upper', 'artery', 'Forearm - arteries'],
  ['upper-limb', 'Ulnar_arteryr', 'upper', 'artery', 'Forearm - arteries'],
  ['upper-limb', 'Radiusr', 'upper', 'bone', 'Forearm - bones'],
  ['upper-limb', 'Ulnar', 'upper', 'bone', 'Forearm - bones'],
  ['upper-limb', 'Antebrachial_fasciar', 'upper', 'fascia', 'Forearm - capsules, ligaments, fasciae'],
  ['upper-limb', 'Articular_capsule_of_elbow_jointr', 'upper', 'ligament', 'Forearm - capsules, ligaments, fasciae'],
  ['upper-limb', 'Dorsal_radio-ulnar_ligamentr', 'upper', 'ligament', 'Forearm - capsules, ligaments, fasciae', 'hand:Articular_cartiage_of_ulna_distal_end'],
  ['upper-limb', 'Interosseous_membrane_of_forearmr', 'upper', 'ligament', 'Forearm - capsules, ligaments, fasciae'],
  ['upper-limb', 'Oblique_cord_or_radio-ulnar_syndesmosisr', 'upper', 'ligament', 'Forearm - capsules, ligaments, fasciae'],
  ['upper-limb', 'Quadrate_ligamentr', 'upper', 'ligament', 'Forearm - capsules, ligaments, fasciae'],
  ['upper-limb', 'Radial_annular_ligamentr', 'upper', 'ligament', 'Forearm - capsules, ligaments, fasciae'],
  ['upper-limb', 'Radial_collateral_ligament_of_elbowr', 'upper', 'ligament', 'Forearm - capsules, ligaments, fasciae'],
  ['upper-limb', 'Ulnar_collateral_ligament_of_elbowr', 'upper', 'ligament', 'Forearm - capsules, ligaments, fasciae'],
  ['upper-limb', 'Art_cart_of_radius_distal_end​r', 'upper', 'cartilage', 'Forearm - cartilages', 'hand:Articular_cartilage_of_radius_distal_end​'],
  ['upper-limb', 'Art_cart_of_radius_head​r', 'upper', 'cartilage', 'Forearm - cartilages'],
  ['upper-limb', 'Art_cart_of_ulna_(proximal_end)r', 'upper', 'cartilage', 'Forearm - cartilages'],
  ['upper-limb', 'Art_cart_of_ulna_(distal_end)r', 'upper', 'cartilage', 'Forearm - cartilages', 'hand:Ulna'],
  ['upper-limb', 'Abductor_pollicis_longusr', 'upper', 'muscle', 'Forearm - muscles'],
  ['upper-limb', 'Anconeus_muscler', 'upper', 'muscle', 'Forearm - muscles'],
  ['upper-limb', 'Brachioradialis_muscler', 'upper', 'muscle', 'Forearm - muscles'],
  ['upper-limb', 'Common_tendon_of_extensor_carpi_ulnarisr', 'upper', 'tendon', 'Forearm - muscles', 'hand:Common_tendon_of_extensor_carpi_ulnaris'],
  ['upper-limb', 'Common_tendon_of_flexor_carpi_ulnarisr', 'upper', 'tendon', 'Forearm - muscles', 'hand:Common_tendon_of_flexor_carpi_ulnaris'],
  ['upper-limb', 'Extensor_carpi_radialis_brevisr', 'upper', 'muscle', 'Forearm - muscles'],
  ['upper-limb', 'Extensor_carpi_radialis_longusr', 'upper', 'muscle', 'Forearm - muscles'],
  ['upper-limb', 'Extensor_digiti_minimir', 'upper', 'muscle', 'Forearm - muscles'],
  ['upper-limb', 'Extensor_digitorumr', 'upper', 'muscle', 'Forearm - muscles'],
  ['upper-limb', 'Extensor_indicisr', 'upper', 'muscle', 'Forearm - muscles'],
  ['upper-limb', 'Extensor_pollicis_brevisr', 'upper', 'muscle', 'Forearm - muscles'],
  ['upper-limb', 'Extensor_pollicis_longusr', 'upper', 'muscle', 'Forearm - muscles'],
  ['upper-limb', 'Flexor_carpi_radialisr', 'upper', 'muscle', 'Forearm - muscles'],
  ['upper-limb', 'Flexor_digitorum_profundusr', 'upper', 'muscle', 'Forearm - muscles'],
  ['upper-limb', 'Flexor_digitorum_superficialis_humero-ulnar_headr', 'upper', 'muscle', 'Forearm - muscles'],
  ['upper-limb', 'Flexor_digitorum_superficialis_radial_headr', 'upper', 'muscle', 'Forearm - muscles'],
  ['upper-limb', 'Flexor_pollicis_longusr', 'upper', 'muscle', 'Forearm - muscles'],
  ['upper-limb', 'Humeral_head_of_extensor_carpi_ulnarisr', 'upper', 'muscle', 'Forearm - muscles'],
  ['upper-limb', 'Humeral_head_of_flexor_carpi_ulnarisr', 'upper', 'muscle', 'Forearm - muscles'],
  ['upper-limb', 'Humeral_head_of_pronator_teresr', 'upper', 'muscle', 'Forearm - muscles'],
  ['upper-limb', 'Palmaris_longus_muscler', 'upper', 'muscle', 'Forearm - muscles'],
  ['upper-limb', 'Pronator_quadratusr', 'upper', 'muscle', 'Forearm - muscles'],
  ['upper-limb', 'Supinatorr', 'upper', 'muscle', 'Forearm - muscles'],
  ['upper-limb', 'Ulnar_head_of_extensor_carpi_ulnarisr', 'upper', 'muscle', 'Forearm - muscles'],
  ['upper-limb', 'Ulnar_head_of_flexor_carpi_ulnarisr', 'upper', 'muscle', 'Forearm - muscles'],
  ['upper-limb', 'Ulnar_head_of_pronator_teresr', 'upper', 'muscle', 'Forearm - muscles'],
  ['upper-limb', 'Medial_antebrachial_cutaneous_nerver', 'upper', 'nerve', 'Forearm - nerves'],
  ['upper-limb', 'Musculocutaneus_nerve__-_lateral_antebrachial_cutaneous_nerver', 'upper', 'nerve', 'Forearm - nerves'],
  ['upper-limb', 'Bicipitoradial_bursa', 'upper', 'bursa', 'Forearm - synovia, bursae'],
  ['upper-limb', 'Interosseous_cubital_bursar', 'upper', 'bursa', 'Forearm - synovia, bursae'],
  ['upper-limb', 'Subtendinous_bursa_of_triceps_brachiir', 'upper', 'bursa', 'Forearm - synovia, bursae'],
  ['upper-limb', 'Anterior_interosseous_veinsr', 'upper', 'vein', 'Forearm - veins'],
  ['upper-limb', 'Posterior_interosseous_veinsr', 'upper', 'vein', 'Forearm - veins'],
  ['upper-limb', 'Radial_veinsr', 'upper', 'vein', 'Forearm - veins'],
  ['upper-limb', 'Ulnar_veinsr', 'upper', 'vein', 'Forearm - veins'],
  ['upper-limb', 'Common_palmar_digital_arteriesr', 'upper', 'artery', 'Hand and wrist - arteries', 'hand:Common_palmar_digital_arteries'],
  ['upper-limb', 'Deep_palmar_archr', 'upper', 'artery', 'Hand and wrist - arteries', 'hand:Deep_palmar_arch'],
  ['upper-limb', 'Dorsal_carpal_archr', 'upper', 'artery', 'Hand and wrist - arteries', 'hand:Dorsal_radiocarpal_ligament'],
  ['upper-limb', 'Dorsal_carpal_networkr', 'upper', 'artery', 'Hand and wrist - arteries', 'hand:Dorsal_carpometacarpal_ligaments'],
  ['upper-limb', 'Dorsal_digital_arteriesr', 'upper', 'artery', 'Hand and wrist - arteries', 'hand:Dorsal_digital_arteries_of_hand'],
  ['upper-limb', 'Dorsal_metacarpal_arteriesr', 'upper', 'artery', 'Hand and wrist - arteries', 'hand:Dorsal_metacarpal_artery'],
  ['upper-limb', 'Dorsalis_indicisr', 'upper', 'artery', 'Hand and wrist - arteries', 'hand:Dorsalis_indicis'],
  ['upper-limb', 'Dorsalis_pollicisr', 'upper', 'artery', 'Hand and wrist - arteries', 'hand:Dorsalis_pollicis'],
  ['upper-limb', 'Palmar_carpal_branchesr', 'upper', 'artery', 'Hand and wrist - arteries', 'hand:Palmar_carpal_branches'],
  ['upper-limb', 'Palmar_metacarpal_arteriesr', 'upper', 'artery', 'Hand and wrist - arteries', 'hand:Palmar_metacarpal_arteries'],
  ['upper-limb', 'Perforating_arteriesr', 'upper', 'artery', 'Hand and wrist - arteries', 'hand:Palmar_metacarpal_ligaments'],
  ['upper-limb', 'Princeps_pollicis_arteriesr', 'upper', 'artery', 'Hand and wrist - arteries', 'hand:Princeps_pollicis_artery'],
  ['upper-limb', 'Proper_palmar_digital_arteriesr', 'upper', 'artery', 'Hand and wrist - arteries', 'hand:Synovial_sheaths_of_fingers'],
  ['upper-limb', 'Radialis_indicisr', 'upper', 'artery', 'Hand and wrist - arteries', 'hand:Radialis_indicis'],
  ['upper-limb', 'Superficial_palmar_archr', 'upper', 'artery', 'Hand and wrist - arteries', 'hand:Deep_palmar_arch'],
  ['upper-limb', '1st_metacarpal_boner', 'upper', 'bone', 'Hand and wrist - bones', 'hand:1st_metacarpal_bone'],
  ['upper-limb', '2nd_metacarpal_boner', 'upper', 'bone', 'Hand and wrist - bones', 'hand:2nd_metacarpal_bone'],
  ['upper-limb', '3rd_metacarpal_boner', 'upper', 'bone', 'Hand and wrist - bones', 'hand:3rd_metacarpal_bone'],
  ['upper-limb', '4th_metacarpal_boner', 'upper', 'bone', 'Hand and wrist - bones', 'hand:4th_metacarpal_bone'],
  ['upper-limb', '5th_metacarpal_boner', 'upper', 'bone', 'Hand and wrist - bones', 'hand:5th_metacarpal_bone'],
  ['upper-limb', 'Capitater', 'upper', 'bone', 'Hand and wrist - bones', 'hand:Capitate'],
  ['upper-limb', 'Distal_phalanx_of_1st_fingerr', 'upper', 'bone', 'Hand and wrist - bones', 'hand:Distal_phalanx_of_1st_finger'],
  ['upper-limb', 'Distal_phalanx_of_2d_fingerr', 'upper', 'bone', 'Hand and wrist - bones', 'hand:Distal_phalanx_of_2d_finger'],
  ['upper-limb', 'Distal_phalanx_of_3d_fingerr', 'upper', 'bone', 'Hand and wrist - bones', 'hand:Distal_phalanx_of_3d_finger'],
  ['upper-limb', 'Distal_phalanx_of_4th_fingerr', 'upper', 'bone', 'Hand and wrist - bones', 'hand:Distal_phalanx_of_4th_finger'],
  ['upper-limb', 'Distal_phalanx_of_5th_fingerr', 'upper', 'bone', 'Hand and wrist - bones', 'hand:Distal_phalanx_of_5th_finger'],
  ['upper-limb', 'Hamater', 'upper', 'bone', 'Hand and wrist - bones', 'hand:Hamate'],
  ['upper-limb', 'Lunate_boner', 'upper', 'bone', 'Hand and wrist - bones', 'hand:Lunate_bone'],
  ['upper-limb', 'Middle_phalanx_of_2d_fingerr', 'upper', 'bone', 'Hand and wrist - bones', 'hand:Middle_phalanx_of_2d_finger'],
  ['upper-limb', 'Middle_phalanx_of_3rd_fingerr', 'upper', 'bone', 'Hand and wrist - bones', 'hand:Middle_phalanx_of_3rd_finger'],
  ['upper-limb', 'Middle_phalanx_of_4th_fingerr', 'upper', 'bone', 'Hand and wrist - bones', 'hand:Middle_phalanx_of_4th_finger'],
  ['upper-limb', 'Middle_phalanx_of_5th_fingerr', 'upper', 'bone', 'Hand and wrist - bones', 'hand:Middle_phalanx_of_5th_finger'],
  ['upper-limb', 'Pisiformr', 'upper', 'bone', 'Hand and wrist - bones', 'hand:Pisiform'],
  ['upper-limb', 'Proximal_phalanx_of_1st_fingerr', 'upper', 'bone', 'Hand and wrist - bones', 'hand:Proximal_phalanx_of_1st_finger'],
  ['upper-limb', 'Proximal_phalanx_of_2d_fingerr', 'upper', 'bone', 'Hand and wrist - bones', 'hand:Proximal_phalanx_of_2d_finger'],
  ['upper-limb', 'Proximal_phalanx_of_3rd_fingerr', 'upper', 'bone', 'Hand and wrist - bones', 'hand:Proximal_phalanx_of_3rd_finger'],
  ['upper-limb', 'Proximal_phalanx_of_4th_fingerr', 'upper', 'bone', 'Hand and wrist - bones', 'hand:Proximal_phalanx_of_4th_finger'],
  ['upper-limb', 'Proximal_phalanx_of_5th_fingerr', 'upper', 'bone', 'Hand and wrist - bones', 'hand:Proximal_phalanx_of_5th_finger'],
  ['upper-limb', 'Scaphoidr', 'upper', 'bone', 'Hand and wrist - bones', 'hand:Scaphoid'],
  ['upper-limb', 'Sesamoid_bones_of_handr', 'upper', 'bone', 'Hand and wrist - bones', 'hand:Sesamoid_bones'],
  ['upper-limb', 'Trapeziumr', 'upper', 'bone', 'Hand and wrist - bones', 'hand:Trapezium'],
  ['upper-limb', 'Trapezoidr', 'upper', 'bone', 'Hand and wrist - bones', 'hand:Trapezoid'],
  ['upper-limb', 'Triquetrumr', 'upper', 'bone', 'Hand and wrist - bones', 'hand:Hamate'],
  ['upper-limb', 'Annular_ligament(A1)_of_1st_fingerr', 'upper', 'ligament', 'Hand and wrist - capsules, ligaments, fasciae', 'hand:Annular_ligament(A1)_of_1st_finger'],
  ['upper-limb', 'Annular_ligament(A2)_of_1st_fingerr', 'upper', 'ligament', 'Hand and wrist - capsules, ligaments, fasciae', 'hand:Annular_ligament(A2)_of_1st_finger'],
  ['upper-limb', 'Annular_ligaments_of_2nd_finger_A1-A5r', 'upper', 'ligament', 'Hand and wrist - capsules, ligaments, fasciae', 'hand:Annular_ligaments_of_2nd_finger_A1-A5'],
  ['upper-limb', 'Annular_ligaments_of_3rd_finger_A1-A5r', 'upper', 'ligament', 'Hand and wrist - capsules, ligaments, fasciae', 'hand:Annular_ligaments_of_3rd_finger_A1-A5'],
  ['upper-limb', 'Annular_ligaments_of_4th_finger_A1-A5r', 'upper', 'ligament', 'Hand and wrist - capsules, ligaments, fasciae', 'hand:Annular_ligaments_of_4th_finger_A1-A5'],
  ['upper-limb', 'Annular_ligaments_of_5th_finger_A1-A5r', 'upper', 'ligament', 'Hand and wrist - capsules, ligaments, fasciae', 'hand:Annular_ligaments_of_5th_finger_A1-A5'],
  ['upper-limb', 'Articular_capsule_of_radiocarpal_joint', 'upper', 'ligament', 'Hand and wrist - capsules, ligaments, fasciae', 'hand:Articular_capsule_of_radiocarpal_joint'],
  ['upper-limb', 'Articular_capsules_of_distal_interphalangeal_joints', 'upper', 'ligament', 'Hand and wrist - capsules, ligaments, fasciae', 'hand:Collateral_ligaments_of_distal_phalangeal_joints'],
  ['upper-limb', 'Articular_capsules_of_metacarpophalangeal_joints', 'upper', 'ligament', 'Hand and wrist - capsules, ligaments, fasciae', 'hand:Articular_capsules_of_metacarpophalangeal_joints'],
  ['upper-limb', 'Articular_capsules_of_proximal_interphalangeal_joints', 'upper', 'ligament', 'Hand and wrist - capsules, ligaments, fasciae', 'hand:Collateral_ligaments_of_interphalangeal_joint'],
  ['upper-limb', 'Capitohamate_interosseus_ligament', 'upper', 'ligament', 'Hand and wrist - capsules, ligaments, fasciae', 'hand:Capitohamate_interosseus_ligament'],
  ['upper-limb', 'Collateral_ligaments_of_distal_phalangeal_jointsr', 'upper', 'ligament', 'Hand and wrist - capsules, ligaments, fasciae', 'hand:Collateral_ligaments_of_distal_phalangeal_joints'],
  ['upper-limb', 'Collateral_ligaments_of_interphalangeal_jointsr', 'upper', 'ligament', 'Hand and wrist - capsules, ligaments, fasciae', 'hand:Collateral_ligaments_of_interphalangeal_joint'],
  ['upper-limb', 'Collateral_ligaments_of_metacarpal_jointsr', 'upper', 'ligament', 'Hand and wrist - capsules, ligaments, fasciae', 'hand:Articular_capsules_of_metacarpophalangeal_joints'],
  ['upper-limb', 'Collateral_ligaments_of_metacarpophalangeal_jointsr', 'upper', 'ligament', 'Hand and wrist - capsules, ligaments, fasciae', 'hand:Articular_capsules_of_metacarpophalangeal_joints'],
  ['upper-limb', 'Cruciform_ligaments_of_2nd_fingerr', 'upper', 'ligament', 'Hand and wrist - capsules, ligaments, fasciae', 'hand:Cruciform_ligaments_of_2nd_finger'],
  ['upper-limb', 'Cruciform_ligaments_of_3rd_fingerr', 'upper', 'ligament', 'Hand and wrist - capsules, ligaments, fasciae', 'hand:Cruciform_ligaments_or_3rd_finger'],
  ['upper-limb', 'Cruciform_ligaments_of_4th_fingerr', 'upper', 'ligament', 'Hand and wrist - capsules, ligaments, fasciae', 'hand:Cruciform_ligaments_or_4th_finger'],
  ['upper-limb', 'Cruciform_ligaments_of_5th_fingerr', 'upper', 'ligament', 'Hand and wrist - capsules, ligaments, fasciae', 'hand:Cruciform_ligaments_or_5th_finger'],
  ['upper-limb', 'Deep_transverse_metacarpal_ligament', 'upper', 'ligament', 'Hand and wrist - capsules, ligaments, fasciae', 'hand:Deep_transverse_metacarpal_ligament'],
  ['upper-limb', 'Dorsal_carpometacarpal_ligaments', 'upper', 'ligament', 'Hand and wrist - capsules, ligaments, fasciae', 'hand:Dorsal_intercarpal_ligaments'],
  ['upper-limb', 'Dorsal_intercarpal_ligament', 'upper', 'ligament', 'Hand and wrist - capsules, ligaments, fasciae', 'hand:Dorsal_intercarpal_ligaments'],
  ['upper-limb', 'Dorsal_metacarpal_ligaments', 'upper', 'ligament', 'Hand and wrist - capsules, ligaments, fasciae', 'hand:Dorsal_intercarpal_ligaments'],
  ['upper-limb', 'Dorsal_radiocarpal_ligamentr', 'upper', 'ligament', 'Hand and wrist - capsules, ligaments, fasciae', 'hand:Dorsal_radiocarpal_ligament'],
  ['upper-limb', 'Dorsal_scaphotriquetral_ligament', 'upper', 'ligament', 'Hand and wrist - capsules, ligaments, fasciae', 'hand:Lunate_bone'],
  ['upper-limb', 'Dorsal_ulnocarpal_ligament', 'upper', 'ligament', 'Hand and wrist - capsules, ligaments, fasciae', 'hand:Lunate_bone'],
  ['upper-limb', 'Extensor_retinaculum_of_wrist', 'upper', 'fascia', 'Hand and wrist - capsules, ligaments, fasciae', 'hand:Extensor_retinaculum_of_wrist'],
  ['upper-limb', 'Fibrous_sheath_of_digits_of_hand', 'upper', 'ligament', 'Hand and wrist - capsules, ligaments, fasciae', 'hand:Synovial_sheaths_of_fingers'],
  ['upper-limb', 'Fibrous_sheath_of_digits_of_hand_thumb', 'upper', 'ligament', 'Hand and wrist - capsules, ligaments, fasciae', 'hand:Proximal_phalanx_of_1st_finger'],
  ['upper-limb', 'Flexor_retinaculum', 'upper', 'fascia', 'Hand and wrist - capsules, ligaments, fasciae', 'hand:Palmar_carpometacarpal_ligaments'],
  ['upper-limb', 'Intercarpal_articulationsr', 'upper', 'ligament', 'Hand and wrist - capsules, ligaments, fasciae', 'hand:Dorsal_intercarpal_ligaments'],
  ['upper-limb', 'Interosseous_metacarpal_ligaments', 'upper', 'ligament', 'Hand and wrist - capsules, ligaments, fasciae', 'hand:Dorsal_metacarpal_ligaments'],
  ['upper-limb', 'Intertendinous_connections_of_extensor_digitorum', 'upper', 'ligament', 'Hand and wrist - capsules, ligaments, fasciae', 'hand:Intertendinous_connections_of_extensor_digitorum'],
  ['upper-limb', 'Lateral_band_of_2nd_finger', 'upper', 'ligament', 'Hand and wrist - capsules, ligaments, fasciae', 'hand:Lateral_band_of_2nd_finger'],
  ['upper-limb', 'Lateral_band_of_3rd_finger', 'upper', 'ligament', 'Hand and wrist - capsules, ligaments, fasciae', 'hand:Cruciform_ligaments_or_3rd_finger'],
  ['upper-limb', 'Lateral_band_of_4th_finger', 'upper', 'ligament', 'Hand and wrist - capsules, ligaments, fasciae', 'hand:Cruciform_ligaments_or_4th_finger'],
  ['upper-limb', 'Lateral_band_of_5th_finger', 'upper', 'ligament', 'Hand and wrist - capsules, ligaments, fasciae', 'hand:Lateral_band_of_5th_finger'],
  ['upper-limb', 'Lunotriquetral_interosseous_ligament', 'upper', 'ligament', 'Hand and wrist - capsules, ligaments, fasciae', 'hand:Lunate_bone'],
  ['upper-limb', 'Oblique_ligament_of_1st_fingerr', 'upper', 'ligament', 'Hand and wrist - capsules, ligaments, fasciae', 'hand:Annular_ligament(A2)_of_1st_finger'],
  ['upper-limb', 'Palmar_capitohamate_ligament', 'upper', 'ligament', 'Hand and wrist - capsules, ligaments, fasciae', 'hand:Capitohamate_interosseus_ligament'],
  ['upper-limb', 'Palmar_carpometacarpal_ligaments', 'upper', 'ligament', 'Hand and wrist - capsules, ligaments, fasciae', 'hand:Palmar_carpometacarpal_ligaments'],
  ['upper-limb', 'Palmar_ligaments_of_distal_phalangeal_jointsr', 'upper', 'ligament', 'Hand and wrist - capsules, ligaments, fasciae', 'hand:Collateral_ligaments_of_distal_phalangeal_joints'],
  ['upper-limb', 'Palmar_ligaments_of_interphalangeal_jointsr', 'upper', 'ligament', 'Hand and wrist - capsules, ligaments, fasciae', 'hand:Collateral_ligaments_of_interphalangeal_joint'],
  ['upper-limb', 'Palmar_ligaments_of_metacarpophalangeal_jointsr', 'upper', 'ligament', 'Hand and wrist - capsules, ligaments, fasciae', 'hand:Sesamoid_bones'],
  ['upper-limb', 'Palmar_lunotriquetral_ligament', 'upper', 'ligament', 'Hand and wrist - capsules, ligaments, fasciae', 'hand:Articular_cartilage_of_pisiform_bone_​'],
  ['upper-limb', 'Palmar_metacarpal_ligaments', 'upper', 'ligament', 'Hand and wrist - capsules, ligaments, fasciae', 'hand:Dorsal_metacarpal_ligaments'],
  ['upper-limb', 'Palmar_radio-ulnar_ligament', 'upper', 'ligament', 'Hand and wrist - capsules, ligaments, fasciae', 'hand:Ulna'],
  ['upper-limb', 'Palmar_radiocarpal_ligamentr', 'upper', 'ligament', 'Hand and wrist - capsules, ligaments, fasciae', 'hand:Flexor_carpi_radialis_tendon_sheath'],
  ['upper-limb', 'Palmar_scaphotriquetral_ligament', 'upper', 'ligament', 'Hand and wrist - capsules, ligaments, fasciae', 'hand:Palmar_scaphotriquetral_ligament'],
  ['upper-limb', 'Palmar_trapezoideocapitate_ligament', 'upper', 'ligament', 'Hand and wrist - capsules, ligaments, fasciae', 'hand:Palmar_trapezoideocapitate_ligament'],
  ['upper-limb', 'Palmar_ulnocarpal_ligamentr', 'upper', 'ligament', 'Hand and wrist - capsules, ligaments, fasciae', 'hand:Palmar_ulnocarpal_ligament'],
  ['upper-limb', 'Pisohamate_ligament', 'upper', 'ligament', 'Hand and wrist - capsules, ligaments, fasciae', 'hand:Pisiform'],
  ['upper-limb', 'Pisometacarpal_ligamentr', 'upper', 'ligament', 'Hand and wrist - capsules, ligaments, fasciae', 'hand:Palmaris_brevis_muscle'],
  ['upper-limb', 'Pisotriquetral_ligament', 'upper', 'ligament', 'Hand and wrist - capsules, ligaments, fasciae', 'hand:Pisiform'],
  ['upper-limb', 'Radial_collateral_ligament_of_wristr', 'upper', 'ligament', 'Hand and wrist - capsules, ligaments, fasciae', 'hand:Radial_collateral_ligament'],
  ['upper-limb', 'Radiate_carpal_ligament', 'upper', 'ligament', 'Hand and wrist - capsules, ligaments, fasciae', 'hand:Palmar_radiocarpal_ligament'],
  ['upper-limb', 'Radioscaphocapitate_ligament', 'upper', 'ligament', 'Hand and wrist - capsules, ligaments, fasciae', 'hand:Flexor_carpi_radialis_tendon_sheath'],
  ['upper-limb', 'Scaphocapitate_ligament', 'upper', 'ligament', 'Hand and wrist - capsules, ligaments, fasciae', 'hand:Scaphocapitate_ligament'],
  ['upper-limb', 'Scapholunate_interosseus_ligament', 'upper', 'ligament', 'Hand and wrist - capsules, ligaments, fasciae', 'hand:Lunotriquetral_interosseous_ligament'],
  ['upper-limb', 'Scaphotrapeziotrapezoidal_ligament', 'upper', 'ligament', 'Hand and wrist - capsules, ligaments, fasciae', 'hand:Palmar_trapezoideocapitate_ligament'],
  ['upper-limb', 'Thickened_part_of_antebrachial_fascia', 'upper', 'fascia', 'Hand and wrist - capsules, ligaments, fasciae', 'hand:Flexor_retinaculum_of_wrist'],
  ['upper-limb', 'Trapeziotrapezoidal_interosseous_ligament', 'upper', 'ligament', 'Hand and wrist - capsules, ligaments, fasciae', 'hand:Palmar_trapezoideocapitate_ligament'],
  ['upper-limb', 'Trapezoideocapitate_interosseous_ligament', 'upper', 'ligament', 'Hand and wrist - capsules, ligaments, fasciae', 'hand:Trapezoid'],
  ['upper-limb', 'Triangular_fibro_cartilage_disc', 'upper', 'ligament', 'Hand and wrist - capsules, ligaments, fasciae', 'hand:Articular_cartiage_of_ulna_distal_end'],
  ['upper-limb', 'Triquetrocapitate_ligament', 'upper', 'ligament', 'Hand and wrist - capsules, ligaments, fasciae', 'hand:Palmar_scaphotriquetral_ligament'],
  ['upper-limb', 'Triquetrohamate_ligament', 'upper', 'ligament', 'Hand and wrist - capsules, ligaments, fasciae', 'hand:Pisometacarpal_ligament'],
  ['upper-limb', 'Ulnar_collateral_ligament_of_wristr', 'upper', 'ligament', 'Hand and wrist - capsules, ligaments, fasciae', 'hand:Triquetrum'],
  ['upper-limb', 'Ulnopisiform_ligament', 'upper', 'ligament', 'Hand and wrist - capsules, ligaments, fasciae', 'hand:Pisiform'],
  ['upper-limb', 'Ulnotriquetral_ligament', 'upper', 'ligament', 'Hand and wrist - capsules, ligaments, fasciae', 'hand:Ulnar_collateral_ligament'],
  ['upper-limb', 'Art_cart_of_capitate_bone​', 'upper', 'cartilage', 'Hand and wrist - cartilages', 'hand:Capitate'],
  ['upper-limb', 'Art_cart_of_hamate_bone​', 'upper', 'cartilage', 'Hand and wrist - cartilages', 'hand:Hamate'],
  ['upper-limb', 'Art_cart_of_lunate_bone', 'upper', 'cartilage', 'Hand and wrist - cartilages', 'hand:Lunate_bone'],
  ['upper-limb', 'Art_cart_of_pisiform_bone_​', 'upper', 'cartilage', 'Hand and wrist - cartilages', 'hand:Pisiform'],
  ['upper-limb', 'Art_cart_of_scaphoid_bone​', 'upper', 'cartilage', 'Hand and wrist - cartilages', 'hand:Scaphoid'],
  ['upper-limb', 'Art_cart_of_trapezium_bone​', 'upper', 'cartilage', 'Hand and wrist - cartilages', 'hand:Trapezium'],
  ['upper-limb', 'Art_cart_of_trapezoid_bone​', 'upper', 'cartilage', 'Hand and wrist - cartilages', 'hand:Trapezoid'],
  ['upper-limb', 'Art_cart_of_triquetrum_bone', 'upper', 'cartilage', 'Hand and wrist - cartilages', 'hand:Hamate'],
  ['upper-limb', 'Art_carts_of_distal_phalanges', 'upper', 'cartilage', 'Hand and wrist - cartilages', 'hand:Collateral_ligaments_of_distal_phalangeal_joints'],
  ['upper-limb', 'Art_carts_of_metacarpal_bones', 'upper', 'cartilage', 'Hand and wrist - cartilages', 'hand:Articular_cartilages_of_metacarpal_bones'],
  ['upper-limb', 'Art_carts_of_middle_phalanges', 'upper', 'cartilage', 'Hand and wrist - cartilages', 'hand:Articular_cartilages_of_middle_phalanges'],
  ['upper-limb', 'Art_carts_of_proximal_phalanges', 'upper', 'cartilage', 'Hand and wrist - cartilages', 'hand:Articular_cartilages_of_proximal_phalanges'],
  ['upper-limb', 'Abductor_pollicis_longus_tendon_sheath', 'upper', 'tendon', 'Hand and wrist - synovia, bursae', 'hand:Abductor_pollicis_longus_tendon_sheath'],
  ['upper-limb', 'Common_flexor_tendon_sheath', 'upper', 'tendon', 'Hand and wrist - synovia, bursae', 'hand:Common_flexor_tendon_sheath'],
  ['upper-limb', 'Extensor_carpi_radialis_brevis_tendon_sheath', 'upper', 'tendon', 'Hand and wrist - synovia, bursae', 'hand:Extensor_carpi_radialis_brevis_tendon_sheath'],
  ['upper-limb', 'Extensor_carpi_radialis_longus_tendon_sheath', 'upper', 'tendon', 'Hand and wrist - synovia, bursae', 'hand:Extensor_carpi_radialis_brevis_tendon_sheath'],
  ['upper-limb', 'Extensor_carpi_ulnaris_tendon_sheath', 'upper', 'tendon', 'Hand and wrist - synovia, bursae', 'hand:Common_tendon_of_extensor_carpi_ulnaris'],
  ['upper-limb', 'Extensor_digiti_minimi_tendon_sheath', 'upper', 'tendon', 'Hand and wrist - synovia, bursae', 'hand:Common_tendon_of_extensor_carpi_ulnaris'],
  ['upper-limb', 'Extensor_digitorum_-_Extensor_indicis_tendon_sheath', 'upper', 'tendon', 'Hand and wrist - synovia, bursae', 'hand:Extensor_digitorum_-_Extensor_indicis_tendon_sheath'],
  ['upper-limb', 'Extensor_pollicis_brevis_tendon_sheath', 'upper', 'tendon', 'Hand and wrist - synovia, bursae', 'hand:Abductor_pollicis_longus_tendon_sheath'],
  ['upper-limb', 'Extensor_pollicis_longus_tendon_sheath', 'upper', 'tendon', 'Hand and wrist - synovia, bursae', 'hand:Extensor_pollicis_longus_tendon_sheath'],
  ['upper-limb', 'Flexor_carpi_radialis_tendon_sheath', 'upper', 'tendon', 'Hand and wrist - synovia, bursae', 'hand:Flexor_carpi_radialis_tendon_sheath'],
  ['upper-limb', 'Flexor_pollicis_longus_tendon_sheath', 'upper', 'tendon', 'Hand and wrist - synovia, bursae', 'hand:Flexor_pollicis_longus_tendon_sheath'],
  ['upper-limb', 'Synovial_sheaths_of_fingers', 'upper', 'bursa', 'Hand and wrist - synovia, bursae', 'hand:Synovial_sheaths_of_fingers'],
  ['upper-limb', '1st_dorsal_interosseus_of_handr', 'upper', 'muscle', 'Hand and wrist - muscles', 'hand:1st_dorsal_interosseus_of_hand'],
  ['upper-limb', '1st_lumbrical_of_handr', 'upper', 'muscle', 'Hand and wrist - muscles', 'hand:1st_lumbrical_of_hand'],
  ['upper-limb', '1st_palmar_interosseus_of_handr', 'upper', 'muscle', 'Hand and wrist - muscles', 'hand:1st_palmar_interosseus_of_hand'],
  ['upper-limb', '2nd_dorsal_interosseus_of_handr', 'upper', 'muscle', 'Hand and wrist - muscles', 'hand:1st_palmar_interosseus_of_hand'],
  ['upper-limb', '2nd_lumbrical_of_handr', 'upper', 'muscle', 'Hand and wrist - muscles', 'hand:1st_palmar_interosseus_of_hand'],
  ['upper-limb', '2nd_palmar_interosseus_of_handr', 'upper', 'muscle', 'Hand and wrist - muscles', 'hand:2nd_palmar_interosseus_of_hand'],
  ['upper-limb', '3rd_dorsal_interosseus_of_handr', 'upper', 'muscle', 'Hand and wrist - muscles', 'hand:2nd_palmar_interosseus_of_hand'],
  ['upper-limb', '3rd_lumbrical_of_handr', 'upper', 'muscle', 'Hand and wrist - muscles', 'hand:2nd_palmar_interosseus_of_hand'],
  ['upper-limb', '3rd_palmar_interosseus_of_handr', 'upper', 'muscle', 'Hand and wrist - muscles', 'hand:3rd_palmar_interosseus_of_hand'],
  ['upper-limb', '4th_dorsal_interosseus_of_handr', 'upper', 'muscle', 'Hand and wrist - muscles', 'hand:3rd_palmar_interosseus_of_hand'],
  ['upper-limb', '4th_lumbrical_of_handr', 'upper', 'muscle', 'Hand and wrist - muscles', 'hand:3rd_palmar_interosseus_of_hand'],
  ['upper-limb', 'Abductor_digiti_minimir', 'upper', 'muscle', 'Hand and wrist - muscles', 'hand:Abductor_digiti_minimi'],
  ['upper-limb', 'Abductor_pollicis_brevisr', 'upper', 'muscle', 'Hand and wrist - muscles', 'hand:Abductor_pollicis_brevis'],
  ['upper-limb', 'Adductor_pollicisr', 'upper', 'muscle', 'Hand and wrist - muscles', 'hand:Adductor_pollicis'],
  ['upper-limb', 'Aponeurosis_palmarisr', 'upper', 'muscle', 'Hand and wrist - muscles', 'hand:Aponeurosis_palmaris'],
  ['upper-limb', 'Deep_head_of_flexor_pollicis_brevisr', 'upper', 'muscle', 'Hand and wrist - muscles', 'hand:Deep_head_of_flexor_pollicis_brevis'],
  ['upper-limb', 'Extensor_hood_of_2nd_fingerr', 'upper', 'muscle', 'Hand and wrist - muscles', 'hand:Proximal_phalanx_of_2d_finger'],
  ['upper-limb', 'Extensor_hood_of_3rd_fingerr', 'upper', 'muscle', 'Hand and wrist - muscles', 'hand:Proximal_phalanx_of_3rd_finger'],
  ['upper-limb', 'Extensor_hood_of_4th_fingerr', 'upper', 'muscle', 'Hand and wrist - muscles', 'hand:Proximal_phalanx_of_4th_finger'],
  ['upper-limb', 'Extensor_hood_of_5th_fingerr', 'upper', 'muscle', 'Hand and wrist - muscles', 'hand:Proximal_phalanx_of_5th_finger'],
  ['upper-limb', 'Flexor_digiti_minimi_brevis_of_handr', 'upper', 'muscle', 'Hand and wrist - muscles', 'hand:Abductor_digiti_minimi'],
  ['upper-limb', 'Oblique_head_of_adductor_pollicisr', 'upper', 'muscle', 'Hand and wrist - muscles', 'hand:Deep_head_of_flexor_pollicis_brevis'],
  ['upper-limb', 'Opponens_digiti_minimi_muscle_of_handr', 'upper', 'muscle', 'Hand and wrist - muscles', 'hand:Opponens_digiti_minimi_muscle_of_hand'],
  ['upper-limb', 'Opponens_pollicis_muscler', 'upper', 'muscle', 'Hand and wrist - muscles', 'hand:Deep_head_of_flexor_pollicis_brevis'],
  ['upper-limb', 'Palmaris_brevis_muscler', 'upper', 'muscle', 'Hand and wrist - muscles', 'hand:Pisiform'],
  ['upper-limb', 'Superficial_head_of_flexor_pollicis_brevisr', 'upper', 'muscle', 'Hand and wrist - muscles', 'hand:1st_metacarpal_bone'],
  ['upper-limb', 'Superficial_transverse_metacarpal_lig', 'upper', 'muscle', 'Hand and wrist - muscles', 'hand:Superficial_transverse_metacarpal_ligament'],
  ['upper-limb', 'Transverse_head_of_adductor_pollicisr', 'upper', 'muscle', 'Hand and wrist - muscles', 'hand:Adductor_pollicis'],
  ['upper-limb', 'Median_nerve_Common_palmar_digital_nerve_of_the_thumb', 'upper', 'nerve', 'Hand and wrist - nerves', 'hand:Median_nerve_Common_palmar_digital_nerve_of_the_thumb'],
  ['upper-limb', 'Median_nerve_Common_palmar_digital_nerves', 'upper', 'nerve', 'Hand and wrist - nerves', 'hand:Median_nerve_Common_palmar_digital_nerves'],
  ['upper-limb', 'Median_nerve_Palmar_br', 'upper', 'nerve', 'Hand and wrist - nerves', 'hand:Median_nerve_Palmar_br'],
  ['upper-limb', 'Median_nerve_Proper_palmar_digital_nerves', 'upper', 'nerve', 'Hand and wrist - nerves', 'hand:Median_nerve_Proper_palmar_digital_nerves'],
  ['upper-limb', 'Median_nerve_Proper_palmar_digital_nerves_of_the_thumb', 'upper', 'nerve', 'Hand and wrist - nerves', 'hand:Median_nerve_Proper_palmar_digital_nerves_of_the_thumb'],
  ['upper-limb', 'Median_nerve_Recurrent_br', 'upper', 'nerve', 'Hand and wrist - nerves', 'hand:Median_nerve_Common_palmar_digital_nerve_of_the_thumb'],
  ['upper-limb', 'Radial_nerve_(dorsal_digital_nn)r', 'upper', 'nerve', 'Hand and wrist - nerves', 'hand:Radial_nerve_Dorsal_digital_nn'],
  ['upper-limb', 'Ulnar_nerve_Communicating_br', 'upper', 'nerve', 'Hand and wrist - nerves', 'hand:Ulnar_nerve_Communicating_br'],
  ['upper-limb', 'Ulnar_nerve_Deep_br', 'upper', 'nerve', 'Hand and wrist - nerves', 'hand:Ulnar_nerve_Deep_br'],
  ['upper-limb', 'Ulnar_nerve_Dorsal_cutaneous_br', 'upper', 'nerve', 'Hand and wrist - nerves', 'hand:Ulnar_nerve_Dorsal_cutaneous_br'],
  ['upper-limb', 'Ulnar_nerve_Palmar_cutaneous_br', 'upper', 'nerve', 'Hand and wrist - nerves', 'hand:Ulnar_nerve_Palmar_cutaneous_br'],
  ['upper-limb', 'Ulnar_nerve_Superficial_br_Common_palmar_digital_n', 'upper', 'nerve', 'Hand and wrist - nerves', 'hand:Opponens_digiti_minimi_muscle_of_hand'],
  ['upper-limb', 'Ulnar_nerve_Superficial_br_Proper_palmar_digital_nn', 'upper', 'nerve', 'Hand and wrist - nerves', 'hand:Ulnar_nerve_Superficial_br_Proper_palmar_digital_nn'],
  ['upper-limb', 'Deep_venous_palmar_arch', 'upper', 'vein', 'Hand and wrist - veins', 'hand:Deep_venous_palmar_arch'],
  ['upper-limb', 'Dorsal_digital_veins', 'upper', 'vein', 'Hand and wrist - veins', 'hand:Dorsal_digital_veins'],
  ['upper-limb', 'Dorsal_metatarsal_veins', 'upper', 'vein', 'Hand and wrist - veins', 'hand:Dorsal_metatarsal_veins'],
  ['upper-limb', 'Dorsal_venous_network', 'upper', 'vein', 'Hand and wrist - veins', 'hand:Dorsal_venous_network_of_hand'],
  ['upper-limb', 'Intercapitular_veins', 'upper', 'vein', 'Hand and wrist - veins', 'hand:Intercapitular_veins_of_hand'],
  ['upper-limb', 'Palmal_digital_veins', 'upper', 'vein', 'Hand and wrist - veins', 'hand:Palmal_digital_veins'],
  ['upper-limb', 'Palmar_metacarpal_veins', 'upper', 'vein', 'Hand and wrist - veins', 'hand:Palmar_metacarpal_veins'],
  ['upper-limb', 'Palmar_venous_network', 'upper', 'vein', 'Hand and wrist - veins', 'hand:Palmar_venous_network_of_hand'],
  ['upper-limb', 'Superficial_palmar_venous_arch', 'upper', 'vein', 'Hand and wrist - veins', 'hand:Superficial_palmar_venous_arch'],
  ['upper-limb', 'Common_carotid_arteryr', 'upper', 'artery', 'Head and neck - arteries'],
  ['upper-limb', 'Atlas_(C1)', 'upper', 'bone', 'Head and neck - bones'],
  ['upper-limb', 'Axis_(C2)', 'upper', 'bone', 'Head and neck - bones'],
  ['upper-limb', 'Cervical_vertebra_(C3)', 'upper', 'bone', 'Head and neck - bones'],
  ['upper-limb', 'Cervical_vertebra_(C4)', 'upper', 'bone', 'Head and neck - bones'],
  ['upper-limb', 'Cervical_vertebra_(C5)', 'upper', 'bone', 'Head and neck - bones'],
  ['upper-limb', 'Cervical_vertebra_(C6)', 'upper', 'bone', 'Head and neck - bones'],
  ['upper-limb', 'Cervical_vertebra_(C7)', 'upper', 'bone', 'Head and neck - bones'],
  ['upper-limb', 'annulus_fibrosus_C2_C3', 'upper', 'cartilage', 'Head and neck - cartilages'],
  ['upper-limb', 'annulus_fibrosus_C3_C4', 'upper', 'cartilage', 'Head and neck - cartilages'],
  ['upper-limb', 'annulus_fibrosus_C4_C5', 'upper', 'cartilage', 'Head and neck - cartilages'],
  ['upper-limb', 'annulus_fibrosus_C5_C6', 'upper', 'cartilage', 'Head and neck - cartilages'],
  ['upper-limb', 'annulus_fibrosus_C6_C7', 'upper', 'cartilage', 'Head and neck - cartilages'],
  ['upper-limb', 'annulus_fibrosus_C7_T1', 'upper', 'cartilage', 'Head and neck - cartilages'],
  ['upper-limb', 'art_cart_of_Atlas__C1', 'upper', 'cartilage', 'Head and neck - cartilages'],
  ['upper-limb', 'art_cart_of_Axis__C2', 'upper', 'cartilage', 'Head and neck - cartilages'],
  ['upper-limb', 'Nucleus_pulposus_C2-T1', 'upper', 'cartilage', 'Head and neck - cartilages'],
  ['upper-limb', 'Vertebra_C3_art_cart', 'upper', 'cartilage', 'Head and neck - cartilages'],
  ['upper-limb', 'Vertebra_C4_art_cart', 'upper', 'cartilage', 'Head and neck - cartilages'],
  ['upper-limb', 'Vertebra_C5_art_cart', 'upper', 'cartilage', 'Head and neck - cartilages'],
  ['upper-limb', 'Vertebra_C6_art_cart', 'upper', 'cartilage', 'Head and neck - cartilages'],
  ['upper-limb', 'Vertebra_C7_art_cart', 'upper', 'cartilage', 'Head and neck - cartilages'],
  ['upper-limb', 'C5_rootr', 'upper', 'nerve', 'Head and neck - nerves'],
  ['upper-limb', 'C6_rootr', 'upper', 'nerve', 'Head and neck - nerves'],
  ['upper-limb', 'C7_rootr', 'upper', 'nerve', 'Head and neck - nerves'],
  ['upper-limb', 'C8_rootr', 'upper', 'nerve', 'Head and neck - nerves'],
  ['upper-limb', 'Circumflex_scapular_arteryr', 'upper', 'artery', 'Pectoral girdle - arteries'],
  ['upper-limb', 'Dorsal_scapular_artery_(Deep_br_of_transverse_cervical_a)r', 'upper', 'artery', 'Pectoral girdle - arteries'],
  ['upper-limb', 'Subclavian_arteryr', 'upper', 'artery', 'Pectoral girdle - arteries'],
  ['upper-limb', 'Subscapular_arteryr', 'upper', 'artery', 'Pectoral girdle - arteries'],
  ['upper-limb', 'Superficial_branch_of_Transverse_cervical_arteryr', 'upper', 'artery', 'Pectoral girdle - arteries'],
  ['upper-limb', 'Suprascapular_arteryr', 'upper', 'artery', 'Pectoral girdle - arteries'],
  ['upper-limb', 'Thoracoacromial_artery_Acromial_brr', 'upper', 'artery', 'Pectoral girdle - arteries'],
  ['upper-limb', 'Thoracoacromial_artery_Deltoid_brr', 'upper', 'artery', 'Pectoral girdle - arteries'],
  ['upper-limb', 'Thoracoacromial_artery_Pectoral_brr', 'upper', 'artery', 'Pectoral girdle - arteries'],
  ['upper-limb', 'Thyrocervical_trunkr', 'upper', 'artery', 'Pectoral girdle - arteries'],
  ['upper-limb', 'Transverse_cervical_arteryr', 'upper', 'artery', 'Pectoral girdle - arteries'],
  ['upper-limb', 'Vertebral_arteryr', 'upper', 'artery', 'Pectoral girdle - arteries'],
  ['upper-limb', 'Clavicler', 'upper', 'bone', 'Pectoral girdle - bones'],
  ['upper-limb', 'Scapular', 'upper', 'bone', 'Pectoral girdle - bones'],
  ['upper-limb', 'Acromioclavicular_capsuler', 'upper', 'ligament', 'Pectoral girdle - capsules, ligaments, fasciae'],
  ['upper-limb', 'Acromioclavicular_discr', 'upper', 'ligament', 'Pectoral girdle - capsules, ligaments, fasciae'],
  ['upper-limb', 'Acromioclavicular_ligamentr', 'upper', 'ligament', 'Pectoral girdle - capsules, ligaments, fasciae'],
  ['upper-limb', 'Anterior_sternoclavicular_ligamentr', 'upper', 'ligament', 'Pectoral girdle - capsules, ligaments, fasciae'],
  ['upper-limb', 'Conoid_ligament_(part_of_coracoclavicular_ligament)r', 'upper', 'ligament', 'Pectoral girdle - capsules, ligaments, fasciae'],
  ['upper-limb', 'Coraco-acromial_ligamentr', 'upper', 'ligament', 'Pectoral girdle - capsules, ligaments, fasciae'],
  ['upper-limb', 'Coracoclavicular_ligamentr', 'upper', 'ligament', 'Pectoral girdle - capsules, ligaments, fasciae'],
  ['upper-limb', 'Costoclavicular_ligamentr', 'upper', 'ligament', 'Pectoral girdle - capsules, ligaments, fasciae'],
  ['upper-limb', 'Inferior_transverse_scapular_ligamentr', 'upper', 'ligament', 'Pectoral girdle - capsules, ligaments, fasciae'],
  ['upper-limb', 'Interclavicular_ligamentr', 'upper', 'ligament', 'Pectoral girdle - capsules, ligaments, fasciae'],
  ['upper-limb', 'Posterior_Sternoclavicular_ligamentr', 'upper', 'ligament', 'Pectoral girdle - capsules, ligaments, fasciae'],
  ['upper-limb', 'Sternoclavicular_capsuler', 'upper', 'ligament', 'Pectoral girdle - capsules, ligaments, fasciae'],
  ['upper-limb', 'Superior_transverse_scapular_ligamentr', 'upper', 'ligament', 'Pectoral girdle - capsules, ligaments, fasciae'],
  ['upper-limb', 'Trapezoid_ligament_(part_of_coracoclavicular_ligament)r', 'upper', 'ligament', 'Pectoral girdle - capsules, ligaments, fasciae'],
  ['upper-limb', 'Articular_cartilage_of_acromioclavicular_joint_on_clavicler', 'upper', 'cartilage', 'Pectoral girdle - cartilages'],
  ['upper-limb', 'Articular_cartilage_of_acromioclavicular_joint_on_scapular', 'upper', 'cartilage', 'Pectoral girdle - cartilages'],
  ['upper-limb', 'Articular_cartilage_of_glenohumeral_joint_on_scapular', 'upper', 'cartilage', 'Pectoral girdle - cartilages'],
  ['upper-limb', 'Articular_cartilage_of_sternoclavicular_joint_on_clavicler', 'upper', 'cartilage', 'Pectoral girdle - cartilages'],
  ['upper-limb', 'Articular_disc_of_steroclavicular_jointr', 'upper', 'cartilage', 'Pectoral girdle - cartilages'],
  ['upper-limb', 'Abdominal_head_of_pectoralis_major_muscler', 'upper', 'muscle', 'Pectoral girdle - muscles'],
  ['upper-limb', 'Acromial_part_of_deltoid_muscler', 'upper', 'muscle', 'Pectoral girdle - muscles'],
  ['upper-limb', 'Ascending_part_of_Trapezius_muscler', 'upper', 'muscle', 'Pectoral girdle - muscles'],
  ['upper-limb', 'Clavicular_head_of_pectoralis_major_muscler', 'upper', 'muscle', 'Pectoral girdle - muscles'],
  ['upper-limb', 'Clavicular_part_of_deltoid_muscler', 'upper', 'muscle', 'Pectoral girdle - muscles'],
  ['upper-limb', 'Deltoid_muscler', 'upper', 'muscle', 'Pectoral girdle - muscles'],
  ['upper-limb', 'Descending_part_of_Trapezius_muscler', 'upper', 'muscle', 'Pectoral girdle - muscles'],
  ['upper-limb', 'Infraspinatus_muscler', 'upper', 'muscle', 'Pectoral girdle - muscles'],
  ['upper-limb', 'Latissimus_dorsir', 'upper', 'muscle', 'Pectoral girdle - muscles'],
  ['upper-limb', 'Levator_scapulaer', 'upper', 'muscle', 'Pectoral girdle - muscles'],
  ['upper-limb', 'Pectoralis_majorr', 'upper', 'muscle', 'Pectoral girdle - muscles'],
  ['upper-limb', 'Pectoralis_minor_muscler', 'upper', 'muscle', 'Pectoral girdle - muscles'],
  ['upper-limb', 'Rhomboid_major_muscler', 'upper', 'muscle', 'Pectoral girdle - muscles'],
  ['upper-limb', 'Rhomboid_minor_muscler', 'upper', 'muscle', 'Pectoral girdle - muscles'],
  ['upper-limb', 'Serratus_anterior_muscler', 'upper', 'muscle', 'Pectoral girdle - muscles'],
  ['upper-limb', 'Spinal_part_of_deltoid_muscler', 'upper', 'muscle', 'Pectoral girdle - muscles'],
  ['upper-limb', 'Sternocostal_head_of_pectoralis_major_muscler', 'upper', 'muscle', 'Pectoral girdle - muscles'],
  ['upper-limb', 'Subclavius_muscler', 'upper', 'muscle', 'Pectoral girdle - muscles'],
  ['upper-limb', 'Subscapularis_muscler', 'upper', 'muscle', 'Pectoral girdle - muscles'],
  ['upper-limb', 'Supraspinatus_muscler', 'upper', 'muscle', 'Pectoral girdle - muscles'],
  ['upper-limb', 'Teres_major_muscler', 'upper', 'muscle', 'Pectoral girdle - muscles'],
  ['upper-limb', 'Teres_minor_muscler', 'upper', 'muscle', 'Pectoral girdle - muscles'],
  ['upper-limb', 'Transverse_part_of_trapezius_muscler', 'upper', 'muscle', 'Pectoral girdle - muscles'],
  ['upper-limb', 'Trapezius_muscler', 'upper', 'muscle', 'Pectoral girdle - muscles'],
  ['upper-limb', 'Dorsal_scapular_nerver', 'upper', 'nerve', 'Pectoral girdle - nerves'],
  ['upper-limb', 'Lower_subscapular_nerver', 'upper', 'nerve', 'Pectoral girdle - nerves'],
  ['upper-limb', 'Suprascapular_nerver', 'upper', 'nerve', 'Pectoral girdle - nerves'],
  ['upper-limb', 'Upper_subscapular_nerver', 'upper', 'nerve', 'Pectoral girdle - nerves'],
  ['upper-limb', 'Infraserratus_bursar', 'upper', 'bursa', 'Pectoral girdle - synovia, bursae'],
  ['upper-limb', 'Subacromial_bursar', 'upper', 'bursa', 'Pectoral girdle - synovia, bursae'],
  ['upper-limb', 'Subacromial-subdeltoid_bursar', 'upper', 'bursa', 'Pectoral girdle - synovia, bursae'],
  ['upper-limb', 'Subcutaneous_acromial_bursar', 'upper', 'bursa', 'Pectoral girdle - synovia, bursae'],
  ['upper-limb', 'Subdeltoid_bursar', 'upper', 'bursa', 'Pectoral girdle - synovia, bursae'],
  ['upper-limb', 'Subtendinous_bursa_of_trapeziusr', 'upper', 'bursa', 'Pectoral girdle - synovia, bursae'],
  ['upper-limb', 'Supraserratus_bursar', 'upper', 'bursa', 'Pectoral girdle - synovia, bursae'],
  ['upper-limb', 'External_jugular_veinr', 'upper', 'vein', 'Pectoral girdle - veins'],
  ['upper-limb', 'Costocervical_trunkr', 'upper', 'artery', 'Thorax - arteries'],
  ['upper-limb', 'Internal_thoracic_arteryr', 'upper', 'artery', 'Thorax - arteries'],
  ['upper-limb', 'Lateral_thoracic_arteryr', 'upper', 'artery', 'Thorax - arteries'],
  ['upper-limb', 'Superior_thoracic_arteryr', 'upper', 'artery', 'Thorax - arteries'],
  ['upper-limb', 'Thoracodorsal_arteryr', 'upper', 'artery', 'Thorax - arteries'],
  ['upper-limb', 'Body_of_sternum', 'upper', 'bone', 'Thorax - bones'],
  ['upper-limb', 'Manubrium_of_sternum', 'upper', 'bone', 'Thorax - bones'],
  ['upper-limb', 'Rib_(10th)r', 'upper', 'bone', 'Thorax - bones'],
  ['upper-limb', 'Rib_(11th)r', 'upper', 'bone', 'Thorax - bones'],
  ['upper-limb', 'Rib_(12th)r', 'upper', 'bone', 'Thorax - bones'],
  ['upper-limb', 'Rib_(1st)r', 'upper', 'bone', 'Thorax - bones'],
  ['upper-limb', 'Rib_(2nd)r', 'upper', 'bone', 'Thorax - bones'],
  ['upper-limb', 'Rib_(3rd)r', 'upper', 'bone', 'Thorax - bones'],
  ['upper-limb', 'Rib_(4th)r', 'upper', 'bone', 'Thorax - bones'],
  ['upper-limb', 'Rib_(5th)r', 'upper', 'bone', 'Thorax - bones'],
  ['upper-limb', 'Rib_(6th)r', 'upper', 'bone', 'Thorax - bones'],
  ['upper-limb', 'Rib_(7th)r', 'upper', 'bone', 'Thorax - bones'],
  ['upper-limb', 'Rib_(8th)r', 'upper', 'bone', 'Thorax - bones'],
  ['upper-limb', 'Rib_(9th)r', 'upper', 'bone', 'Thorax - bones'],
  ['upper-limb', '10th_rib_art_cart_of_headr', 'upper', 'cartilage', 'Thorax - cartilages'],
  ['upper-limb', '10th_rib_art_cart_of_tubercler', 'upper', 'cartilage', 'Thorax - cartilages'],
  ['upper-limb', '11th_rib_art_cart_of_headr', 'upper', 'cartilage', 'Thorax - cartilages'],
  ['upper-limb', '12th_rib_art_cart_of_headr', 'upper', 'cartilage', 'Thorax - cartilages'],
  ['upper-limb', '1st_rib_art_cart_of_headr', 'upper', 'cartilage', 'Thorax - cartilages'],
  ['upper-limb', '1st_rib_art_cart_of_tubercler', 'upper', 'cartilage', 'Thorax - cartilages'],
  ['upper-limb', '2nd_rib_art_cart_of_headr', 'upper', 'cartilage', 'Thorax - cartilages'],
  ['upper-limb', '2nd_rib_art_cart_of_tubercler', 'upper', 'cartilage', 'Thorax - cartilages'],
  ['upper-limb', '3rd_rib_art_cart_of_headr', 'upper', 'cartilage', 'Thorax - cartilages'],
  ['upper-limb', '3rd_rib_art_cart_of_tubercler', 'upper', 'cartilage', 'Thorax - cartilages'],
  ['upper-limb', '4th_rib_art_cart_of_headr', 'upper', 'cartilage', 'Thorax - cartilages'],
  ['upper-limb', '4th_rib_art_cart_of_tubercler', 'upper', 'cartilage', 'Thorax - cartilages'],
  ['upper-limb', '5th_rib_art_cart_of_headr', 'upper', 'cartilage', 'Thorax - cartilages'],
  ['upper-limb', '5th_rib_art_cart_of_tubercler', 'upper', 'cartilage', 'Thorax - cartilages'],
  ['upper-limb', '6th_rib_art_cart_of_headr', 'upper', 'cartilage', 'Thorax - cartilages'],
  ['upper-limb', '6th_rib_art_cart_of_tubercler', 'upper', 'cartilage', 'Thorax - cartilages'],
  ['upper-limb', '7th_rib_art_cart_of_headr', 'upper', 'cartilage', 'Thorax - cartilages'],
  ['upper-limb', '7th_rib_art_cart_of_tubercler', 'upper', 'cartilage', 'Thorax - cartilages'],
  ['upper-limb', '8th_rib_art_cart_of_headr', 'upper', 'cartilage', 'Thorax - cartilages'],
  ['upper-limb', '8th_rib_art_cart_of_tubercler', 'upper', 'cartilage', 'Thorax - cartilages'],
  ['upper-limb', '9th_rib_art_cart_of_headr', 'upper', 'cartilage', 'Thorax - cartilages'],
  ['upper-limb', '9th_rib_art_cart_of_tubercler', 'upper', 'cartilage', 'Thorax - cartilages'],
  ['upper-limb', 'art_cart_of_sternoclavicular_joint_on_manubriumr', 'upper', 'cartilage', 'Thorax - cartilages'],
  ['upper-limb', 'art_cart_of_sternocostal_joint_on_manubriumr', 'upper', 'cartilage', 'Thorax - cartilages'],
  ['upper-limb', 'art_cart_of_sternocostal_joints_on_sternal_bodyr', 'upper', 'cartilage', 'Thorax - cartilages'],
  ['upper-limb', 'Costal_cart_of_10thribr', 'upper', 'cartilage', 'Thorax - cartilages'],
  ['upper-limb', 'Costal_cart_of_11thribr', 'upper', 'cartilage', 'Thorax - cartilages'],
  ['upper-limb', 'Costal_cart_of_12thribr', 'upper', 'cartilage', 'Thorax - cartilages'],
  ['upper-limb', 'Costal_cart_of_1stribr', 'upper', 'cartilage', 'Thorax - cartilages'],
  ['upper-limb', 'Costal_cart_of_2ndribr', 'upper', 'cartilage', 'Thorax - cartilages'],
  ['upper-limb', 'Costal_cart_of_3rdribr', 'upper', 'cartilage', 'Thorax - cartilages'],
  ['upper-limb', 'Costal_cart_of_4thribr', 'upper', 'cartilage', 'Thorax - cartilages'],
  ['upper-limb', 'Costal_cart_of_5thribr', 'upper', 'cartilage', 'Thorax - cartilages'],
  ['upper-limb', 'Costal_cart_of_6thribr', 'upper', 'cartilage', 'Thorax - cartilages'],
  ['upper-limb', 'Costal_cart_of_7thribr', 'upper', 'cartilage', 'Thorax - cartilages'],
  ['upper-limb', 'Costal_cart_of_8thribr', 'upper', 'cartilage', 'Thorax - cartilages'],
  ['upper-limb', 'Costal_cart_of_9thribr', 'upper', 'cartilage', 'Thorax - cartilages'],
  ['upper-limb', 'Nucleus_pulposus_T1-L1', 'upper', 'cartilage', 'Thorax - cartilages'],
  ['upper-limb', 'Xiphoid_process', 'upper', 'cartilage', 'Thorax - cartilages'],
  ['upper-limb', 'Anterior_divisions_of_brachial_plexusr', 'upper', 'nerve', 'Thorax - nerves'],
  ['upper-limb', 'Inferior_trunk_of_brachial_plexusr', 'upper', 'nerve', 'Thorax - nerves'],
  ['upper-limb', 'Lateral_cord_of_brachial_plexusr', 'upper', 'nerve', 'Thorax - nerves'],
  ['upper-limb', 'Lateral_pectoral_nerver', 'upper', 'nerve', 'Thorax - nerves'],
  ['upper-limb', 'Long_thoracic_nerver', 'upper', 'nerve', 'Thorax - nerves'],
  ['upper-limb', 'Medial_cord_of_brachial_plexusr', 'upper', 'nerve', 'Thorax - nerves'],
  ['upper-limb', 'Medial_pectoral_nerver', 'upper', 'nerve', 'Thorax - nerves'],
  ['upper-limb', 'Middle_trunk_of_brachial_plexusr', 'upper', 'nerve', 'Thorax - nerves'],
  ['upper-limb', 'Posterior_cord_of_brachial_plexusr', 'upper', 'nerve', 'Thorax - nerves'],
  ['upper-limb', 'Posterior_divisions_of_brachial_plexusr', 'upper', 'nerve', 'Thorax - nerves'],
  ['upper-limb', 'Subclavian_nerver', 'upper', 'nerve', 'Thorax - nerves'],
  ['upper-limb', 'Superior_trunk_of_brachial_plexusr', 'upper', 'nerve', 'Thorax - nerves'],
  ['upper-limb', 'T1_rootr', 'upper', 'nerve', 'Thorax - nerves'],
  ['upper-limb', 'Lateral_thoracic_veinr', 'upper', 'vein', 'Thorax - veins'],
  ['upper-limb', 'Subclavian_veinr', 'upper', 'vein', 'Thorax - veins'],
  ['hand', '1st_metacarpal_bone', 'hand', 'bone', 'Bones'],
  ['hand', '2nd_metacarpal_bone', 'hand', 'bone', 'Bones'],
  ['hand', '3rd_metacarpal_bone', 'hand', 'bone', 'Bones'],
  ['hand', '4th_metacarpal_bone', 'hand', 'bone', 'Bones'],
  ['hand', '5th_metacarpal_bone', 'hand', 'bone', 'Bones'],
  ['hand', 'Capitate', 'hand', 'bone', 'Bones'],
  ['hand', 'Distal_phalanx_of_1st_finger', 'hand', 'bone', 'Bones'],
  ['hand', 'Distal_phalanx_of_2d_finger', 'hand', 'bone', 'Bones'],
  ['hand', 'Distal_phalanx_of_3d_finger', 'hand', 'bone', 'Bones'],
  ['hand', 'Distal_phalanx_of_4th_finger', 'hand', 'bone', 'Bones'],
  ['hand', 'Distal_phalanx_of_5th_finger', 'hand', 'bone', 'Bones'],
  ['hand', 'Hamate', 'hand', 'bone', 'Bones'],
  ['hand', 'Lunate_bone', 'hand', 'bone', 'Bones'],
  ['hand', 'Middle_phalanx_of_2d_finger', 'hand', 'bone', 'Bones'],
  ['hand', 'Middle_phalanx_of_3rd_finger', 'hand', 'bone', 'Bones'],
  ['hand', 'Middle_phalanx_of_4th_finger', 'hand', 'bone', 'Bones'],
  ['hand', 'Middle_phalanx_of_5th_finger', 'hand', 'bone', 'Bones'],
  ['hand', 'Pisiform', 'hand', 'bone', 'Bones'],
  ['hand', 'Proximal_phalanx_of_1st_finger', 'hand', 'bone', 'Bones'],
  ['hand', 'Proximal_phalanx_of_2d_finger', 'hand', 'bone', 'Bones'],
  ['hand', 'Proximal_phalanx_of_3rd_finger', 'hand', 'bone', 'Bones'],
  ['hand', 'Proximal_phalanx_of_4th_finger', 'hand', 'bone', 'Bones'],
  ['hand', 'Proximal_phalanx_of_5th_finger', 'hand', 'bone', 'Bones'],
  ['hand', 'Radius', 'hand', 'bone', 'Bones'],
  ['hand', 'Scaphoid', 'hand', 'bone', 'Bones'],
  ['hand', 'Sesamoid_bones', 'hand', 'bone', 'Bones'],
  ['hand', 'Trapezium', 'hand', 'bone', 'Bones'],
  ['hand', 'Trapezoid', 'hand', 'bone', 'Bones'],
  ['hand', 'Triquetrum', 'hand', 'bone', 'Bones'],
  ['hand', 'Ulna', 'hand', 'bone', 'Bones'],
  ['hand', 'Synovial_sheaths_of_fingers', 'hand', 'bursa', 'Bursae'],
  ['hand', '1st_dorsal_interosseus_of_hand', 'hand', 'muscle', 'Muscles'],
  ['hand', '1st_lumbrical_of_hand', 'hand', 'muscle', 'Muscles'],
  ['hand', '1st_palmar_interosseus_of_hand', 'hand', 'muscle', 'Muscles'],
  ['hand', '2nd_dorsal_interosseus_of_hand', 'hand', 'muscle', 'Muscles'],
  ['hand', '2nd_lumbrical_of_hand', 'hand', 'muscle', 'Muscles'],
  ['hand', '2nd_palmar_interosseus_of_hand', 'hand', 'muscle', 'Muscles'],
  ['hand', '3rd_dorsal_interosseus_of_hand', 'hand', 'muscle', 'Muscles'],
  ['hand', '3rd_lumbrical_of_hand', 'hand', 'muscle', 'Muscles'],
  ['hand', '3rd_palmar_interosseus_of_hand', 'hand', 'muscle', 'Muscles'],
  ['hand', '4th_dorsal_interosseus_of_hand', 'hand', 'muscle', 'Muscles'],
  ['hand', '4th_lumbrical_of_hand', 'hand', 'muscle', 'Muscles'],
  ['hand', 'Abductor_digiti_minimi', 'hand', 'muscle', 'Muscles'],
  ['hand', 'Abductor_pollicis_brevis', 'hand', 'muscle', 'Muscles'],
  ['hand', 'Abductor_pollicis_longus', 'hand', 'muscle', 'Muscles'],
  ['hand', 'Abductor_pollicis_longus_tendon_sheath', 'hand', 'tendon', 'Muscles'],
  ['hand', 'Adductor_pollicis', 'hand', 'muscle', 'Muscles'],
  ['hand', 'Aponeurosis_palmaris', 'hand', 'muscle', 'Muscles'],
  ['hand', 'Articular_capsules_of_metacarpophalangeal_joints', 'hand', 'muscle', 'Muscles'],
  ['hand', 'Brachioradialis_muscle', 'hand', 'muscle', 'Muscles'],
  ['hand', 'Common_flexor_tendon_sheath', 'hand', 'tendon', 'Muscles'],
  ['hand', 'Common_tendon_of_extensor_carpi_ulnaris', 'hand', 'tendon', 'Muscles'],
  ['hand', 'Common_tendon_of_flexor_carpi_ulnaris', 'hand', 'tendon', 'Muscles'],
  ['hand', 'Deep_head_of_flexor_pollicis_brevis', 'hand', 'muscle', 'Muscles'],
  ['hand', 'Extensor_carpi_radialis_brevis', 'hand', 'muscle', 'Muscles'],
  ['hand', 'Extensor_carpi_radialis_brevis_tendon_sheath', 'hand', 'tendon', 'Muscles'],
  ['hand', 'Extensor_carpi_radialis_longus', 'hand', 'muscle', 'Muscles'],
  ['hand', 'Extensor_carpi_radialis_longus_tendon_sheath', 'hand', 'tendon', 'Muscles'],
  ['hand', 'Extensor_carpi_ulnaris_tendon_sheath', 'hand', 'tendon', 'Muscles'],
  ['hand', 'Extensor_digiti_minimi', 'hand', 'muscle', 'Muscles'],
  ['hand', 'Extensor_digiti_minimi_tendon_sheath', 'hand', 'tendon', 'Muscles'],
  ['hand', 'Extensor_digitorum', 'hand', 'muscle', 'Muscles'],
  ['hand', 'Extensor_digitorum_-_Extensor_indicis_tendon_sheath', 'hand', 'tendon', 'Muscles'],
  ['hand', 'Extensor_indicis', 'hand', 'muscle', 'Muscles'],
  ['hand', 'Extensor_pollicis_brevis', 'hand', 'muscle', 'Muscles'],
  ['hand', 'Extensor_pollicis_brevis_tendon_sheath', 'hand', 'tendon', 'Muscles'],
  ['hand', 'Extensor_pollicis_longus', 'hand', 'muscle', 'Muscles'],
  ['hand', 'Extensor_pollicis_longus_tendon_sheath', 'hand', 'tendon', 'Muscles'],
  ['hand', 'Flexor_carpi_radialis', 'hand', 'muscle', 'Muscles'],
  ['hand', 'Flexor_carpi_radialis_tendon_sheath', 'hand', 'tendon', 'Muscles'],
  ['hand', 'Flexor_digiti_minimi_brevis_of_hand', 'hand', 'muscle', 'Muscles'],
  ['hand', 'Flexor_digitorum_profundus', 'hand', 'muscle', 'Muscles'],
  ['hand', 'Flexor_digitorum_superficialis_humeral_head', 'hand', 'muscle', 'Muscles'],
  ['hand', 'Flexor_pollicis_longus', 'hand', 'muscle', 'Muscles'],
  ['hand', 'Flexor_pollicis_longus_tendon_sheath', 'hand', 'tendon', 'Muscles'],
  ['hand', 'Opponens_digiti_minimi_muscle_of_hand', 'hand', 'muscle', 'Muscles'],
  ['hand', 'Opponens_pollicis_muscle', 'hand', 'muscle', 'Muscles'],
  ['hand', 'Palmaris_brevis_muscle', 'hand', 'muscle', 'Muscles'],
  ['hand', 'Palmaris_longus_muscle', 'hand', 'muscle', 'Muscles'],
  ['hand', 'Pronator_quadratus', 'hand', 'muscle', 'Muscles'],
  ['hand', 'Superficial_head_of_flexor_pollicis_brevis', 'hand', 'muscle', 'Muscles'],
  ['hand', 'Superficial_transverse_metacarpal_ligament', 'hand', 'muscle', 'Muscles'],
  ['hand', 'Antebrachial_fascia', 'hand', 'fascia', 'Fascia'],
  ['hand', 'Extensor_retinaculum_of_wrist', 'hand', 'fascia', 'Fascia'],
  ['hand', 'Flexor_retinaculum_of_wrist', 'hand', 'fascia', 'Fascia'],
  ['hand', 'Annular_ligament(A1)_of_1st_finger', 'hand', 'ligament', 'Overlays'],
  ['hand', 'Annular_ligament(A2)_of_1st_finger', 'hand', 'ligament', 'Overlays'],
  ['hand', 'Annular_ligaments_of_2nd_finger_A1-A5', 'hand', 'ligament', 'Overlays'],
  ['hand', 'Annular_ligaments_of_3rd_finger_A1-A5', 'hand', 'ligament', 'Overlays'],
  ['hand', 'Annular_ligaments_of_4th_finger_A1-A5', 'hand', 'ligament', 'Overlays'],
  ['hand', 'Annular_ligaments_of_5th_finger_A1-A5', 'hand', 'ligament', 'Overlays'],
  ['hand', 'Collateral_ligaments_of_distal_phalangeal_joints', 'hand', 'ligament', 'Overlays'],
  ['hand', 'Collateral_ligaments_of_interphalangeal_joint', 'hand', 'ligament', 'Overlays'],
  ['hand', 'Collateral_ligaments_of_metacarpal_joints', 'hand', 'ligament', 'Overlays'],
  ['hand', 'Cruciform_ligaments_of_2nd_finger', 'hand', 'ligament', 'Overlays'],
  ['hand', 'Cruciform_ligaments_or_3rd_finger', 'hand', 'ligament', 'Overlays'],
  ['hand', 'Cruciform_ligaments_or_4th_finger', 'hand', 'ligament', 'Overlays'],
  ['hand', 'Cruciform_ligaments_or_5th_finger', 'hand', 'ligament', 'Overlays'],
  ['hand', 'Dorsal_intercarpal_ligaments', 'hand', 'ligament', 'Overlays'],
  ['hand', 'Dorsal_radiocarpal_ligament', 'hand', 'ligament', 'Overlays'],
  ['hand', 'Oblique_head_of_adductor_pollicis', 'hand', 'muscle', 'Overlays'],
  ['hand', 'Oblique_ligament_of_1st_finger', 'hand', 'ligament', 'Overlays'],
  ['hand', 'Palmar_ligaments_of_distal_phalangeal_joints', 'hand', 'ligament', 'Overlays'],
  ['hand', 'Palmar_ligaments_of_interphalangeal_joints', 'hand', 'ligament', 'Overlays'],
  ['hand', 'Palmar_ligaments_of_metacarpophalangeal_joints', 'hand', 'ligament', 'Overlays'],
  ['hand', 'Palmar_radiocarpal_ligament', 'hand', 'ligament', 'Overlays'],
  ['hand', 'Palmar_ulnocarpal_ligament', 'hand', 'ligament', 'Overlays'],
  ['hand', 'Pisometacarpal_ligament', 'hand', 'ligament', 'Overlays'],
  ['hand', 'Radial_collateral_ligament', 'hand', 'ligament', 'Overlays'],
  ['hand', 'Transverse_head_of_adductor_pollicis', 'hand', 'muscle', 'Overlays'],
  ['hand', 'Ulnar_collateral_ligament', 'hand', 'ligament', 'Overlays'],
  ['hand', 'Articular_cartiage_of_ulna_distal_end', 'hand', 'cartilage', 'Cartilages'],
  ['hand', 'Articular_cartilage_of_capitate_bone​', 'hand', 'cartilage', 'Cartilages'],
  ['hand', 'Articular_cartilage_of_hamate_bone​', 'hand', 'cartilage', 'Cartilages'],
  ['hand', 'Articular_cartilage_of_lunate_bone', 'hand', 'cartilage', 'Cartilages'],
  ['hand', 'Articular_cartilage_of_pisiform_bone_​', 'hand', 'cartilage', 'Cartilages'],
  ['hand', 'Articular_cartilage_of_radius_distal_end​', 'hand', 'cartilage', 'Cartilages'],
  ['hand', 'Articular_cartilage_of_scaphoid_bone​', 'hand', 'cartilage', 'Cartilages'],
  ['hand', 'Articular_cartilage_of_trapezium_bone​', 'hand', 'cartilage', 'Cartilages'],
  ['hand', 'Articular_cartilage_of_trapezoid_bone​', 'hand', 'cartilage', 'Cartilages'],
  ['hand', 'Articular_cartilage_of_triquetrum_bone', 'hand', 'cartilage', 'Cartilages'],
  ['hand', 'Articular_cartilages_of_distal_phalanges', 'hand', 'cartilage', 'Cartilages'],
  ['hand', 'Articular_cartilages_of_metacarpal_bones', 'hand', 'cartilage', 'Cartilages'],
  ['hand', 'Articular_cartilages_of_middle_phalanges', 'hand', 'cartilage', 'Cartilages'],
  ['hand', 'Articular_cartilages_of_proximal_phalanges', 'hand', 'cartilage', 'Cartilages'],
  ['hand', 'Triangular_fibro_cartilage_disc', 'hand', 'cartilage', 'Cartilages'],
  ['hand', 'Articular_capsule_of_radiocarpal_joint', 'hand', 'ligament', 'Ligaments'],
  ['hand', 'Articular_capsules_of_distal_interphalangeal_joints', 'hand', 'ligament', 'Ligaments'],
  ['hand', 'Articular_capsules_of_proximal_interphalangeal_joints', 'hand', 'ligament', 'Ligaments'],
  ['hand', 'Capitohamate_interosseus_ligament', 'hand', 'ligament', 'Ligaments'],
  ['hand', 'Deep_transverse_metacarpal_ligament', 'hand', 'ligament', 'Ligaments'],
  ['hand', 'Dorsal_carpometacarpal_ligaments', 'hand', 'ligament', 'Ligaments'],
  ['hand', 'Dorsal_intercarpal_ligaments001', 'hand', 'ligament', 'Ligaments'],
  ['hand', 'Dorsal_metacarpal_ligaments', 'hand', 'ligament', 'Ligaments'],
  ['hand', 'Dorsal_radio-ulnar_ligament', 'hand', 'ligament', 'Ligaments'],
  ['hand', 'Dorsal_scaphotriquetral_ligament', 'hand', 'ligament', 'Ligaments'],
  ['hand', 'Dorsal_ulnocarpal_ligament', 'hand', 'ligament', 'Ligaments'],
  ['hand', 'Extensor_hood_of_2nd_finger', 'hand', 'ligament', 'Ligaments'],
  ['hand', 'Extensor_hood_of_3rd_finger', 'hand', 'ligament', 'Ligaments'],
  ['hand', 'Extensor_hood_of_4th_finger', 'hand', 'ligament', 'Ligaments'],
  ['hand', 'Extensor_hood_of_5th_finger', 'hand', 'ligament', 'Ligaments'],
  ['hand', 'Fibrous_sheath_of_digits_of_hand', 'hand', 'ligament', 'Ligaments'],
  ['hand', 'Fibrous_sheath_of_digits_of_hand_thumb', 'hand', 'ligament', 'Ligaments'],
  ['hand', 'Interosseous_metacarpal_ligaments', 'hand', 'ligament', 'Ligaments'],
  ['hand', 'Intertendinous_connections_of_extensor_digitorum', 'hand', 'ligament', 'Ligaments'],
  ['hand', 'Lateral_band_of_2nd_finger', 'hand', 'ligament', 'Ligaments'],
  ['hand', 'Lateral_band_of_3rd_finger', 'hand', 'ligament', 'Ligaments'],
  ['hand', 'Lateral_band_of_4th_finger', 'hand', 'ligament', 'Ligaments'],
  ['hand', 'Lateral_band_of_5th_finger', 'hand', 'ligament', 'Ligaments'],
  ['hand', 'Lunotriquetral_interosseous_ligament', 'hand', 'ligament', 'Ligaments'],
  ['hand', 'Palmar_capitohamate_ligament', 'hand', 'ligament', 'Ligaments'],
  ['hand', 'Palmar_carpometacarpal_ligaments', 'hand', 'ligament', 'Ligaments'],
  ['hand', 'Palmar_lunotriquetral_ligament', 'hand', 'ligament', 'Ligaments'],
  ['hand', 'Palmar_metacarpal_ligaments', 'hand', 'ligament', 'Ligaments'],
  ['hand', 'Palmar_radio-ulnar_ligament', 'hand', 'ligament', 'Ligaments'],
  ['hand', 'Palmar_scaphotriquetral_ligament', 'hand', 'ligament', 'Ligaments'],
  ['hand', 'Palmar_trapezoideocapitate_ligament', 'hand', 'ligament', 'Ligaments'],
  ['hand', 'Pisohamate_ligament', 'hand', 'ligament', 'Ligaments'],
  ['hand', 'Pisotriquetral_ligament', 'hand', 'ligament', 'Ligaments'],
  ['hand', 'Radiate_carpal_ligament', 'hand', 'ligament', 'Ligaments'],
  ['hand', 'Radioscaphocapitate_ligament', 'hand', 'ligament', 'Ligaments'],
  ['hand', 'Scaphocapitate_ligament', 'hand', 'ligament', 'Ligaments'],
  ['hand', 'Scapholunate_interosseus_ligament', 'hand', 'ligament', 'Ligaments'],
  ['hand', 'Scaphotrapeziotrapezoidal_ligament', 'hand', 'ligament', 'Ligaments'],
  ['hand', 'Transverse_carpal_ligament', 'hand', 'ligament', 'Ligaments'],
  ['hand', 'Trapeziotrapezoidal_interosseous_ligament', 'hand', 'ligament', 'Ligaments'],
  ['hand', 'Trapezoideocapitate_interosseous_ligament', 'hand', 'ligament', 'Ligaments'],
  ['hand', 'Triquetrocapitate_ligament', 'hand', 'ligament', 'Ligaments'],
  ['hand', 'Triquetrohamate_ligament', 'hand', 'ligament', 'Ligaments'],
  ['hand', 'Ulnopisiform_ligament', 'hand', 'ligament', 'Ligaments'],
  ['hand', 'Ulnotriquetral_ligament', 'hand', 'ligament', 'Ligaments'],
  ['hand', 'Basilic_vein', 'hand', 'vein', 'Veins'],
  ['hand', 'Cephalic_vein', 'hand', 'vein', 'Veins'],
  ['hand', 'Deep_venous_palmar_arch', 'hand', 'vein', 'Veins'],
  ['hand', 'Dorsal_digital_veins', 'hand', 'vein', 'Veins'],
  ['hand', 'Dorsal_metatarsal_veins', 'hand', 'vein', 'Veins'],
  ['hand', 'Dorsal_venous_network_of_hand', 'hand', 'vein', 'Veins'],
  ['hand', 'Intercapitular_veins_of_hand', 'hand', 'vein', 'Veins'],
  ['hand', 'Median_antebrachial_vein', 'hand', 'vein', 'Veins'],
  ['hand', 'Palmal_digital_veins', 'hand', 'vein', 'Veins'],
  ['hand', 'Palmar_metacarpal_veins', 'hand', 'vein', 'Veins'],
  ['hand', 'Palmar_venous_network_of_hand', 'hand', 'vein', 'Veins'],
  ['hand', 'Posterior_interosseous_veins', 'hand', 'vein', 'Veins'],
  ['hand', 'Radial_veins', 'hand', 'vein', 'Veins'],
  ['hand', 'Superficial_palmar_venous_arch', 'hand', 'vein', 'Veins'],
  ['hand', 'Superficial_veins_of_upper_limb', 'hand', 'vein', 'Veins'],
  ['hand', 'Ulnar_veins', 'hand', 'vein', 'Veins'],
  ['hand', 'Anterior_interosseous_artery', 'hand', 'artery', 'Arteries'],
  ['hand', 'Common_palmar_digital_arteries', 'hand', 'artery', 'Arteries'],
  ['hand', 'Deep_palmar_arch', 'hand', 'artery', 'Arteries'],
  ['hand', 'Dorsal_carpal_arch', 'hand', 'artery', 'Arteries'],
  ['hand', 'Dorsal_carpal_network', 'hand', 'artery', 'Arteries'],
  ['hand', 'Dorsal_digital_arteries_of_hand', 'hand', 'artery', 'Arteries'],
  ['hand', 'Dorsal_metacarpal_artery', 'hand', 'artery', 'Arteries'],
  ['hand', 'Dorsalis_indicis', 'hand', 'artery', 'Arteries'],
  ['hand', 'Dorsalis_pollicis', 'hand', 'artery', 'Arteries'],
  ['hand', 'Palmar_carpal_branches', 'hand', 'artery', 'Arteries'],
  ['hand', 'Palmar_metacarpal_arteries', 'hand', 'artery', 'Arteries'],
  ['hand', 'Perforating_arteries_of_hand', 'hand', 'artery', 'Arteries'],
  ['hand', 'Posterior_interosseous_artery', 'hand', 'artery', 'Arteries'],
  ['hand', 'Princeps_pollicis_artery', 'hand', 'artery', 'Arteries'],
  ['hand', 'Proper_palmar_digital_arteries', 'hand', 'artery', 'Arteries'],
  ['hand', 'Radial_artery', 'hand', 'artery', 'Arteries'],
  ['hand', 'Radialis_indicis', 'hand', 'artery', 'Arteries'],
  ['hand', 'Superficial_palmar_arch', 'hand', 'artery', 'Arteries'],
  ['hand', 'Ulnar_artery', 'hand', 'artery', 'Arteries'],
  ['hand', 'Ulnar_artery_(dorsal_carpal_br)', 'hand', 'artery', 'Arteries'],
  ['hand', 'Median_nerve', 'hand', 'nerve', 'Nerves'],
  ['hand', 'Median_nerve_Common_palmar_digital_nerve_of_the_thumb', 'hand', 'nerve', 'Nerves'],
  ['hand', 'Median_nerve_Common_palmar_digital_nerves', 'hand', 'nerve', 'Nerves'],
  ['hand', 'Median_nerve_Palmar_br', 'hand', 'nerve', 'Nerves'],
  ['hand', 'Median_nerve_Proper_palmar_digital_nerves', 'hand', 'nerve', 'Nerves'],
  ['hand', 'Median_nerve_Proper_palmar_digital_nerves_of_the_thumb', 'hand', 'nerve', 'Nerves'],
  ['hand', 'Median_nerve_Recurrent_br', 'hand', 'nerve', 'Nerves'],
  ['hand', 'Radial_nerve_Dorsal_digital_nn', 'hand', 'nerve', 'Nerves'],
  ['hand', 'Radial_nerve_Superficial_br', 'hand', 'nerve', 'Nerves'],
  ['hand', 'Ulnar_nerve', 'hand', 'nerve', 'Nerves'],
  ['hand', 'Ulnar_nerve_Communicating_br', 'hand', 'nerve', 'Nerves'],
  ['hand', 'Ulnar_nerve_Deep_br', 'hand', 'nerve', 'Nerves'],
  ['hand', 'Ulnar_nerve_Dorsal_cutaneous_br', 'hand', 'nerve', 'Nerves'],
  ['hand', 'Ulnar_nerve_Palmar_cutaneous_br', 'hand', 'nerve', 'Nerves'],
  ['hand', 'Ulnar_nerve_Superficial_br_Common_palmar_digital_n', 'hand', 'nerve', 'Nerves'],
  ['hand', 'Ulnar_nerve_Superficial_br_Proper_palmar_digital_nn', 'hand', 'nerve', 'Nerves'],
  ['colored-skull-base', 'Ethmoid_Bone', 'skull', 'bone', 'Bones'],
  ['colored-skull-base', 'Frontal_bone', 'skull', 'bone', 'Bones'],
  ['colored-skull-base', 'Inferior_nasal_concha_bones', 'skull', 'bone', 'Bones'],
  ['colored-skull-base', 'Lacrimal_bones', 'skull', 'bone', 'Bones'],
  ['colored-skull-base', 'Lower_canines', 'skull', 'bone', 'Bones'],
  ['colored-skull-base', 'Lower_first_molar_teeth', 'skull', 'bone', 'Bones'],
  ['colored-skull-base', 'Lower_first_premolars', 'skull', 'bone', 'Bones'],
  ['colored-skull-base', 'Lower_lateral_incisors', 'skull', 'bone', 'Bones'],
  ['colored-skull-base', 'Lower_medial_incisors', 'skull', 'bone', 'Bones'],
  ['colored-skull-base', 'Lower_second_molar_teeth', 'skull', 'bone', 'Bones'],
  ['colored-skull-base', 'Lower_second_premolars', 'skull', 'bone', 'Bones'],
  ['colored-skull-base', 'Mandible_bone', 'skull', 'bone', 'Bones'],
  ['colored-skull-base', 'Maxilla_boner', 'skull', 'bone', 'Bones'],
  ['colored-skull-base', 'Nasal_bone', 'skull', 'bone', 'Bones'],
  ['colored-skull-base', 'Occipital_bone', 'skull', 'bone', 'Bones'],
  ['colored-skull-base', 'Palatine_bone', 'skull', 'bone', 'Bones'],
  ['colored-skull-base', 'Parietal_bonel', 'skull', 'bone', 'Bones'],
  ['colored-skull-base', 'Parietal_boner', 'skull', 'bone', 'Bones'],
  ['colored-skull-base', 'Sphenoid_bone', 'skull', 'bone', 'Bones'],
  ['colored-skull-base', 'Temporal_bones', 'skull', 'bone', 'Bones'],
  ['colored-skull-base', 'Upper_canines', 'skull', 'bone', 'Bones'],
  ['colored-skull-base', 'Upper_first_molar_teeth', 'skull', 'bone', 'Bones'],
  ['colored-skull-base', 'Upper_first_premolars', 'skull', 'bone', 'Bones'],
  ['colored-skull-base', 'Upper_lateral_incisors', 'skull', 'bone', 'Bones'],
  ['colored-skull-base', 'Upper_medial_incisors', 'skull', 'bone', 'Bones'],
  ['colored-skull-base', 'Upper_second_molar_teeth', 'skull', 'bone', 'Bones'],
  ['colored-skull-base', 'Upper_second_premolars', 'skull', 'bone', 'Bones'],
  ['colored-skull-base', 'Vomer', 'skull', 'bone', 'Bones'],
  ['colored-skull-base', 'Zygomatic_bones', 'skull', 'bone', 'Bones'],
];

export const COMPOSITE_PIECES: CompositePiece[] = RAW.map(([model, name, region, kind, container, hiddenByDup]) => ({
  model, name, region, kind, container, hiddenByDup,
}));

/** Pares exploded↔base del cráneo para el slider de explosión (por nombre). */
export const EXPLODE_PAIRS: Record<string, string> = {
  'Ethmoid_Bone': 'Ethmoid_Bone',
  'Frontal_bone': 'Frontal_bone',
  'Inferior_nasal_concha_bones': 'Inferior_nasal_concha_bones',
  'Lacrimal_bones': 'Lacrimal_bones',
  'Lower_canines': 'Lower_canines',
  'Lower_first_molar_teeth': 'Lower_first_molar_teeth',
  'Lower_first_premolar': 'Lower_first_premolars',
  'Lower_lateral_incisors': 'Lower_lateral_incisors',
  'Lower_medial_incisors': 'Lower_medial_incisors',
  'Lower_second_molar_teeth': 'Lower_second_molar_teeth',
  'Lower_second_premolars': 'Lower_second_premolars',
  'Mandible_bone': 'Mandible_bone',
  'Nasal_bone': 'Nasal_bone',
  'Occipital_bone': 'Occipital_bone',
  'Palatine_bone': 'Palatine_bone',
  'Parietal_bonel': 'Parietal_bonel',
  'Parietal_boner': 'Parietal_boner',
  'Sphenoid_bone': 'Sphenoid_bone',
  'Temporal_bones': 'Temporal_bones',
  'Upper_canines': 'Upper_canines',
  'Upper_first_molar_teeth': 'Upper_first_molar_teeth',
  'Upper_first_premolars': 'Upper_first_premolars',
  'Upper_lateral_incisors': 'Upper_lateral_incisors',
  'Upper_medial_incisors': 'Upper_medial_incisors',
  'Upper_second_molar_teeth': 'Upper_second_molar_teeth',
  'Upper_second_premolars': 'Upper_second_premolars',
  'Vomer': 'Vomer',
  'Zygomatic_bones': 'Zygomatic_bones',
};

export const COMPOSITE_STATS = {
  total: 1380,
  porRegion: {"axial":36,"upper":572,"skull":58,"lower":484,"hand":230},
  porKind: {"bone":305,"cartilage":174,"ligament":270,"muscle":190,"tendon":46,"fascia":28,"artery":120,"vein":81,"nerve":113,"bursa":48,"other":5},
  ocultasPorDup: {"overview-skeleton":88,"lower-limb":1,"upper-limb":204},
  generado: '2026-08-25T05:05:54.101Z',
};

```

### src/data/fitness/anatomy/types.ts

```ts
// src/data/fitness/anatomy/types.ts
// AG-ANATOM — contratos del grafo anatómico (ficha §3.2B).
// Los datos viven en muscles.ts/tendons.ts/nerves.ts/joints.ts/bones.ts/ligaments.ts
// (generados por rag/anatomy/scripts/build-anatomy-data.mjs desde las fichas JSON
// recuperadas por AG-BIB + inventario GLB). Las consultas viven en anatomyGraph.ts.

/** Regiones corporales para navegación (UI Músculos + visor 3D). */
export type BodyZone =
  | 'head-jaw'
  | 'cervical'
  | 'shoulder'
  | 'chest'
  | 'back'
  | 'arm'
  | 'forearm-hand'
  | 'core'
  | 'spine'
  | 'hip'
  | 'thigh'
  | 'knee'
  | 'lower-leg'
  | 'ankle-foot';

export const BODY_ZONES: BodyZone[] = [
  'head-jaw',
  'cervical',
  'shoulder',
  'chest',
  'back',
  'arm',
  'forearm-hand',
  'core',
  'spine',
  'hip',
  'thigh',
  'knee',
  'lower-leg',
  'ankle-foot',
];

export const BODY_ZONE_LABELS_ES: Record<BodyZone, string> = {
  'head-jaw': 'Cabeza / Mandíbula',
  cervical: 'Cuello / Cervical',
  shoulder: 'Hombro',
  chest: 'Pecho',
  back: 'Espalda alta / Escápula',
  arm: 'Brazo / Codo',
  'forearm-hand': 'Antebrazo / Muñeca / Mano',
  core: 'Core / Abdomen',
  spine: 'Columna',
  hip: 'Cadera / Glúteo',
  thigh: 'Muslo',
  knee: 'Rodilla',
  'lower-leg': 'Pierna (bajo rodilla)',
  'ankle-foot': 'Tobillo / Pie',
};

export type StructureKind = 'muscle' | 'tendon' | 'nerve' | 'joint' | 'bone' | 'ligament';

/**
 * Cita de fuente. Mientras no se verifique contra Gray's/Moore/Norkin (extracción
 * Gemini pendiente), la ficha se registra con `pending: true` (TODO-cita) — regla §0:
 * ningún dato anatómico sin trazabilidad o marcado explícito como placeholder.
 */
export interface SourceRef {
  sourceId: string;
  locator?: string;
  note?: string;
  /** true = dato importado de fichas recuperadas, aún no verificado contra la bíblia citada. */
  pending?: boolean;
}

/** Referencia de sourceRef a la exportación del chat de fichas (AG-BIB, 2026-08-22). */
export const FICHAS_SOURCE: SourceRef = {
  sourceId: 'chat-1787414859303-atlas-anatomico-fichas',
  note: 'Fichas JSON de atlas anatómico recuperadas por AG-BIB (biblioteca/extracciones/). Verificación capítulo/página contra Gray\'s/Moore/MacIntosh PENDIENTE (plan Gemini, rag/anatomy/extracciones/plan-extraccion.md).',
  pending: true,
};

/** Mapping estructura → nombres de nodo/mesh dentro de cada modelo GLB. */
export type ModelMeshes = Record<string, string[]>;

export interface AnatomyStructureBase {
  /** Slug estable: mus-|ten-|ner-|art-|bone-|lig- + kebab(nameEn). */
  id: string;
  /** ID del dataset original (MUS-001, TEN-004, ART-PAT…) para relaciones cruzadas. */
  legacyId?: string;
  kind: StructureKind;
  /** Nombre científico normalizado en inglés (cruza con exerciseDatabase). */
  nameEn: string;
  /** Nombre común en español (principal en UI). */
  nameEs: string;
  synonyms: string[];
  /** Zona principal de navegación. */
  zone: BodyZone;
  /** Zonas secundarias (un isquio es hip Y knee). */
  zones?: BodyZone[];
  modelMeshes: ModelMeshes;
  sourceRefs: SourceRef[];
}

export interface MuscleEntry extends AnatomyStructureBase {
  kind: 'muscle';
  origin: string;
  insertion: string;
  innervation: string;
  action: string[];
  /** Etiquetas de acción normalizadas para filtrar (flexor, extensor, abductor…). */
  actionTags: string[];
  biomechanicalRole: string;
  aesthetics?: string;
  /** Ejercicios citados por la ficha (texto libre ES). */
  trainingExercises: string[];
  /** Errores/ejercicios de riesgo citados por la ficha. */
  riskExercises: string[];
  synergists: string[]; // ids de músculos (mus-*)
  antagonists: string[]; // ids de músculos (mus-*)
  /** true si aparece en la BD de músculos de entrenamiento existente (muscleData). */
  primaryForTraining: boolean;
  wikiEn?: string;
}

export interface TendonEntry extends AnatomyStructureBase {
  kind: 'tendon';
  insertion: string;
  /** Músculos que lo forman (ids mus-*). */
  muscles: string[];
  injuries: string;
  rehab: string[];
  risks: string[];
  wikiEn?: string;
}

export interface NerveEntry extends AnatomyStructureBase {
  kind: 'nerve';
  /** Sitio típico de atrapamiento/compresión (texto de la ficha). */
  entrapmentSite: string;
  innervates: string;
  symptoms: string;
  lesionContext: string;
  rehab: string[];
  risks: string[];
  /** Estructuras relacionadas (ids legados ART-/MUS- resueltos a slugs). */
  relatedStructures: string[];
  wikiEn?: string;
}

/**
 * Rango de movimiento de UN movimiento/eje articular, verificado contra fuente
 * (Levangie & Norkin 6ª ed — pendiente #4 del STATUS, ciclo 4). La capa de
 * texto del PDF no conserva páginas estables: el locator cita capítulo (y
 * sección cuando aplica), convención ya usada por los chunks `njs6-*` del RAG.
 */
export interface JointRomEntry {
  /** Movimiento (p.ej. "Flexión", "Rotación externa", "Apertura bucal"). */
  motion: string;
  /** Valor con unidad tal cual la fuente (p.ej. "100°–120°", "40–50 mm"). */
  value: string;
  /** Condición de medición (p.ej. "con rodilla flexionada", "codo a 90°"). */
  condition?: string;
  sourceRefs: SourceRef[];
}

export interface JointEntry extends AnatomyStructureBase {
  kind: 'joint';
  jointType: string;
  bones: string;
  movements: string;
  /** ROM numérico por eje: pendiente de verificación Norkin/Levangie (TODO-cita). */
  romNote?: string;
  /** ROM verificado por movimiento con cita (jointRom.ts; ciclo 4). */
  rom?: JointRomEntry[];
  stabilizers: string;
  lesions: string;
  rehab: string[];
  /** Movimientos/ejercicios de riesgo bajo carga (ficha). */
  riskyUnderLoad: string[];
  relatedStructures: string[];
  wikiEn?: string;
}

export interface BoneEntry extends AnatomyStructureBase {
  kind: 'bone';
  /** Nota funcional breve (relevancia para entrenamiento). */
  note?: string;
}

export interface LigamentEntry extends AnatomyStructureBase {
  kind: 'ligament';
  /** Articulación a la que estabiliza (id art-*). */
  jointId?: string;
  note?: string;
}

export type AnatomyStructure =
  | MuscleEntry
  | TendonEntry
  | NerveEntry
  | JointEntry
  | BoneEntry
  | LigamentEntry;

export interface AnatomyModelInfo {
  key: string;
  file: string;
  label: string;
  /** MB según inventario GLB. */
  sizeMb: number;
  meshCount: number;
  /** El modelo trae piezas ya desplazadas (explosionadas). */
  exploded?: boolean;
  description: string;
}

```

## TESTS


### src/components/fitness/anatomy/__tests__/composite.test.ts

```ts
﻿// src/components/fitness/anatomy/__tests__/composite.test.ts
// AG-ANATOM — lógica pura del modelo compuesto y la selección jerárquica.

import { describe, it, expect } from 'vitest';
import {
  DEFAULT_LAYERS,
  FOCUS_LABELS,
  VERTEBRAE_PIECES,
  buildSubgroups,
  focusFromLegacyModel,
  phaseLabel,
  pieceKey,
  pieceVisible,
  resolveClick,
  unitPieceKeys,
  highlightColor,
  layerDef,
  type Aabb,
  type CompositeKind,
  type SelectionPath,
} from '../composite';
import { COMPOSITE_PIECES, COMPOSITE_STATS, EXPLODE_PAIRS } from '../../../../data/fitness/anatomy/compositePlan';

const piece = (over: Partial<Parameters<typeof pieceVisible>[0]>) => ({
  model: 'overview-skeleton',
  name: 'X',
  region: 'axial' as const,
  kind: 'bone' as const,
  container: 'Bones',
  ...over,
});

const NO_BOX: Aabb = { min: [-10, -10, -10], max: [10, 10, 10] };

describe('pieceVisible', () => {
  const base = () => ({
    focus: 'full' as const,
    layers: new Set<CompositeKind>(DEFAULT_LAYERS),
    hidden: new Set<string>(),
    isolation: null,
  });

  it('vista completa + capa activa + sin dedup → visible', () => {
    expect(pieceVisible(piece({}), base(), NO_BOX)).toBe(true);
  });

  it('capa inactiva → oculto (p.ej. mostrar solo músculo y tendón)', () => {
    expect(pieceVisible(piece({ kind: 'artery' }), base(), NO_BOX)).toBe(false);
    const st = { ...base(), layers: new Set<CompositeKind>(['muscle', 'tendon'] as CompositeKind[]) };
    expect(pieceVisible(piece({ kind: 'muscle' }), st, NO_BOX)).toBe(true);
    expect(pieceVisible(piece({ kind: 'bone' }), st, NO_BOX)).toBe(false);
  });

  it('focus por región filtra las demás regiones', () => {
    const upper = { ...base(), focus: 'upper' as const };
    expect(pieceVisible(piece({ region: 'upper' }), upper, NO_BOX)).toBe(true);
    expect(pieceVisible(piece({ region: 'lower' }), upper, NO_BOX)).toBe(false);
  });

  it('focus vértebras: solo las 3 piezas del modelo vertebrae', () => {
    const vert = { ...base(), focus: 'vertebrae' as const };
    expect(pieceVisible(piece({ name: 'Cervical vertebra (C4)', region: 'upper' }), vert, NO_BOX)).toBe(true);
    expect(pieceVisible(piece({ name: 'Femurr', region: 'lower' }), vert, NO_BOX)).toBe(false);
    expect(VERTEBRAE_PIECES.size).toBe(3);
  });

  it('hiddenByDup (representada por especialista) → oculta por defecto', () => {
    expect(pieceVisible(piece({ hiddenByDup: 'lower-limb:Femurr' }), base(), NO_BOX)).toBe(false);
  });

  it('oculta manual', () => {
    const key = pieceKey('overview-skeleton', 'X');
    expect(pieceVisible(piece({}), { ...base(), hidden: new Set([key]) }, NO_BOX)).toBe(false);
  });

  it('aislamiento: solo las claves explícitas de la unidad son visibles', () => {
    const st = {
      ...base(),
      isolation: { keys: new Set([pieceKey('upper-limb', 'Triceps')]), label: 'Triceps' },
    };
    expect(pieceVisible(piece({ kind: 'muscle', model: 'upper-limb', name: 'Triceps' }), st)).toBe(true);
    expect(pieceVisible(piece({ kind: 'muscle', model: 'lower-limb', name: 'Soleus' }), st)).toBe(false);
    // kind NO incluido → no visible aunque la clave esté
    expect(pieceVisible(piece({ kind: 'bone' }), { ...base(), isolation: { keys: new Set(['m:bone-x']), label: 'x' } })).toBe(false);
  });
});

describe('buildSubgroups — subconjuntos por nombre', () => {
  it('triceps: 3 cabezas → 3 subconjuntos hoja', () => {
    const g = buildSubgroups('Triceps brachii', [
      ['m:Long head of triceps brachii', 'Long head of triceps brachii'],
      ['m:Lateral head of triceps brachii', 'Lateral head of triceps brachii'],
      ['m:Medial head of triceps brachii', 'Medial head of triceps brachii'],
    ]);
    expect(g.size).toBe(3);
    for (const list of g.values()) expect(list.length).toBe(1);
  });

  it('costillas: cada costilla su subconjunto', () => {
    const g = buildSubgroups('Rib', [['m:Rib (1st)', 'Rib (1st)'], ['m:Rib (2nd)', 'Rib (2nd)'], ['m:Rib (3rd)', 'Rib (3rd)']]);
    expect(g.size).toBe(3);
  });
});

describe('resolveClick — máquina de fases', () => {
  // triceps: 3 grupos hoja (1 pieza cada uno)
  const S = 'mus-triceps';
  const K = (n: string) => pieceKey('upper-limb', n);
  const tricepsGroups = buildSubgroups('Triceps brachii', [
    ['m:Long head of triceps brachii', 'Long head of triceps brachii'],
    ['m:Lateral head of triceps brachii', 'Lateral head of triceps brachii'],
    ['m:Medial head of triceps brachii', 'Medial head of triceps brachii'],
  ]);
  const long = K('Long head of triceps brachii');
  const lat = K('Lateral head of triceps brachii');
  const tricepsKeys = new Map([...tricepsGroups.entries()].map(([g, list]) => [g, list.map((n) => K(n))]));
  const longKey = 'long head';

  // caso multi-pieza: un subconjunto con 2 piezas (3 niveles reales)
  const multiGroups = new Map<string, string[]>([
    ['head', [K('a1'), K('a2')]],
    ['medial', [K('m')]],
  ]);

  it('click en otra estructura → conjunto (fase 1)', () => {
    const next = resolveClick({ current: null, clickedPieceKey: long, clickedStructureId: S, groups: tricepsKeys, clickedGroupKey: longKey });
    expect(next).toEqual({ structureId: S, groupKey: null, pieceKey: null });
  });

  it('grupo hoja de 1 pieza: 2º click selecciona la pieza directamente', () => {
    const next = resolveClick({ current: { structureId: S, groupKey: null, pieceKey: null }, clickedPieceKey: long, clickedStructureId: S, groups: tricepsKeys, clickedGroupKey: longKey });
    expect(next).toEqual({ structureId: S, groupKey: null, pieceKey: long });
  });

  it('subconjunto multi-pieza: 2º click baja al subconjunto', () => {
    const next = resolveClick({ current: { structureId: S, groupKey: null, pieceKey: null }, clickedPieceKey: K('a1'), clickedStructureId: S, groups: multiGroups, clickedGroupKey: 'head' });
    expect(next).toEqual({ structureId: S, groupKey: 'head', pieceKey: null });
  });

  it('3º click en pieza del subconjunto → pieza individual', () => {
    const next = resolveClick({ current: { structureId: S, groupKey: 'head', pieceKey: null }, clickedPieceKey: K('a1'), clickedStructureId: S, groups: multiGroups, clickedGroupKey: 'head' });
    expect(next).toEqual({ structureId: S, groupKey: 'head', pieceKey: K('a1') });
  });

  it('click en otra pieza del mismo subconjunto cambia la pieza', () => {
    const next = resolveClick({ current: { structureId: S, groupKey: 'head', pieceKey: K('a1') }, clickedPieceKey: K('a2'), clickedStructureId: S, groups: multiGroups, clickedGroupKey: 'head' });
    expect(next).toEqual({ structureId: S, groupKey: 'head', pieceKey: K('a2') });
  });

  it('click en la misma pieza → mantiene la selección (subir vía breadcrumb)', () => {
    const next = resolveClick({ current: { structureId: S, groupKey: 'head', pieceKey: K('a1') }, clickedPieceKey: K('a1'), clickedStructureId: S, groups: multiGroups, clickedGroupKey: 'head' });
    expect(next).toEqual({ structureId: S, groupKey: 'head', pieceKey: K('a1') });
  });

  it('click en subconjunto hermano cambia de subconjunto', () => {
    const next = resolveClick({ current: { structureId: S, groupKey: 'head', pieceKey: K('a1') }, clickedPieceKey: K('m'), clickedStructureId: S, groups: multiGroups, clickedGroupKey: 'medial' });
    expect(next.pieceKey).toBe(K('m'));
    expect(next.groupKey).toBe('medial');
  });
});

describe('unitPieceKeys', () => {
  it('devuelve las piezas del nivel del path', () => {
    const groups = new Map([['long head', ['m:a', 'm:b']], ['other', ['m:c']]]);
    const p1: SelectionPath = { structureId: 's', groupKey: 'long head', pieceKey: null };
    expect(unitPieceKeys(p1, groups)).toEqual(['m:a', 'm:b']);
    const p2: SelectionPath = { structureId: 's', groupKey: 'long head', pieceKey: 'm:a' };
    expect(unitPieceKeys(p2, groups)).toEqual(['m:a']);
    const p3: SelectionPath = { structureId: 's', groupKey: null, pieceKey: null };
    expect(unitPieceKeys(p3, groups)).toEqual(['m:a', 'm:b', 'm:c']);
  });
});

describe('focus y compatibilidad de URLs', () => {
  it('focusFromLegacyModel mapea los modelos antiguos', () => {
    expect(focusFromLegacyModel('colored-skull-base')).toBe('skull');
    expect(focusFromLegacyModel('hand')).toBe('hand');
    expect(focusFromLegacyModel('upper-limb')).toBe('upper');
    expect(focusFromLegacyModel('lower-limb')).toBe('lower');
    expect(focusFromLegacyModel('vertebrae')).toBe('vertebrae');
    expect(focusFromLegacyModel('overview-skeleton')).toBe('full');
    expect(focusFromLegacyModel('no-existe')).toBeNull();
  });

  it('los 6 focus tienen etiqueta', () => {
    expect(Object.keys(FOCUS_LABELS).length).toBe(6);
  });
});

describe('plan de compuesto (datos generados)', () => {
  it('total y regiones cuadran con el análisis', () => {
    expect(COMPOSITE_PIECES.length).toBe(COMPOSITE_STATS.total);
    expect(COMPOSITE_PIECES.length).toBe(1380);
    const sum = Object.values(COMPOSITE_STATS.porRegion).reduce((a, b) => a + b, 0);
    expect(sum).toBe(COMPOSITE_STATS.total);
  });

  it('cráneo: TODAS las piezas del skeleton en región skull están ocultas por dedup (fix cráneo duplicado)', () => {
    const sk = COMPOSITE_PIECES.filter((p) => p.model === 'overview-skeleton' && p.region === 'skull');
    expect(sk.length).toBeGreaterThanOrEqual(25);
    for (const p of sk) expect(p.hiddenByDup, p.name).toBeTruthy();
  });

  it('todas las piezas tienen modelo/kind/región válidos y claves únicas', () => {
    const models = new Set(['overview-skeleton', 'lower-limb', 'upper-limb', 'hand', 'colored-skull-base']);
    const regions = new Set(['axial', 'skull', 'upper', 'lower', 'hand']);
    const keys = new Set<string>();
    for (const p of COMPOSITE_PIECES) {
      expect(models.has(p.model), p.name).toBe(true);
      expect(regions.has(p.region), p.name).toBe(true);
      keys.add(pieceKey(p.model, p.name));
    }
    expect(keys.size).toBe(COMPOSITE_PIECES.length);
  });

  it('explosión: los pares apuntan a piezas base existentes en el plan', () => {
    const keys = new Set(COMPOSITE_PIECES.map((p) => pieceKey(p.model, p.name)));
    const pairs = Object.entries(EXPLODE_PAIRS);
    expect(pairs.length).toBeGreaterThanOrEqual(28);
    for (const [, base] of pairs) expect(keys.has(pieceKey('colored-skull-base', base)), base).toBe(true);
  });

  it('capas por defecto y colores definidos', () => {
    expect(DEFAULT_LAYERS.length).toBe(5);
    for (const k of DEFAULT_LAYERS) expect(layerDef(k).label.length).toBeGreaterThan(0);
    expect(highlightColor('muscle')).not.toBe(layerDef('muscle').color);
  });
});

describe('phaseLabel', () => {
  it('limpia underscores y laterales', () => {
    expect(phaseLabel('Long head of triceps brachii')).toBe('Long head of triceps brachii');
    expect(phaseLabel('Adductor_minimus_overlay.r')).toBe('Adductor minimus overlay');
  });
});

```

### src/components/fitness/anatomy/__tests__/viewerLogic.test.ts

```ts
// src/components/fitness/anatomy/__tests__/viewerLogic.test.ts
// AG-ANATOM ciclo 4 — tests de la lógica pura del visor (bugs de
// aislamiento/capas/click reportados por el usuario y corregidos aquí).

import { describe, it, expect } from 'vitest';
import {
  prettyMeshName,
  buildOwnerIndex,
  resolveSelectionNames,
  decideMeshVisibility,
  type ViewerSelection,
} from '../viewerLogic';

describe('prettyMeshName', () => {
  it('elimina zero-width chars del export de Blender', () => {
    expect(prettyMeshName('Art_cart_of_talusr_\u200b')).toBe('Art cart of talusr');
  });

  it('sustituye underscores por espacios y recorta', () => {
    expect(prettyMeshName('Flexor_retinaculum_of_wrist')).toBe('Flexor retinaculum of wrist');
  });

  it('no toca nombres limpios', () => {
    expect(prettyMeshName('Femurr')).toBe('Femurr');
  });
});

describe('buildOwnerIndex', () => {
  const aliasToPrimary = new Map([['Flexor_retinaculum_of_wrist', 'Flexor_retinaculum_of_wristr']]);

  it('resuelve el dueño por nombre de NODO aunque el mapping use alias de geometría', () => {
    const idx = buildOwnerIndex(
      [{ id: 'lig-flexor-retinaculum', modelMeshes: { 'upper-limb': ['Flexor_retinaculum_of_wrist'] } }],
      'upper-limb',
      aliasToPrimary,
    );
    // el click devuelve el nombre de nodo; el índice debe contenerlo
    expect(idx.get('Flexor_retinaculum_of_wristr')).toBe('lig-flexor-retinaculum');
    expect(idx.get('Flexor_retinaculum_of_wrist')).toBe('lig-flexor-retinaculum');
  });

  it('el dueño es la estructura más específica (hueso 1 pieza > articulación 3 piezas)', () => {
    const idx = buildOwnerIndex(
      [
        { id: 'art-rodilla', modelMeshes: { 'lower-limb': ['Femurr', 'Patellar', 'Tibiar'] } },
        { id: 'bone-femur', modelMeshes: { 'lower-limb': ['Femurr'] } },
      ],
      'lower-limb',
    );
    expect(idx.get('Femurr')).toBe('bone-femur');
    expect(idx.get('Tibiar')).toBe('art-rodilla');
  });

  it('a igual especificidad gana el orden del grafo (primero listado)', () => {
    const idx = buildOwnerIndex(
      [
        { id: 'mus-a', modelMeshes: { m: ['Pieza'] } },
        { id: 'ten-b', modelMeshes: { m: ['Pieza'] } },
      ],
      'm',
    );
    expect(idx.get('Pieza')).toBe('mus-a');
  });
});

describe('resolveSelectionNames', () => {
  const structures = new Map<string, { modelMeshes: Record<string, string[]> }>([
    ['art-muñeca', { modelMeshes: { 'upper-limb': ['Radiusr', 'Ulnar'] } }],
  ]);
  const getStructure = (id: string) => structures.get(id);

  it('estructura → nombres de mapping del modelo pedido', () => {
    const sel: ViewerSelection = { type: 'structure', id: 'art-muñeca' };
    expect(resolveSelectionNames(sel, 'upper-limb', getStructure)).toEqual(['Radiusr', 'Ulnar']);
  });

  it('normaliza alias de geometría a nombre de nodo', () => {
    const structures2 = new Map([
      ['lig-fr', { modelMeshes: { 'upper-limb': ['Flexor_retinaculum_of_wrist'] } }],
    ]);
    const names = resolveSelectionNames(
      { type: 'structure', id: 'lig-fr' },
      'upper-limb',
      (id) => structures2.get(id),
      new Map([['Flexor_retinaculum_of_wrist', 'Flexor_retinaculum_of_wristr']]),
    );
    expect(names).toEqual(['Flexor_retinaculum_of_wristr']);
  });

  it('pieza suelta → [nombre]; sin selección → []', () => {
    expect(resolveSelectionNames({ type: 'mesh', name: 'X' }, 'm', getStructure)).toEqual(['X']);
    expect(resolveSelectionNames(null, 'm', getStructure)).toEqual([]);
  });

  it('estructura inexistente o sin mapping en este modelo → []', () => {
    expect(resolveSelectionNames({ type: 'structure', id: 'no-existe' }, 'm', getStructure)).toEqual([]);
    expect(resolveSelectionNames({ type: 'structure', id: 'art-muñeca' }, 'lower-limb', getStructure)).toEqual([]);
  });
});

describe('decideMeshVisibility', () => {
  it('aislamiento: solo los nombres aislados son visibles (aunque el kind encaje en el filtro)', () => {
    const iso = new Set(['Femurr']);
    expect(decideMeshVisibility({ name: 'Femurr', kind: 'bone', isoNames: iso, filterKinds: null })).toBe(true);
    expect(decideMeshVisibility({ name: 'Tibiar', kind: 'bone', isoNames: iso, filterKinds: null })).toBe(false);
  });

  it('filtro de capa por kind', () => {
    expect(decideMeshVisibility({ name: 'Bicepsr', kind: 'muscle', isoNames: null, filterKinds: ['muscle'] })).toBe(true);
    expect(decideMeshVisibility({ name: 'Femurr', kind: 'bone', isoNames: null, filterKinds: ['muscle'] })).toBe(false);
  });

  it('vista completa: solo oculta aux', () => {
    expect(decideMeshVisibility({ name: 'Femurr', kind: 'bone', isoNames: null, filterKinds: null })).toBe(true);
    expect(decideMeshVisibility({ name: 'Circle_007', kind: 'aux', isoNames: null, filterKinds: null })).toBe(false);
    expect(decideMeshVisibility({ name: 'Bursae', kind: 'other', isoNames: null, filterKinds: null })).toBe(true);
  });
});

```

### src/components/fitness/anatomy/__tests__/jointRom.test.ts

```ts
[ARCHIVO NO ENCONTRADO: src/components/fitness/anatomy/__tests__/jointRom.test.ts]
```

## STATUS-ANATOMIA.md

# STATUS — AG-ANATOM (rama `agent/anatomia`)

> Ciclo 7 COMPLETO (2026-08-24): **REDESIGN UX + FIXES DE SELECCIÓN +
> COBERTURA 3D** (mandato usuario tras validar el ciclo 6).
> - FIX selección: 1er click SIEMPRE selecciona el CONJUNTO (antes saltaba a
>   la pieza por grupos hoja de 1) — clicks siguientes descienden: subconjunto
>   → pieza; click en la misma pieza sube un nivel.
> - FIX pantalla en negro al aislar: el caché de AABB por pieza nunca se
>   poblaba (calculado perezosamente que nunca llegaba a ejecutarse) → todas
>   las piezas fallaban el test de aislamiento. FIX: AABB por pieza en carga.
> - FIX cráneo duplicado: dedup por REGIÓN skull completa usando las ZONAS
>   DEL GRAFO (bones.ts → zone head-jaw → skull; regex corregida: backticks y
>   overview-skeleton en cualquier posición de modelMeshes) + fallback
>   tolerante a typos del export (r pegada, plural, teeth/tooth). El cráneo
>   coloreado es el único visible en vista Completo.
> - FIX highlight residual: estado PRÍSTINO de materiales guardado en carga
>   (__origColor/__origEmissive/__origEmissiveIntensity); hover y highlight
>   restauran desde prístino; el hover no pisa la selección.
> - FIX clasificación de capas: fascias y retináculos por NOMBRE (Brachial_
>   fasciar estaba en ligamentos — el contenedor "capsules, ligaments,
>   fasciae" los mezclaba); vainas tendinosas (vaginae tendinum) → tendón;
>   zona orbicularis y fibrous sheaths → ligamento. Fascia: 17→28.
> - **Rediseño UX**: layout 2 columnas (visor izquierda + panel derecho con
>   pestañas Estructuras/Ficha y scroll propio — la ficha ya no obliga a
>   scrollear la página); lista con click=seleccionar+enfocar y doble
>   click=+aislar; Ocultar/Mostrar TOGGLE en sitio (ficha + barra de estado);
>   controles "Capas y filtros" colapsables con resumen; barra de estado bajo
>   el visor con breadcrumb jerárquico y acciones rápidas.
> - **Reporte cobertura 3D** (cobertura-3d.md/json): 211/267 mapeadas, 56 sin
>   equivalente directo con motivo (sin GLB de torso/cabeza/cuello) y
>   candidato parcial por nombre (pieza que podría contenerla).
> 254 tests verdes (31 de composite), astro check 0/0.
> NOTA verificación: el dblclick no se sintetiza vía CDP headless — la
> interacción de doble click requiere validación en navegador real.
> Sin push; commits locales.

> Ciclo 6 COMPLETO (2026-08-24): **SELECCIÓN JERÁRQUICA + FILTROS DE
> SELECCIÓN + AUDIT UX** (mandato usuario tras validar el ciclo 5).
> - Selección por fases N niveles: conjunto → subconjunto(s) → pieza, con
>   breadcrumb navegable; los subconjuntos se derivan del nombre de pieza
>   (tokens menos los de la estructura) — p.ej. tríceps → cada cabeza.
> - Doble click = aislar la unidad actual; doble click fuera = desaislar.
> - FILTROS DE SELECCIÓN (fila propia): qué tipos son clickeables/aislables —
>   kinds no seleccionables son transparentes al ray (click-through).
> - Aislamiento ESPACIAL: incluye las piezas de los kinds seleccionados cuyo
>   AABB cruza la caja de la unidad (p.ej. aislar rodilla con
>   huesos+ligamentos+cartílagos las incluye todas).
> - FIX cráneo duplicado: dedup por REGIÓN skull completa (zonas del grafo,
>   no solo AABB) — el cráneo coloreado es el único visible; también
>   clasificación fina del contenedor Overlays (ligamentos/bursas/tendones
>   superficiales, NO piel — no existe malla de piel en los GLB).
> - FIX highlight residual: estado PRÍSTINO de materiales guardado en carga
>   (el hover mutaba antes del highlight y el "original" guardado era el
>   hover → restauración sucia). Hover y highlight restauran desde prístino.
> - FIX click-through: piezas hiddenByDup ya no son raycasteables (antes
>   interceptaban el click y el walk las rechazaba → "no pasa nada").
> 254 tests verdes (31 de composite), astro check 0/0, verificado headless.

> Ciclo 5 COMPLETO (2026-08-24): **MODELO COMPUESTO + EXPERIENCIA DE PRIMERA**.
> Mandato usuario: merge de los 5 GLB en un solo visor con focus por región,
> capas multi-seleccionables (12 tipos), selección por fases (estructura →
> cabeza), aislamiento múltiple, ocultar/desocultar, color por tipo, árbol
> categorías/subcategorías, ficha rica y slider de explosión del cráneo.
> Ejecutado con análisis geométrico previo (AABB mundial: Δ=0 en todas las
> piezas comunes → superposición directa). 250 tests verdes, astro check 0/0,
> verificado headless end-to-end con capturas. Sin push; commits locales.

> Ciclo 4 COMPLETO (2026-08-24): CORRECCIÓN DE BUGS CRÍTICOS DEL VISOR
> (reportados por validación visual del usuario tras el merge del ciclo 3) +
> pendiente #4 (ROM articular con cita). El ciclo 3 dejó el mapping al 0%
> huérfanos pero el visor seguía roto en selección/aislamiento/capas: las
> causas raíz eran más profundas (doble indexado nodo+geometría, materiales
> compartidos del GLB y contenedores padre). 229 tests verdes, astro check 0/0.
> Sin push; commits locales.

> Ciclo 3 COMPLETO (2026-08-23): MAPPING REAL GLB ↔ anatomyGraph. El ciclo 2
> dejaba selección/aislamiento/filtros rotos: solo el 11% de los 722 mapeos
> coincidía con los GLB reales (4 modelos al 0%). Ciclo 3: **0 mapeos huérfanos
> verificados por test**, catálogo por tipo para el modelo completo y filtros
> operativos. Sin push; commits locales.

## Territorio

`src/components/fitness/anatomy/**`, `src/data/fitness/anatomy/**`,
`src/pages/app/fitness/anatomy.astro`, `src/pages/app/fitness/library/muscles.astro`,
`rag/anatomy/**`, `public/models/anatomy/**`, `docs` propios. NO tocado:
resto de fitness (TodayRoutineStack y restaurados de main), nutrition,
ui/tokens/nav (ticket AG-CORE).

## Ciclo 6 — selección jerárquica, filtros de selección, audit UX

**Modelo de interacción (mandato usuario)**:
- **Click = profundizar**: conjunto → subconjunto → pieza (N niveles; los
  subconjuntos derivan de `buildSubgroups`: tokens del nombre de pieza menos
  los de la estructura). Click en la misma pieza = subir un nivel.
- **Doble click = aislar** la unidad del nivel actual; **doble click fuera =
  desaislar**. El aislamiento NIDIFICA: aislar conjunto → doble click en
  subconjunto → re-aisla el subconjunto.
- **Filtros de selección** (fila "Selección", chips discontinuos): qué kinds
  son clickeables. Kinds no seleccionables son transparentes al ray.
  **El aislamiento es ESPACIAL**: caja de la unidad (AABB +12%) ∩ piezas de
  los kinds seleccionados — aislar la rodilla con huesos+ligamentos+cartílagos
  las incluye todas; con solo músculos, solo las que cruzan la caja.

**Fixes**:
- **Cráneo duplicado**: las piezas de cráneo del skeleton quedaban visibles
  (la asignación de región por nombre fallaba con los typos del export:
  "Temporal_boner" vs "Temporal_bones"). FIX: región del skeleton asignada
  por ZONA DEL GRAFO (bones.ts → zone → región; regex corregida: backticks y
  overview-skeleton en cualquier posición de modelMeshes) + fallback tolerante
  (r pegada, plural, teeth/tooth) + dedup por REGIÓN skull completa.
- **Highlight residual**: el hover mutaba emissive ANTES del highlight; el
  "original" guardado era el hover → restauración sucia. FIX: estado prístino
  por material en carga (__origColor/__origEmissive/__origEmissiveIntensity);
  hover y highlight restauran desde prístino; el hover no pisa la selección.
- **Click-through de piezas dedup**: las hiddenByDup interceptaban el ray y el
  walk las rechazaba → clicks sin efecto sobre zonas con doble copia. FIX:
  `mesh.raycast = () => {}` para ocultas por dedup.

**Audit UX aplicado**: filas de control separadas y etiquetadas (Focus /
Capas visibles / Selección) con estilos distintos (relleno=visibilidad,
discontinuo=seleccionable); breadcrumb jerárquico clickeable (Nielsen:
libertad del usuario + visibilidad del estado); hints contextuales por nivel
("Conjunto de N piezas — click… doble click para aislar"); badges de estado
siempre visibles; desocultar todo con un botón; Esc como salida universal;
etiquetas de grupo legibles ("(estructura)" → nombre de la estructura).

## Ciclo 5 — modelo compuesto + experiencia de primera

**Análisis previo** (`rag/anatomy/scripts/analyze-merge.mjs` → `merge-analysis.json/.md`):
parsea los 8 GLB, compone TRS mundo y compara. Hallazgos clave:
- **Δtraducción = 0 en TODAS las piezas comunes de TODOS los pares** → los GLB
  comparten espacio mundial: el merge es superposición directa, sin transforms.
- Los nombres difieren entre modelos (typos del export "boner"/"bones",
  plurales) → el dedup es **geométrico por AABB mundial** (±1 cm), no por nombre.
- El exploded-skull NO es la misma malla (vértices distintos, desplazamiento
  horneado en vértices) → el slider de explosión es cross-fade con alineamiento
  por centroide (no lerp de transforms). Pares por nombre tolerante a plural: 28/29 + 1.

**Datos generados** (`src/data/fitness/anatomy/compositePlan.ts`, generado —
1380 piezas con model/name RUNTIME (sanitizado+uniquificado como GLTFLoader),
región (hand > skull > lower > upper > axial), kind por contenedor GLB (12
tipos: bone 305, ligament 277, muscle 191, nerve 113, artery 120, vein 81,
cartilage 174, bursa 51, tendon 44, fascia 17…), hiddenByDup (63 skeleton +
204 upper representadas por especialistas geométricamente idénticas)).

**Sistema nuevo** (`composite.ts` lógica pura +21 tests; `AnatomyViewer.tsx` reescrito):
- **Carga progresiva** de 5 GLB con barra (esqueleto base → lower → upper →
  hand → cráneo). Loader PROPIO del compuesto: gltfCache comparte escenas con
  las miniaturas y el compuesto se apropia de las mallas — mutarlas las rompería.
- **Focus**: Completo / Cráneo / Mano / Miembro superior / inferior / Vértebras
  aisladas, con auto-encuadre de cámara sobre la región visible. Deep-link
  legacy `?model=` mapeado a focus (compatibilidad con URLs de Músculos).
- **Capas multi-seleccionables**: 12 chips con color de identidad + contador de
  piezas + Todas/Ninguna + toggle "Colorear por tipo" (tinte 55% sobre el color
  original; el highlight usa el color del tipo, no un cian uniforme).
- **Selección por fases**: 1er click = estructura entera (hint "2º click sobre
  una cabeza…" si es multi-pieza); 2º click = solo esa cabeza (fase 2); click en
  la misma pieza = volver a la estructura. Dueño por especificidad
  (hueso > articulación que lo mapea).
- **Aislamiento MÚLTIPLE** (acumulable, chips + Esc) y **OCULTAR/DESOCULTAR**
  (contador + botón desocultar todo).
- **Panel árbol**: Categoría (tipo, con color) → Subcategoría (zona del grafo
  en español) → estructuras, con buscador.
- **Ficha rica**: TODOS los campos de la BD por tipo (músculo: anatomía,
  función, entrenamiento, relaciones; articulación: ROM citado + clínica;
  tendón/nervio/ligamento/hueso) + sinónimos, zonas, wiki y trazabilidad
  (fuente · locator · ✓verificado/pendiente).
- **Cráneo**: toggle Coloreado/Vista general (carga diferida) + slider de
  explosión 0-100% (cross-fade + alineamiento por centroide por pieza).

**Bugs cazados durante la ejecución** (todos verificados por stack headless):
1. Reparentar mallas DENTRO de `traverse` (`group.add()` hace
   `parent.remove()`) muta el array iterado → crash "reading 'traverse'".
   FIX: recolectar primero, re-parentar después.
2. Nombres del plan crudos vs runtime sanitizados → plan vacío en runtime.
   FIX: replicar sanitizeNodeName+createUniqueName en el generador (ciclo 3).
3. Apóstrofes sin escapar en el TS generado ("Boyd's veins").
4. Round-trip PowerShell (Get-Content|Set-Content) corrompió el encoding UTF-8
   del viewer → archivo reescrito limpio (lección: no editar con PowerShell
   archivos UTF-8 sin BOM).
5. `StructureFicha` no renderizaba para articulaciones (gate por 'origin').

**Rendimiento**: 1380 piezas × materiales por mesh — fluido en desktop
headless; móvil pendiente de validar (documentado en pendientes).

## Ciclo 4 — bugs críticos del visor: causas raíz y correcciones

Reporte del usuario tras validar el ciclo 3 en `http://127.0.0.1:4321/app/fitness/anatomy`:
(1) no se puede aislar, (2) las capas no filtran, (3) al seleccionar aparece un
"mesh extra idéntico desfasado", (4) la selección anterior no siempre se
deselecciona, (5) muchos clicks no seleccionan pese al hover, (6) las
articulaciones solo resaltan sus huesos. Diagnóstico verificado contra los GLB
reales y `PropertyBinding.sanitizeNodeName`:

0. **RENDERIZADO COMPLETO EN NEGRO (hallado tras la validación del usuario con
   servidor del worktree, puerto 4322):** el clonado de materiales por mesh
   envolvía materiales SINGULARES en arrays de 1 (`originals.map(clone)` sin
   preservar singular/array). Con material-array, `projectObject` de three solo
   dibuja vía `geometry.groups` (vacías en estos GLB) → **0 draw calls
   silenciosos, sin ningún error de consola**. Diagnosticado por bisectación
   headless (puppeteer-core + Edge): R1 sin clonar dibuja (508k tris), R2 con
   clonar sin dispose no → el envoltorio en array era el asesino (el `dispose`
   de originales era inocuo: three solo registra el listener de dispose al
   compilar programa). FIX: clonar preservando singular/array. Verificado
   headless: esqueleto, miembro superior/inferior y cráneo renderizan; click
   selecciona (ficha), aislamiento muestra solo la pieza, filtro Músculos deja
   solo músculos, ficha de rodilla con marcador + ROM citado.
1. **Doble indexado nodo+geometría** (causa de 1 y 2): `namedMeshesRef`
   indexaba cada mesh DOS veces (nombre de nodo + nombre de meshDef sanitizado,
   p.ej. "Femurr" y "mesh123") y `applyVisibility` decidía la visibilidad POR
   ALIAS — la última escritura ganaba y el alias de geometría (kind `other`/
   `aux`) ocultaba piezas correctas en cada filtro y en el aislamiento. FIX:
   lista plana `meshListRef` (mesh + nombre de NODO) y decisión ÚNICA por pieza
   (`decideMeshVisibility`, testeada). Los CONTENEDORES padre (Bones/Muscles/…)
   ya no se tocan: ningún filtro puede esconder un subárbol.
2. **Mesh fantasma** (causa 3): era el outline "inverted-hull" (clon de la
   geometría escalado 1.035 con BackSide). RETIRADO; el resalte es
   emissive+teñido en dos intensidades (`strong`/`soft`).
3. **Materiales compartidos del GLB** (causa 4): mutar/restaurar emissive por
   mesh contaminaba a las hermanas que comparten material → resaltes que no se
   limpiaban. FIX: material POR MESH en carga (clone comparte texturas; los
   materiales originales del GLTF se liberan).
4. **Selección que no se limpiaba**: además de (3), el efecto de highlight
   retornaba sin restaurar si la nueva selección no tenía mapping y la
   deselección total no restauraba nada. FIX: el efecto se ejecuta SIEMPRE
   (con `[]` limpia).
5. **Click sin efecto** (causa 5): (a) ~60% de los meshes no tenían estructura
   dueña → `match === undefined` no hacía nada; (b) `Flexor_retinaculum_of_wrist`
   (upper-limb) está mapeado por meshDef, no por nodo; (c) el primer match por
   orden del grafo daba la articulación antes que el hueso (MUSCLES→…→JOINTS→
   BONES). FIX: índice de dueño MÁS ESPECÍFICO (`buildOwnerIndex`: gana el
   mapping más pequeño; alias nodo↔geometría normalizado) + FALLBACK de
   selección de PIEZA suelta (ficha mínima nombre+kind, centrar/aislar
   operativos) + click en vacío deselecciona.
6. **Articulaciones** (causa 6): huesos constituyentes en resalte SUAVE +
   marcador 3D propio de la articulación (esfera core+halo, raycast off) en la
   localización aproximada (centroide de los huesos; los GLB no traen la
   articulación como pieza) + nota de honestidad en la ficha.

Lógica pura extraída a `viewerLogic.ts` (+13 tests): `buildOwnerIndex`,
`resolveSelectionNames` (alias→nodo), `decideMeshVisibility`, `prettyMeshName`
(limpia ZWSP del export para labels). Verificación de datos con inventario
real: 8/8 modelos OK (aislamiento exacto, filtros por capa, "Todo" no oculta
nada). Hover muestra nombre legible (underscores→espacios).

**Nota de entorno (importante para validar):** el dev server de la 4321 sirve
`E:\Laboral` (main). Los commits de esta rama viven en el worktree
`E:\Laboral\.worktrees\anatomia` → para validar sin merge:
`node node_modules/astro/astro.js dev --host 127.0.0.1 --port 4322` con cwd el
worktree (servidor dejado corriendo, PID 51880). Validación headless completa
(puppeteer-core + Edge) ejecutada contra la 4322: render OK en 5 modelos,
selección/aislamiento/filtros/marcador/ROM verificados por captura.

## Ciclo 4 — pendiente #4: ROM articular verificado con cita

`src/data/fitness/anatomy/jointRom.ts`: **19/19 articulaciones** con ROM por
movimiento, valor, condición de medición y `sourceRefs` (Levangie & Norkin 6ª
ed., locator = capítulo·sección — la capa de texto no conserva páginas
estables, misma convención que los chunks `njs6-*`). Valores verificados
línea a línea contra `Norkin-..._textolayer.txt` (atajo autorizado ficha
§3.2B): codo 135-145° activo/150-160° pasivo; cadera 90°/120° flex, 10-30° ext,
45-50° abd; rodilla 130-140° pasiva (160° sentadilla); tobillo 20°/50°;
radiocubital ~150°; lumbar 52/19/30/32°; ATM 40-50 mm; etc. Subtalar,
patelofemoral y tibiofibular declaran EXPLÍCITAMENTE que la fuente no da
números (sin inventar). Fusión en `JointEntry.rom` desde `anatomyGraph` (el
generador NO se toca: reconstruiría el mapping del ciclo 3). UI: ficha del
visor + Músculos listan el ROM con su cita. `pending` sin marcar = verificado.
Tests `jointRom.test.ts` (10): cobertura 19/19, citas con capítulo, sin
pending, muestreo de valores, declaración explícita de ausencias.

Nota: los lotes curados Moore/MacIntosh/Enoka llegaron a `rag/anatomy/fuentes/`
y fueron ingestados externamente (commit `9bfd5b3` "LOTE 2"): `rag/anatomy.json`
7 fuentes / 407 chunks + índice actualizado — la mitad 1 de la pendiente #2
estaba ya resuelta al arrancar este ciclo.

## Ciclo 3 — hallazgos clave (por qué fallaba TODO el mapping)

1. **Los nombres reales viven en `nodes[].name`**, no en `meshes[].name`:
   el inventario del ciclo 2 leyó meshDefs (basura de Blender "mesh.228",
   "Vert.015", "Circle.007" o vacíos) → "0 meshes" en cráneos/vertebrae y
   un "mesh" en overview-skeleton.
2. **El visor renombra todo en runtime** (three.js GLTFLoader):
   `PropertyBinding.sanitizeNodeName` (espacios→`_`, elimina `. : / [ ]` —
   "muscle.r"→"muscler", el punto NO deja separador) + `createUniqueName`
   (`_N` en colisiones; el NODO reserva nombre antes que el mesh → el nombre
   del meshDef nunca sobrevive). El grafo mapeaba nombres crudos con
   espacios/puntos que en la escena no existen.
3. **Los 43 "Circle.NNN" de lower-limb NO son basura en escena**: son los
   meshDefs de las bursas (nodos bien nombrados bajo la raíz "Bursae"). La
   regla `aux` queda como defensa ante helper que sí llegue nombrada.
4. **Las raíces de escena son contenedores de categoría** (Bones, Muscles,
   Nerves, "Arm - muscles", …): el filtro de capas anterior los ocultaba al
   no tener dueño → escondía el modelo entero. Ahora el catálogo les da kind.

## Ciclo 3 — mapeo logrado (todo verificado contra nombres runtime)

Pipeline `rag/anatomy/scripts/remap.ts` (capas exacto→agresivo→alias manual
+ resolución de "mejor dueño"; aliases en `meshAliases.ts`). Reporte:
`rag/anatomy/extracciones/remap-report.md`; inventario canónico:
`rag/anatomy/extracciones/mesh-names.json` + `modelos-inventario.md`
(convención de nombres por GLB). Validación: `npx tsx
rag/anatomy/scripts/coverage-report.ts`.

| Modelo | Nombres runtime | Estructuras seleccionables | Nombres con dueño | % clasificado (meshCatalog) |
|---|---|---|---|---|
| upper-limb | 575 | 96 | 164 | 95.3% |
| lower-limb | 462 | 107 | 118 | 91.3% |
| hand | 235 | 41 | 63 | 98.3% |
| overview-skeleton | 147 | 59 | 75 | 100% |
| colored-skull-base / exploded / overview-colored | 30/30/31 | 12 c/u | 12 c/u | 100% |
| vertebrae | 4 | 5 | 3 | 100% |

**Grafo: 267 estructuras · 211 con mapping 3D (79%) · 640 mapeos
estructura→mesh, 0 huérfanos** (`meshMapping.test.ts` compara cada nombre
contra mesh-names.json). Por tipo: huesos 39/39, ligamentos 21/21,
articulaciones 19/19, músculos 98/146, nervios 18/22, tendones 16/20.

### Decisiones de alias (defendibles)

- **Cabezas/partes como multi-mesh**: bíceps/tríceps/gastrocnemios por
  cabezas; deltoides clavicular/acromial/espinal ↔ Deltoideus ant/med/post;
  pectoral mayor por 4 cabezas; trapecio entero + 3 partes.
- **Articulaciones → huesos constituyentes** (los GLB no traen "articulación"
  como pieza): hombro=húmero+escápula, rodilla=fémur+tibia+rótula, etc.
- **Aproximaciones documentadas**: tendones sin mesh propio → vientre
  muscular o vaina (supraspinatus, psoas-iliaco, flexores de la mano,
  De Quervain = vainas APL+EPB); VMO → vasto medial.
- **Typos del modelo resueltos por alias**: "Schiatic nerve" (isquiático),
  "cuteneous", "Musculocutaneus", "Articularis genus", "Iliolumbar ligament .r".
- **Honestidad por encima del número**: referencias sin contraparte real
  ELIMINADAS (p.ej. temporalis/masetero ya NO mapean el hueso temporal);
  las estructuras se conservan para la BD de Músculos.

## meshCatalog (T4) — filtros sobre el modelo COMPLETO

`src/data/fitness/anatomy/meshCatalog.ts` (generado por
`rag/anatomy/scripts/build-mesh-catalog.mjs`): kind de TODOS los ~1500
nombres runtime (muscle|tendon|ligament|joint|nerve|bone|vessel|fascia|
cartilage|other|aux) por patrón anatómico > contenedor de categoría del GLB
> other, con overrides manuales preservados entre regeneraciones. El visor
(`applyVisibility`, cambio mínimo y aditivo) usa el catálogo como fallback
cuando un mesh no tiene estructura dueña — así los contenedores
Bones/Muscles/… participan de la visibilidad jerárquica — y la geometría
`aux` queda oculta por defecto. El tokenizador resuelve el glued-r del
sanitize ("ligamentr"→"ligament", "Femurr"→"Femur").

## Features del visor (tareas 4, 4-FINAL, feedback F1 y ciclo 3 T4)

`/app/fitness/anatomy` — `AnatomyViewer.tsx` (three.js puro, sin R3F):

- Carga diferida por modelo + limpieza de VRAM (dispose de geometrías,
  materiales, texturas y decoders al cambiar modelo).
- Selección por click/tap con **raycasting** (tap vs drag >6px) y **pan**
  (OrbitControls `enablePan`).
- **Resalte inequívoco** de la selección: emissive + teñido en dos intensidades
  (`strong` normal / `soft` para huesos de articulaciones). El outline
  inverted-hull del ciclo 3 fue RETIRADO en el ciclo 4 (se percibía como un
  mesh duplicado desfasado — reporte del usuario).
- **Centrado**: botón "Centrar" + atajo **F** (mantiene la orientación de
  cámara; encuadre sobre la caja de la pieza).
- **Capas ocluidas**: raycast cámara→pieza; lo que se interpone pasa a
  translúcido (opacidad 0.12, clone-on-write del material). Se re-computa al
  seleccionar/aislar/filtrar/centrar (no por frame: coste asumido solo en
  eventos).
- **Filtros por categoría** del grafo: Todo / Músculos / Tendones+ligamentos
  / Nervios / Huesos+articulaciones (ciclo 4: visibilidad decidida UNA vez por
  mesh sobre `meshListRef`, con kind del dueño más específico o meshCatalog).
- **Aislar pieza** (ocultar todo lo demás, Esc para salir) — ciclo 4:
  operativo también para piezas sueltas sin ficha; click en vacío deselecciona;
  todo click selecciona (estructura dueña o pieza suelta).
- **Marcador de articulación** (ciclo 4): huesos constituyentes en suave +
  esfera marcadora (core+halo, raycast off) en el centroide aproximado de los
  huesos; nota de honestidad en la ficha. ROM verificado por movimiento con
  cita en la ficha (jointRom).
- Deep-link `?model=&structure=` al montar; cráneo explosionado conmutable;
  hover con nombre; reset de cámara; panel lateral filtrable; móvil
  (useIsMobile) y `prefers-reduced-motion` → render estático de una pasada.
- **StructureThumbnail**: miniatura 3D interactiva por estructura (modelo
  completo en "fantasma" 0.07 + pieza resaltada, auto-rotación, arrastre
  para rotar, clic abre el visor con la pieza preseleccionada). Cache GLTF
  compartido `gltfCache.ts` (geometrías reutilizadas; materiales clonados
  por consumidor).

## Conexión BD (tareas 5a-5c + F2)

`/app/fitness/library/muscles` — `anatomy/LibraryMuscles.tsx` (montado por
`muscles.astro`; el `fitness/LibraryMuscles.tsx` de main es otro componente
del workspace restaurado y NO se toca):

- Navegación por zona (14 zonas) y tipo (músculos/tendones/ligamentos/
  articulaciones/nervios/huesos) + vistas de músculo por acción y
  "primarios de entrenamiento" + buscador es/en/sinónimos.
- Cada ficha: **miniatura 3D** (StructureThumbnail) + **"Ver en 3D"**
  (`/app/fitness/anatomy?model=X&structure=Y`, mejor modelo =
  `bestModelKeyForStructure`) + **"Ejercicios que la cargan"**
  (READ de exerciseDatabase vía `findExercisesForMuscle`: match por
  nombre/sinónimos con índice de tokens; **fallback por zona**
  `findExercisesForZone` para tendones/ligamentos/articulaciones/nervios
  sin match directo — label "cargan la zona · X").
- Visor ↔ BD en ambos sentidos (desde la ficha del visor, "Ver ficha
  completa en Músculos" con `?structure=`).

## RAG anatomía (tareas 6-7 + reconciliación con main)

- **Fuentes** en `rag/anatomy/fuentes/`: 5 md de Levangie & Norkin 6ª ed
  (extracción local de la capa de texto del PDF, 5 articulaciones clave,
  prefijo de chunk `njs6-`) + 5 md de Gray's for Students 4ª (curados por
  el usuario vía Gemini desde main, prefijo `grays-`).
- `rag/anatomy.json` reconstruido con el builder:
  `npx tsx scripts/build_rag/index.ts --domain anatomy` → **2 sources,
  116 chunks** (84 Gray's + 32 Norkin; sin colisión de ids por prefijo) +
  `--index` (4 dominios). Manifest `rag/anatomy/manifest.json` extendido
  con la fuente Levangie (book, expert-book) sin tocar la de Gray's.
- Extracciones de **Moore (anatomía clínica), MacIntosh (biomecánica) y
  Enoka (neuromecánica) ESTÁN SIENDO CURADAS POR EL USUARIO EN LOTES**;
  llegarán a `rag/anatomy/fuentes/` y bastará rebuild del dominio + index
  para incorporarlas.

## Decisiones clave (por si hay que defenderlas o revertirlas)

1. **Three.js puro, sin react-three-fiber**: menos dependencias y control
   directo del ciclo de vida/VRAM en un visor con carga/descarga intensiva
   de modelos. Los handlers del canvas viven fuera de React; el estado UI
   se sincroniza vía refs espejo (`loadingRef`, `selectionRef`, …).
2. **~~Outline inverted-hull~~ RETIRADO (ciclo 4)**: la copia de geometría
   escalada 1.035 con BackSide se percibía como un "mesh extra idéntico
   desfasado" (reporte del usuario). El resalte es ahora emissive+teñido
   (`strong`/`soft`); cero dependencias nuevas se mantiene.
3. **Oclusores con clone-on-write de material**: los GLB comparten
   material entre meshes; mutar opacidad contaminaría piezas hermanas. El
   resalte de selección resetea oclusores ANTES de aplicar (si no, el
   highlight caería sobre un clon y se perdería al recomputar). CICLO 4:
   además, CARGA clona el material por mesh y libera los originales — el
   highlight/hover por pieza ya no puede contaminar hermanas (causa de las
   selecciones que no se deseleccionaban).
4. **Miniatura solo en la ficha seleccionada** (no una por fila de la
   lista): cada miniatura es un WebGLRenderer propio y el navegador limita
   contextos (~8-16); la ficha garantiza ≤1-2 vivos simultáneos.
5. **Oclusores no se recomputan por frame**: raycast múltiple por frame es
   caro; se actualiza en eventos (selección/filtro/aislar/centrar). Al
   orbitar, la translucidez queda congelada de la última vista — aceptable
   y documentado aquí.
6. **Matcher de ejercicios por tokens** (nombre EN normalizado + sinónimos
   curados + índice invertido) y **fallback por zona** con tokens típicos
   de exerciseDatabase por zona; `head-jaw` sin tokens → sección oculta.
7. **`pendingCitation: 267`**: todo el grafo nació con `sourceRefs
   pending=true`; la verificación bibliográfica capítulo/página llega con
   los lotes curados de Moore/MacIntosh/Enoka (flujo arriba). PRIMERA
   REBANADA VERIFICADA (ciclo 4): el ROM de las 19 articulaciones en
   `jointRom.ts` lleva cita capítulo·sección sin `pending`.

## Validación

- CICLO 4: `npx astro check`: **0 errors, 0 warnings** · `npm test`: **25
  archivos, 229 tests verdes** (+13 `viewerLogic`, +10 `jointRom`).
  Verificación de datos con inventario real de los 8 GLB: aislamiento exacto,
  filtros por capa correctos y "Todo" no oculta ninguna pieza.
- CICLO 3: `npx astro check`: **0 errors, 0 warnings** (requiere
  `NODE_OPTIONS=--max-old-space-size=8192` en esta máquina; hints
  restantes son del decoder Draco minificado y scripts .mjs ajenos).
- `npm test` ciclo 3: **21 archivos, 185 tests verdes**, incl. los 14 previos del
  grafo + `meshMapping.test.ts` (3: 0 huérfanos, modelos válidos, aux jamás
  mapeado) + `meshCatalog.test.ts` (5: muestras por modelo, aux, overrides,
  cobertura ≥88-100% por modelo).
- Pendiente de misión control: **validación visual del usuario** de los 6
  fixes del ciclo 4 (selección siempre activa, aislamiento, capas, sin mesh
  fantasma, deselección, marcador de articulación) en los 8 modelos tras el
  merge.

## Pendientes

1. **Validación visual del usuario** (ciclo 5: compuesto, focus, capas,
   fases, aislamiento múltiple, colores, explosión; ciclos 3-4 acumulados) —
   orquestador tras merge.
2. **Verificación bibliográfica del grafo** (`pending` → citado, 267
   estructuras). La mitad 1 (lotes Moore/MacIntosh/Enoka → fuentes → RAG)
   quedó resuelta externamente en `9bfd5b3` (LOTE 2: 7 fuentes / 407
   chunks); el ROM articular (ciclo 4) ya va con cita verificada. Resta el
   barrido campo a campo del resto del grafo.
3. Cobertura 3D de músculos de torso/cabeza/cuello (48 sin GLB dedicado:
   hoy 98/146) y 4 nervios sin capa neural en los modelos (18/22). Son
   honestos "sin contraparte": requieren GLB con esas capas.
4. ~~ROM numérico por articulación~~ **HECHO (ciclo 4)**: 19/19 articulaciones
   con ROM por movimiento y cita (capítulo·sección de Levangie & Norkin 6ª ed)
   en `jointRom.ts`; las 3 sin números en la fuente lo declaran explícitamente.
5. Recompute de oclusores en orbit continuo (si el usuario lo pide;
   hoy solo en eventos).
6. Nombres ZWSP residuales del export ("Art_cart_of_talusr_\u200b"):
   mapean y filtran bien (y el hover ya los muestra limpios vía
   `prettyMeshName`), pero si se regeneran los GLB conviene
   limpiarlos en origen.
7. **Ciclo 5 — pulidos futuros**: rendimiento móvil del compuesto (1380
   piezas; validar en dispositivo real, considerar LOD/culling por región);
   el hover obsoleto persiste al cambiar FOCUS (limpiado al cambiar modelo);
   la vista "Vista general" del cráneo no soporta slider de explosión (el
   exploded solo empareja con el coloreado); enriquecer LibraryMuscles con
   los mismos bloques ricos de la ficha del visor.


## ANÁLISIS DE OVERLAYS

```json
{
 "overview-skeleton": {
  "solid": 144,
  "overlay": 0,
  "overlayNames": [],
  "overlayContainers": []
 },
 "lower-limb": {
  "solid": 355,
  "overlay": 97,
  "overlayNames": [
   "Synovial_membranes_of_kneer",
   "Synovial_sheaths_of_toesr",
   "Anterior_intermuscular_septum_of_legr",
   "Crural_fasciar",
   "Fascia_latar",
   "Flexor_retinaculum_of_ankler",
   "Gluteal_aponeurosisr",
   "Inferior_extensor_retinaculumr",
   "Inferior_fibular_retinaculumr",
   "Lateral_femoral_intermuscular_septumr",
   "Medial_femoral_intermuscular_septumr",
   "Posterior_intermuscular_septum_of_legr",
   "Superior_extensor_retinaculum_of_ankler",
   "Transverse_intermuscular_septum_of_legr",
   "Bursa_of_piriformisr",
   "Common_tendon_sheath_of_fibularis_musclesr",
   "Deep_Infrapatellar_bursar",
   "Extensor_digitorum_longus-fibularis_tertius_vaginae_tendinumr",
   "Extensor_hallucis_longus_tendon_sheathr",
   "Flexor_digitorum_longus_tendon_sheathr",
   "Flexor_hallucis_longus_tendon_sheathr",
   "Iliopectineal_bursar",
   "Inferior_subtendinous_bursa_of_biceps_femorisr",
   "Intermuscular_gluteal_bursaer",
   "Lateral_subtendinous_bursa_of_gastrocnemius_muscler",
   "Medial_subtendinous_bursa_of_gastrocnemius_muscler",
   "Pes_anserine_bursar",
   "Plantar_tendinous_sheath_of_fibularis_longusr",
   "Sciatic_bursa_of_gluteus_maximus_(Ischiogluteal_bursa)r",
   "Sciatic_bursa_of_obturator_internusr",
   "Semimembranosus_bursa_deep_to_tendonr",
   "Subcutaneous_bursa_of__medial_malleolusr",
   "Subcutaneous_bursa_of_lateral_malleolusr",
   "Subcutaneous_bursa_of_tuberosity_of_tibiar",
   "Subcutaneous_calcaneal_bursar",
   "Subcutaneous_Infrapatellar_bursar",
   "Subcutaneous_prepatellar_bursar",
   "Subcutaneous_trochanteric_bursar",
   "Subfascial_prepatellar_bursar",
   "Subpopliteal_recessr",
   "Subtendinous_bursa_of_iliacusr",
   "Subtendinous_bursa_of_obturator_internusr",
   "Subtendinous_bursa_of_sartoriusr",
   "Subtendinous_bursa_of_tibialis_anteriorr",
   "Subtendinous_calcaneal_bursar",
   "Subtendinous_prepatellar_bursar",
   "Superior_bursa_of_biceps_femorisr",
   "Tibialis_anterior_tendon_sheathr",
   "Tibialis_posterior_tendon_sheathr",
   "Trochanteric_bursa_of_gluteus_maximusr",
   "Trochanteric_bursa_of_gluteus_minimusr",
   "Trochanteric_bursae_of_gluteus_mediusr",
   "Adductor_canalr",
   "Adductor_hiatusr",
   "Adductor_minimus_overlayr",
   "Annular_ligaments_of_1st_toe_A1-A5r",
   "Annular_ligaments_of_2nd_toe_A1-A5r",
   "Annular_ligaments_of_3rd_toe_A1-A5r",
   "Annular_ligaments_of_4th_toe_A1-A5r",
   "Annular_ligaments_of_5th_toe_A1-A5r",
   "Anterior_ligament_of_fibular_headr",
   "Anterior_pubic_ligament",
   "Arcuate_ligamentr",
   "Calcaneocuboid_ligamentr",
   "Calcaneonavicular_ligamentr",
   "Collateral_ligament_of_proximal_interphalangeal_jointsr",
   "Collateral_ligaments_of_distal_interphalangeal_jointsr",
   "Collateral_ligaments_of_metatarsophalangeal_jointsr",
   "Cruciform_ligaments_or_1st_toer",
   "Cruciform_ligaments_or_2nd_toer",
   "Cruciform_ligaments_or_3rd_toer",
   "Cruciform_ligaments_or_4th_toer",
   "Cruciform_ligaments_or_5th_toer",
   "Descending_part_of_Iliofemoral_ligamentr",
   "Femoral_canalr",
   "Femoral_ringr",
   "Femoral_triangler",
   "Ishciofemoral_ligamentr",
   "Lateral_patellar_retinaculum_(horizontal_part)r",
   "Lateral_patellar_retinaculum_(vertical_part)r",
   "Medial_collatertal_ligamentr",
   "Medial_patellar_retinaculum_(horizontal_part)r",
   "Medial_patellar_retinaculum_(vertical_part)r",
   "Oblique_popliteal_ligamentr",
   "Palmar_ligament_of_proximal_interphalangeal_jointsr",
   "Palmar_ligaments_of_distal_interphalangeal_jointsr",
   "Palmar_ligaments_of_metatarsophalangeal_jointsr",
   "Posterior_ligament_of_fibular_headr",
   "Posterior_pubic_ligament",
   "Posterior_talofibular_ligamentr",
   "Pubofemoral_ligamentr",
   "Quadriceps_common_tendon_and_patellar_ligament",
   "Saphenous_openingr",
   "Suprapatellar_bursa_overlayr",
   "Tendinous_arch_of_soleusr",
   "Transverse_part_of_Iliofemoral_ligamentr",
   "Zona_orbicularis_of_hip_jointr"
  ],
  "overlayContainers": [
   ""
  ]
 },
 "upper-limb": {
  "solid": 443,
  "overlay": 89,
  "overlayNames": [
   "Bicipital_aponeurosisr",
   "Long_head_of_biceps_brachii_tendon_sheathr",
   "Brachial_fasciar",
   "Inferior_glenohumeral_ligamentr",
   "Lateral_intermuscular_septum_of_armr",
   "Medial_intermuscular_septum_of_armr",
   "Middle_glenohumeral_ligamentr",
   "Superior_glenohumeral_ligamentr",
   "Transverse_humeral_ligamentr",
   "Coracobrachial_bursar",
   "Intratendinous_olecranon_bursar",
   "Subcutaneous_olecranon_bursar",
   "Subtendinous_bursa_of_infraspinatus_muscler",
   "Subtendinous_bursa_of_latissimus_dorsir",
   "Subtendinous_bursa_of_subscapularisr",
   "Subtendinous_bursa_of_teres_majorr",
   "Antebrachial_fasciar",
   "Radial_annular_ligamentr",
   "Radial_collateral_ligament_of_elbowr",
   "Ulnar_collateral_ligament_of_elbowr",
   "Bicipitoradial_bursa",
   "Interosseous_cubital_bursar",
   "Subtendinous_bursa_of_triceps_brachiir",
   "Annular_ligament(A1)_of_1st_fingerr",
   "Annular_ligament(A2)_of_1st_fingerr",
   "Annular_ligaments_of_2nd_finger_A1-A5r",
   "Annular_ligaments_of_3rd_finger_A1-A5r",
   "Annular_ligaments_of_4th_finger_A1-A5r",
   "Annular_ligaments_of_5th_finger_A1-A5r",
   "Collateral_ligaments_of_distal_phalangeal_jointsr",
   "Collateral_ligaments_of_interphalangeal_jointsr",
   "Collateral_ligaments_of_metacarpal_jointsr",
   "Collateral_ligaments_of_metacarpophalangeal_jointsr",
   "Cruciform_ligaments_of_2nd_fingerr",
   "Cruciform_ligaments_of_3rd_fingerr",
   "Cruciform_ligaments_of_4th_fingerr",
   "Cruciform_ligaments_of_5th_fingerr",
   "Dorsal_intercarpal_ligament",
   "Dorsal_radiocarpal_ligamentr",
   "Extensor_retinaculum_of_wrist",
   "Oblique_ligament_of_1st_fingerr",
   "Palmar_ligaments_of_distal_phalangeal_jointsr",
   "Palmar_ligaments_of_interphalangeal_jointsr",
   "Palmar_ligaments_of_metacarpophalangeal_jointsr",
   "Palmar_radiocarpal_ligamentr",
   "Palmar_ulnocarpal_ligamentr",
   "Pisometacarpal_ligamentr",
   "Radial_collateral_ligament_of_wristr",
   "Thickened_part_of_antebrachial_fascia",
   "Ulnar_collateral_ligament_of_wristr",
   "Abductor_pollicis_longus_tendon_sheath",
   "Common_flexor_tendon_sheath",
   "Extensor_carpi_radialis_brevis_tendon_sheath",
   "Extensor_carpi_radialis_longus_tendon_sheath",
   "Extensor_carpi_ulnaris_tendon_sheath",
   "Extensor_digiti_minimi_tendon_sheath",
   "Extensor_digitorum_-_Extensor_indicis_tendon_sheath",
   "Extensor_pollicis_brevis_tendon_sheath",
   "Extensor_pollicis_longus_tendon_sheath",
   "Flexor_carpi_radialis_tendon_sheath",
   "Flexor_pollicis_longus_tendon_sheath",
   "Synovial_sheaths_of_fingers",
   "Extensor_hood_of_2nd_fingerr",
   "Extensor_hood_of_3rd_fingerr",
   "Extensor_hood_of_4th_fingerr",
   "Extensor_hood_of_5th_fingerr",
   "Oblique_head_of_adductor_pollicisr",
   "Transverse_head_of_adductor_pollicisr",
   "Acromioclavicular_ligamentr",
   "Anterior_sternoclavicular_ligamentr",
   "Conoid_ligament_(part_of_coracoclavicular_ligament)r",
   "Posterior_Sternoclavicular_ligamentr",
   "Trapezoid_ligament_(part_of_coracoclavicular_ligament)r",
   "Abdominal_head_of_pectoralis_major_muscler",
   "Acromial_part_of_deltoid_muscler",
   "Ascending_part_of_Trapezius_muscler",
   "Clavicular_head_of_pectoralis_major_muscler",
   "Clavicular_part_of_deltoid_muscler",
   "Descending_part_of_Trapezius_muscler",
   "Spinal_part_of_deltoid_muscler",
   "Sternocostal_head_of_pectoralis_major_muscler",
   "Transverse_part_of_trapezius_muscler",
   "Infraserratus_bursar",
   "Subacromial_bursar",
   "Subacromial-subdeltoid_bursar",
   "Subcutaneous_acromial_bursar",
   "Subdeltoid_bursar",
   "Subtendinous_bursa_of_trapeziusr",
   "Supraserratus_bursar"
  ],
  "overlayContainers": [
   ""
  ]
 },
 "hand": {
  "solid": 178,
  "overlay": 45,
  "overlayNames": [
   "Synovial_sheaths_of_fingers",
   "Abductor_pollicis_longus_tendon_sheath",
   "Common_flexor_tendon_sheath",
   "Extensor_carpi_radialis_brevis_tendon_sheath",
   "Extensor_carpi_radialis_longus_tendon_sheath",
   "Extensor_carpi_ulnaris_tendon_sheath",
   "Extensor_digiti_minimi_tendon_sheath",
   "Extensor_digitorum_-_Extensor_indicis_tendon_sheath",
   "Extensor_pollicis_brevis_tendon_sheath",
   "Extensor_pollicis_longus_tendon_sheath",
   "Flexor_carpi_radialis_tendon_sheath",
   "Flexor_pollicis_longus_tendon_sheath",
   "Antebrachial_fascia",
   "Extensor_retinaculum_of_wrist",
   "Flexor_retinaculum_of_wrist",
   "Annular_ligament(A1)_of_1st_finger",
   "Annular_ligament(A2)_of_1st_finger",
   "Annular_ligaments_of_2nd_finger_A1-A5",
   "Annular_ligaments_of_3rd_finger_A1-A5",
   "Annular_ligaments_of_4th_finger_A1-A5",
   "Annular_ligaments_of_5th_finger_A1-A5",
   "Collateral_ligaments_of_distal_phalangeal_joints",
   "Collateral_ligaments_of_interphalangeal_joint",
   "Collateral_ligaments_of_metacarpal_joints",
   "Cruciform_ligaments_of_2nd_finger",
   "Cruciform_ligaments_or_3rd_finger",
   "Cruciform_ligaments_or_4th_finger",
   "Cruciform_ligaments_or_5th_finger",
   "Dorsal_intercarpal_ligaments",
   "Dorsal_radiocarpal_ligament",
   "Oblique_head_of_adductor_pollicis",
   "Oblique_ligament_of_1st_finger",
   "Palmar_ligaments_of_distal_phalangeal_joints",
   "Palmar_ligaments_of_interphalangeal_joints",
   "Palmar_ligaments_of_metacarpophalangeal_joints",
   "Palmar_radiocarpal_ligament",
   "Palmar_ulnocarpal_ligament",
   "Pisometacarpal_ligament",
   "Radial_collateral_ligament",
   "Transverse_head_of_adductor_pollicis",
   "Ulnar_collateral_ligament",
   "Extensor_hood_of_2nd_finger",
   "Extensor_hood_of_3rd_finger",
   "Extensor_hood_of_4th_finger",
   "Extensor_hood_of_5th_finger"
  ],
  "overlayContainers": [
   ""
  ]
 },
 "colored-skull-base": {
  "solid": 29,
  "overlay": 0,
  "overlayNames": [],
  "overlayContainers": []
 },
 "overview-colored-skull": {
  "solid": 29,
  "overlay": 0,
  "overlayNames": [],
  "overlayContainers": []
 },
 "exploded-skull": {
  "solid": 29,
  "overlay": 0,
  "overlayNames": [],
  "overlayContainers": []
 },
 "vertebrae": {
  "solid": 3,
  "overlay": 0,
  "overlayNames": [],
  "overlayContainers": []
 }
}
```

## COBERTURA 3D

# Cobertura 3D — estructuras del grafo vs compuesto

> Generado por cobertura-3d.mjs. Grafo: 267 estructuras · compuesto: 1380 piezas.
> Mapeadas: **211** · Sin equivalente directo: **56**

## Resumen por zona (sin equivalente directo)

| Zona | Sin mapping | Con candidato parcial | Sin geometría |
|---|---|---|---|
| head-jaw | 11 | 7 | 4 |
| cervical | 15 | 9 | 6 |
| chest | 8 | 4 | 4 |
| core | 8 | 6 | 2 |
| spine | 6 | 0 | 6 |
| back | 4 | 2 | 2 |
| hip | 1 | 1 | 0 |
| shoulder | 1 | 1 | 0 |
| arm | 2 | 2 | 0 |

## Detalle de estructuras sin equivalente directo

| Estructura | Tipo | Zona | Estado | Candidato parcial (pieza que podría contenerla) |
|---|---|---|---|---|
| Masetero (Masseter) | muscle | head-jaw | sin geometría en los GLB | — |
| Temporal (Temporalis) | muscle | head-jaw | sin geometría en los GLB | — |
| Pterigoideo Lateral (Lateral Pterygoid) | muscle | head-jaw | sin mapping propio — candidato parcial | overview-skeleton:Lateral_cuneiform_boner (0.5) |
| Pterigoideo Medial (Medial Pterygoid) | muscle | head-jaw | sin mapping propio — candidato parcial | overview-skeleton:Lower_medial_incisorr (0.5) |
| Occipitofrontal (Occipitofrontalis) | muscle | head-jaw | sin geometría en los GLB | — |
| Orbicular de los Párpados (Orbicularis Oculi) | muscle | head-jaw | sin mapping propio — candidato parcial | lower-limb:Zona_orbicularis_of_hip_jointr (0.5) |
| Orbicular de la Boca (Orbicularis Oris) | muscle | head-jaw | sin mapping propio — candidato parcial | lower-limb:Zona_orbicularis_of_hip_jointr (0.5) |
| Buccinador (Buccinator) | muscle | head-jaw | sin geometría en los GLB | — |
| Cigomático Mayor (Zygomaticus Major) | muscle | head-jaw | sin mapping propio — candidato parcial | upper-limb:Abdominal_head_of_pectoralis_major_muscler (0.5) |
| Músculos Extraoculares (Extraocular Muscles) | muscle | head-jaw | sin mapping propio — candidato parcial | lower-limb:1st_Dorsal_interossei_muscles_of_footr (0.5) |
| Esternocleidomastoideo (Sternocleidomastoid) | muscle | cervical | sin geometría en los GLB | — |
| Platisma (Platysma) | muscle | cervical | sin geometría en los GLB | — |
| Escaleno Anterior (Scalenus Anterior) | muscle | cervical | sin mapping propio — candidato parcial | lower-limb:Anterior_cruciate_ligamentr (0.5) |
| Escaleno Medio (Scalenus Medius) | muscle | cervical | sin mapping propio — candidato parcial | lower-limb:Gluteus_medius_muscler (0.5) |
| Escaleno Posterior (Scalenus Posterior) | muscle | cervical | sin mapping propio — candidato parcial | lower-limb:Interossea__Posterior_sacro-iliac_ligamentr (0.5) |
| Largo del Cuello (Longus Colli) | muscle | cervical | sin mapping propio — candidato parcial | lower-limb:Extensor_digitorum_longus_tendonsr (0.5) |
| Largo de la Cabeza (Longus Capitis) | muscle | cervical | sin mapping propio — candidato parcial | lower-limb:Extensor_digitorum_longus_tendonsr (0.5) |
| Recto Anterior de la Cabeza (Rectus Capitis Anterior) | muscle | cervical | sin geometría en los GLB | — |
| Recto Lateral de la Cabeza (Rectus Capitis Lateralis) | muscle | cervical | sin geometría en los GLB | — |
| Esplenio de la Cabeza (Splenius Capitis) | muscle | cervical | sin geometría en los GLB | — |
| Esplenio del Cuello (Splenius Cervicis) | muscle | cervical | sin geometría en los GLB | — |
| Suboccipitales (Suboccipital Muscles) | muscle | cervical | sin mapping propio — candidato parcial | lower-limb:1st_Dorsal_interossei_muscles_of_footr (0.5) |
| Suprahioideos (Suprahyoid Muscles) | muscle | cervical | sin mapping propio — candidato parcial | lower-limb:1st_Dorsal_interossei_muscles_of_footr (0.5) |
| Infrahioideos (Infrahyoid Muscles) | muscle | cervical | sin mapping propio — candidato parcial | lower-limb:1st_Dorsal_interossei_muscles_of_footr (0.5) |
| Diafragma (Diaphragm) | muscle | chest | sin geometría en los GLB | — |
| Intercostales Externos (External Intercostals) | muscle | chest | sin mapping propio — candidato parcial | lower-limb:Superficial_external_pudendal_arteryr (0.5) |
| Intercostales Internos (Internal Intercostals) | muscle | chest | sin mapping propio — candidato parcial | upper-limb:Internal_thoracic_arteryr (0.5) |
| Intercostales Íntimos (Innermost Intercostals) | muscle | chest | sin geometría en los GLB | — |
| Transverso del Tórax (Transversus Thoracis) | muscle | chest | sin geometría en los GLB | — |
| Subcostales (Subcostal Muscles) | muscle | chest | sin mapping propio — candidato parcial | lower-limb:1st_Dorsal_interossei_muscles_of_footr (0.5) |
| Elevadores de las Costillas (Levatores Costarum) | muscle | chest | sin geometría en los GLB | — |
| Recto Abdominal (Rectus Abdominis) | muscle | core | sin mapping propio — candidato parcial | lower-limb:Rectus_femorisr (0.5) |
| Oblicuo Externo (External Oblique) | muscle | core | sin mapping propio — candidato parcial | lower-limb:Oblique_head_of_adductor_hallucisr (0.5) |
| Oblicuo Interno (Internal Oblique) | muscle | core | sin mapping propio — candidato parcial | lower-limb:Oblique_head_of_adductor_hallucisr (0.5) |
| Transverso Abdominal (Transversus Abdominis) | muscle | core | sin geometría en los GLB | — |
| Piramidal (Pyramidalis) | muscle | core | sin geometría en los GLB | — |
| Cuadrado Lumbar (Quadratus Lumborum) | muscle | core | sin mapping propio — candidato parcial | lower-limb:Quadratus_femoris_muscler (0.5) |
| Erector de la Columna (Erector Spinae) | muscle | spine | sin geometría en los GLB | — |
| Semiespinal (Semispinalis) | muscle | spine | sin geometría en los GLB | — |
| Multifidus (Multifidus) | muscle | spine | sin geometría en los GLB | — |
| Rotadores (Rotatores) | muscle | spine | sin geometría en los GLB | — |
| Interespinosos (Interspinales) | muscle | spine | sin geometría en los GLB | — |
| Intertransversos (Intertransversarii) | muscle | spine | sin geometría en los GLB | — |
| Serrato Posterior Superior (Serratus Posterior Superior) | muscle | back | sin mapping propio — candidato parcial | lower-limb:Superior_clunial_nerve_(posterior_rami)r (0.67) |
| Serrato Posterior Inferior (Serratus Posterior Inferior) | muscle | back | sin geometría en los GLB | — |
| Esternal (Sternalis) | muscle | back | sin geometría en los GLB | — |
| Tensor de la Fascia Lata (Tensor Fasciae Latae) | muscle | hip | sin mapping propio — candidato parcial | lower-limb:Tensor_fasciae_lataer (0.67) |
| Elevador del Ano (Levator Ani) | muscle | core | sin mapping propio — candidato parcial | upper-limb:Levator_scapulaer (1) |
| Tendón Cabeza Larga del Bíceps (Long head of biceps tendon) | tendon | shoulder | sin mapping propio — candidato parcial | lower-limb:Common_tendon_of_Semitendinosus_and_Long_head_of_biceps_femoris (1) |
| Tendón Common Extensor (Common extensor tendon) | tendon | arm | sin mapping propio — candidato parcial | upper-limb:Common_tendon_of_extensor_carpi_ulnarisr (1) |
| Tendón Common Flexor (Common flexor tendon) | tendon | arm | sin mapping propio — candidato parcial | upper-limb:Common_tendon_of_flexor_carpi_ulnarisr (1) |
| Tendón del Pectoral Mayor (Pectoralis major tendon) | tendon | chest | sin mapping propio — candidato parcial | upper-limb:Abdominal_head_of_pectoralis_major_muscler (0.67) |
| Nervio Accesorio (XI) (Accessory nerve) | nerve | cervical | sin mapping propio — candidato parcial | lower-limb:Accessory_saphenous_veinr (0.5) |
| Nervio Pudendo (Pudendal nerve) | nerve | core | sin mapping propio — candidato parcial | lower-limb:Superficial_external_pudendal_arteryr (0.5) |
| Nervio Toracodorsal (Thoracodorsal nerve) | nerve | back | sin mapping propio — candidato parcial | lower-limb:Inferior_clunial_br_of_post_cutaneous_nerve_of_the_thighr (0.5) |
| Nervio Mandibular (V3) (Mandibular nerve) | nerve | head-jaw | sin mapping propio — candidato parcial | lower-limb:Inferior_clunial_br_of_post_cutaneous_nerve_of_the_thighr (0.5) |

## Motivos y soluciones propuestas

1. **Músculos de torso/cabeza/cuello sin capa propia**: los GLB actuales cubren miembros + cráneo + columna; no existe GLB de musculatura torácica/abdominal/cervical anterior. Solución: incorporar GLB de torso (mismo atlas) o aceptar la cobertura actual por región (los huesos/ligamentos de esas zonas SÍ están).
2. **"Candidato parcial"**: el nombre de la estructura aparece dentro de una pieza compuesta (p.ej. una cabeza de un músculo fundido en la malla del vientre, o una estructura dentro de la vaina de otra). Solución: verificar visualmente y, si procede, añadir el mapping a esa pieza (el visor la resaltaría junto con su portadora) o dejar sin mapping por honestidad.
3. **Nervios/tendones sin capa**: los GLB de extremidades SÍ traen capas nerviosas/tendinosas; los que faltan pertenecen a regiones sin modelo (torso/cabeza) — mismo motivo que (1).


## MERGE ANALYSIS (resumen)

# Análisis de solapamiento GLB para el modelo compuesto

> Generado por analyze-merge.mjs (2026-08-25T05:05:54.101Z). Nombres normalizados
> (minúsculas, sin puntuación/laterales ambiguos) — la coincidencia exacta de
> traducción mundial confirma si dos piezas son la misma geometría en el mismo
> espacio.

## Pares — piezas comunes y alineación

| Par | Comunes | %A | %B | Δtraducción med/min/max |
|---|---|---|---|---|
| overview-skeleton ↔ upper-limb | 50 | 35% | 9% | 0 / 0 / 0 |
| overview-skeleton ↔ lower-limb | 34 | 24% | 8% | 0 / 0 / 0 |
| overview-skeleton ↔ hand | 0 | 0% | 0% | — / — / — |
| overview-skeleton ↔ colored-skull-base | 7 | 5% | 24% | 0 / 0 / 0 |
| overview-skeleton ↔ overview-colored-skull | 27 | 19% | 93% | 0 / 0 / 0 |
| overview-skeleton ↔ exploded-skull | 6 | 4% | 21% | 0 / 0 / 0 |
| overview-skeleton ↔ vertebrae | 0 | 0% | 0% | — / — / — |
| upper-limb ↔ lower-limb | 13 | 2% | 3% | 0 / 0 / 0 |
| upper-limb ↔ hand | 71 | 13% | 32% | 0 / 0 / 0 |
| upper-limb ↔ colored-skull-base | 0 | 0% | 0% | — / — / — |
| upper-limb ↔ overview-colored-skull | 0 | 0% | 0% | — / — / — |
| upper-limb ↔ exploded-skull | 0 | 0% | 0% | — / — / — |
| upper-limb ↔ vertebrae | 3 | 1% | 100% | 0 / 0 / 0 |
| lower-limb ↔ hand | 1 | 0% | 0% | 0 / 0 / 0 |
| lower-limb ↔ colored-skull-base | 0 | 0% | 0% | — / — / — |
| lower-limb ↔ overview-colored-skull | 0 | 0% | 0% | — / — / — |
| lower-limb ↔ exploded-skull | 0 | 0% | 0% | — / — / — |
| lower-limb ↔ vertebrae | 1 | 0% | 33% | 0 / 0 / 0 |
| hand ↔ colored-skull-base | 0 | 0% | 0% | — / — / — |
| hand ↔ overview-colored-skull | 0 | 0% | 0% | — / — / — |
| hand ↔ exploded-skull | 0 | 0% | 0% | — / — / — |
| hand ↔ vertebrae | 0 | 0% | 0% | — / — / — |
| colored-skull-base ↔ overview-colored-skull | 9 | 31% | 31% | 0 / 0 / 0 |
| colored-skull-base ↔ exploded-skull | 27 | 93% | 93% | 0 / 0 / 0 |
| colored-skull-base ↔ vertebrae | 0 | 0% | 0% | — / — / — |
| overview-colored-skull ↔ exploded-skull | 8 | 28% | 28% | 0 / 0 / 0 |
| overview-colored-skull ↔ vertebrae | 0 | 0% | 0% | — / — / — |
| exploded-skull ↔ vertebrae | 0 | 0% | 0% | — / — / — |

## Piezas exclusivas (sin equivalente normalizado)

- **overview-skeleton**: 34 exclusivas — p.ej. Cervical_vertebrae_(C3), Cervical_vertebrae_(C4), Cervical_vertebrae_(C5), Cervical_vertebrae_(C6), Cervical_vertebrae_(C7), Lumbar_vertebrae_(L1), Lumbar_vertebrae_(L2), Lumbar_vertebrae_(L3)
- **upper-limb**: 398 exclusivas — p.ej. Thoracic_vertebra_(T1), Thoracic_vertebra_(T10), Thoracic_vertebra_(T11), Thoracic_vertebra_(T2), Thoracic_vertebra_(T3), Thoracic_vertebra_(T4), Thoracic_vertebra_(T5), Thoracic_vertebra_(T6)
- **lower-limb**: 406 exclusivas — p.ej. Acetabular_labrumr, Annulus_fibrosus_L1_L2, Art_cart_of_calcaneusr_, Art_cart_of_cuboid_boner, Art_cart_of_femur_distal_endr, Art_cart_of_femur_headr, Art_cart_of_fibula_proximal_tibiofibular_jointr, Art_cart_of_fibula_talofibular_jointr
- **hand**: 152 exclusivas — p.ej. 1st_metacarpal_bone, 2nd_metacarpal_bone, 3rd_metacarpal_bone, 4th_metacarpal_bone, 5th_metacarpal_bone, Capitate, Distal_phalanx_of_1st_finger, Distal_phalanx_of_2d_finger
- **colored-skull-base**: 1 exclusivas — p.ej. Lower_first_premolars
- **overview-colored-skull**: 0 exclusivas — p.ej. 
- **exploded-skull**: 2 exclusivas — p.ej. Lower_first_premolar, Maxilla_bone
- **vertebrae**: 0 exclusivas — p.ej. 

## Contenedores raíz por modelo

- **overview-skeleton**: Bones(36), Bones_right(98), Cartilages_right(10)
- **upper-limb**: Back - bones(18), Arm - bones(1), Arm - muscles(11), Arm - nerves(14), Arm - veins(7), Arm - arteries(12), Arm - capsules, ligaments, fasciae(10), Arm - cartilages(2), Arm - synovia, bursae(7), Back - cartilages(37), Forearm - arteries(9), Forearm - bones(2), Forearm - capsules, ligaments, fasciae(9), Forearm - cartilages(4), Forearm - muscles(26), Forearm - nerves(2), Forearm - synovia, bursae(3), Forearm - veins(4), Hand and wrist - arteries(15), Hand and wrist - bones(28), Hand and wrist - capsules, ligaments, fasciae(69), Hand and wrist - cartilages(12), Hand and wrist - synovia, bursae(12), Hand and wrist - muscles(28), Hand and wrist - nerves(13), Hand and wrist - veins(9), Head and neck - arteries(1), Head and neck - bones(7), Head and neck - cartilages(14), Head and neck - nerves(4), Pectoral girdle - arteries(12), Pectoral girdle - bones(2), Pectoral girdle - capsules, ligaments, fasciae(14), Pectoral girdle - cartilages(5), Pectoral girdle - muscles(24), Pectoral girdle - nerves(4), Pectoral girdle - synovia, bursae(7), Pectoral girdle - veins(1), Thorax - arteries(5), Thorax - bones(14), Thorax - cartilages(39), Thorax - nerves(13), Thorax - veins(2)
- **lower-limb**: Bones(40), Cartilages(36), Ligaments(72), Muscles(71), Fascia(14), Arteries(46), Veins(42), Nerves(47), Bursae(38), Overlays(46)
- **hand**: Bones(30), Bursae(1), Muscles(51), Fascia(3), Overlays(26), Cartilages(15), Ligaments(45), Veins(16), Arteries(20), Nerves(16)
- **colored-skull-base**: Bones(29)
- **overview-colored-skull**: Bones(8), Bones_right(21)
- **exploded-skull**: Bones(29)
- **vertebrae**: Bones(3)

## Plan de compuesto

- Total piezas: **1380**
- Por región: axial(36), upper(572), skull(58), lower(484), hand(230)
- Por tipo: bone(305), cartilage(174), ligament(270), muscle(190), tendon(46), fascia(28), artery(120), vein(81), nerve(113), bursa(48), other(5)
- Ocultas por dedup: overview-skeleton(88), lower-limb(1), upper-limb(204)
- Explosión: 28/29 pares emparejados
- Overlays (piel) muestra lower-limb: Adductor_canalr, Adductor_hiatusr, Adductor_minimus_overlayr, Annular_ligaments_of_1st_toe_A1-A5r, Annular_ligaments_of_2nd_toe_A1-A5r, Annular_ligaments_of_3rd_toe_A1-A5r
- Overlays (piel) muestra hand: Annular_ligament(A1)_of_1st_finger, Annular_ligament(A2)_of_1st_finger, Annular_ligaments_of_2nd_finger_A1-A5, Annular_ligaments_of_3rd_finger_A1-A5, Annular_ligaments_of_4th_finger_A1-A5, Annular_ligaments_of_5th_finger_A1-A5


## ESTRUCTURA DE ARCHIVOS

```
src/data/fitness/anatomy/anatomyGraph.test.ts
src/data/fitness/anatomy/anatomyHierarchy.ts
src/data/fitness/anatomy/bones.ts
src/data/fitness/anatomy/compositePlan.ts
src/data/fitness/anatomy/jointRom.ts
src/data/fitness/anatomy/joints.ts
src/data/fitness/anatomy/ligaments.ts
src/data/fitness/anatomy/meshCatalog.ts
src/data/fitness/anatomy/meshIndex.ts
src/data/fitness/anatomy/modelCatalog.ts
src/data/fitness/anatomy/muscles.ts
src/data/fitness/anatomy/nerves.ts
src/data/fitness/anatomy/overlayMarkers.ts
src/data/fitness/anatomy/tendons.ts
src/data/fitness/anatomy/types.ts
src/data/fitness/anatomy/__tests__/
src/data/fitness/anatomy/  jointRom.test.ts
src/data/fitness/anatomy/  meshCatalog.test.ts
src/data/fitness/anatomy/  meshMapping.test.ts
src/components/fitness/anatomy/AnatomyViewer.tsx
src/components/fitness/anatomy/composite.ts
src/components/fitness/anatomy/gltfCache.ts
src/components/fitness/anatomy/LibraryMuscles.tsx
src/components/fitness/anatomy/StructureThumbnail.tsx
src/components/fitness/anatomy/viewerLogic.ts
src/components/fitness/anatomy/__tests__/
src/components/fitness/anatomy/  composite.test.ts
src/components/fitness/anatomy/  viewerLogic.test.ts
```
