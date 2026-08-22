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
import { Box, RotateCcw, Layers, ChevronDown, ChevronUp, Scan, X, Loader2 } from 'lucide-react';
import useIsMobile from '../../ui/useIsMobile';
import {
  ANATOMY_MODELS,
  anatomyGraphStats,
  getStructuresForModel,
  getStructureById,
  resolveHighlightNames,
} from '../../../data/fitness/anatomyGraph';
import type { AnatomyStructure } from '../../../data/fitness/anatomy/types';

const HIGHLIGHT_COLOR = 0x35d0ff;
const HIGHLIGHT_EMISSIVE = 0x0e7fa8;

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

  // ── highlight de la estructura seleccionada ────────────────────────────────
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
    }
    originalsRef.current.clear();
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
        if (!mat.emissive) continue;
        mat.emissive = new THREE.Color(HIGHLIGHT_EMISSIVE);
        mat.emissiveIntensity = 1.4;
        mat.color.lerp(new THREE.Color(HIGHLIGHT_COLOR), 0.35);
      }
    }
  }, []);

  useEffect(() => {
    if (loading || !selectedStructure) return;
    const names = resolveHighlightNames(selectedStructure, model.key);
    if (names.length) applyHighlight(names);
  }, [selectedStructure, model.key, loading, applyHighlight]);

  // ── carga del modelo (diferida por modelo) ─────────────────────────────────
  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setError(null);
    const loader = new GLTFLoader();
    const draco = new DRACOLoader();
    // decoder self-hosted (copiado de three/examples/jsm/libs/draco) — sin CDN externo
    draco.setDecoderPath('/models/anatomy/draco/');
    loader.setDRACOLoader(draco);

    loader.load(
      model.file,
      (gltf) => {
        if (cancelled || !modelRootRef.current) return;
        // limpiar modelo anterior
        const root = modelRootRef.current;
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
    controls.enablePan = false;

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

    const pickAt = (cx: number, cy: number): THREE.Object3D | null => {
      const rect = renderer.domElement.getBoundingClientRect();
      pointer.x = ((cx - rect.left) / rect.width) * 2 - 1;
      pointer.y = -((cy - rect.top) / rect.height) * 2 + 1;
      raycaster.setFromCamera(pointer, camera);
      const hits = raycaster.intersectObject(root, true);
      for (const h of hits) {
        let o: THREE.Object3D | null = h.object;
        while (o && o !== root) {
          if (o.name && !o.name.startsWith('node-')) return o;
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
        if (mat?.emissive) {
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
      }
    };
    const onClick = (e: PointerEvent) => {
      if (loadingRef.current) return;
      const hit = pickAt(e.clientX, e.clientY);
      if (!hit) return;
      // seleccionar estructura del grafo cuyo mapping incluya esta pieza (si existe)
      const match = structuresForModelRef.current.find((s) =>
        (s.modelMeshes[modelKeyRef.current] ?? []).includes(hit.name),
      );
      if (match) setSelectedId(match.id);
      setHoverName(hit.name);
    };

    const dom = renderer.domElement;
    dom.addEventListener('pointermove', onMove);
    dom.addEventListener('pointerdown', onClick);
    disposablesRef.current.push(() => {
      dom.removeEventListener('pointermove', onMove);
      dom.removeEventListener('pointerdown', onClick);
    });

    const loop = () => {
      controls.update();
      renderer.render(scene, camera);
      if (!stoppedRef.current) rafRef.current = requestAnimationFrame(loop);
    };

    if (reducedMotion) {
      // una sola pasada estática; OrbitControls deshabilitado
      controls.enabled = false;
      renderer.render(scene, camera);
    } else {
      loop();
    }

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
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // sincronizar refs espejo (los handlers del canvas leen de aquí)
  loadingRef.current = loading;
  modelKeyRef.current = modelKey;
  structuresForModelRef.current = structuresForModel;

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
      </div>

      {/* CANVAS + PANEL */}
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
            <span style={{ fontSize: '0.8rem', fontWeight: 700 }}>Estructuras en este modelo ({structuresForModel.length})</span>
            {panelOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>
          {panelOpen && (
            <div style={{ maxHeight: isMobile ? 220 : 420, overflowY: 'auto', padding: '0 10px 12px', display: 'flex', flexDirection: 'column', gap: 4 }}>
              {structuresForModel.map((s) => {
                const active = selectedId === s.id;
                return (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => setSelectedId(active ? null : s.id)}
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
