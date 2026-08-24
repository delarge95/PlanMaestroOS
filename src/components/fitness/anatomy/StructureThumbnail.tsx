// src/components/fitness/anatomy/StructureThumbnail.tsx
// AG-ANATOM — miniatura 3D de una estructura (feedback usuario #7): render pequeño
// del propio GLB con todo el modelo en "fantasma" y la pieza resaltada. Interactiva
// (rotación por arrastre + auto-rotación) y clicable → abre el visor completo con
// la pieza preseleccionada. Usa el cache compartido de modelos (gltfCache) — las
// geometrías son del cache y NO se liberan aquí; los materiales sí son propios.
import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { Loader2, Maximize2 } from 'lucide-react';
import {
  ANATOMY_MODELS,
  anatomyViewerUrl,
  bestModelKeyForStructure,
  getStructureById,
} from '../../../data/fitness/anatomyGraph';

const GHOST_OPACITY = 0.07;
const HIGHLIGHT_COLOR = 0x35d0ff;
const HIGHLIGHT_EMISSIVE = 0x0e7fa8;

interface Props {
  structureId: string;
  height?: number;
}

export default function StructureThumbnail({ structureId, height = 170 }: Props) {
  const mountRef = useRef<HTMLDivElement | null>(null);
  const pendingCleanup = useRef<null | (() => void)>(null);
  const [status, setStatus] = useState<'loading' | 'ready' | 'error' | 'nomodel'>('loading');
  const [reducedMotion] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  );

  const structure = getStructureById(structureId);
  const modelKey = structure ? bestModelKeyForStructure(structure) : undefined;
  const model = modelKey ? ANATOMY_MODELS.find((m) => m.key === modelKey) : undefined;
  const viewerUrl = structure ? anatomyViewerUrl(structure) : undefined;

  useEffect(() => {
    if (!structure || !model || !viewerUrl) {
      setStatus('nomodel');
      return;
    }
    let disposed = false;
    let raf = 0;
    let controls: OrbitControls | null = null;
    let renderer: THREE.WebGLRenderer | null = null;
    const mount = mountRef.current;
    if (!mount) return;
    setStatus('loading');

    const goViewer = () => {
      if (!disposed) window.location.href = viewerUrl;
    };
    let downX = 0;
    let downY = 0;
    let moved = false;
    const onDown = (e: PointerEvent) => { downX = e.clientX; downY = e.clientY; moved = false; };
    const onDrag = (e: PointerEvent) => {
      if (Math.abs(e.clientX - downX) > 6 || Math.abs(e.clientY - downY) > 6) moved = true;
    };
    const onUp = () => { if (!moved) goViewer(); };

    (async () => {
      try {
        const { loadAnatomyModel, cloneScene } = await import('./gltfCache');
        const gltf = await loadAnatomyModel(model.file);
        if (disposed || !mountRef.current) return;

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100);
        renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false, powerPreference: 'low-power' });
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
        renderer.domElement.style.touchAction = 'none';
        renderer.domElement.style.cursor = 'pointer';
        mountRef.current.appendChild(renderer.domElement);
        scene.add(new THREE.HemisphereLight(0xffffff, 0x334, 1.2));
        const key = new THREE.DirectionalLight(0xffffff, 1.6);
        key.position.set(3, 6, 4);
        scene.add(key);

        const root = cloneScene(gltf);
        scene.add(root);

        // fantasma + resaltado de la pieza
        const wanted = new Set(structure.modelMeshes[model.key] ?? []);
        const highlightMeshes: THREE.Object3D[] = [];
        root.traverse((o) => {
          const mesh = o as THREE.Mesh;
          if (!mesh.isMesh) return;
          const mat = mesh.material as THREE.MeshStandardMaterial | undefined;
          if (!mat) return;
          if (o.name && (wanted.has(o.name) || wanted.has(mesh.geometry?.name ?? ''))) {
            highlightMeshes.push(mesh);
            if (mat.emissive) {
              mat.emissive = new THREE.Color(HIGHLIGHT_EMISSIVE);
              mat.emissiveIntensity = 1.6;
            }
            if (mat.color) mat.color.lerp(new THREE.Color(HIGHLIGHT_COLOR), 0.45);
          } else {
            mat.transparent = true;
            mat.opacity = GHOST_OPACITY;
            mat.depthWrite = false;
          }
        });

        // encuadre sobre la pieza (fallback: modelo entero)
        const box = new THREE.Box3();
        if (highlightMeshes.length) {
          for (const m of highlightMeshes) box.expandByObject(m);
        } else {
          box.setFromObject(root);
        }
        const size = box.getSize(new THREE.Vector3());
        const center = box.getCenter(new THREE.Vector3());
        const maxDim = Math.max(size.x, size.y, size.z) || 1;
        camera.position.set(center.x + maxDim * 1.1, center.y + maxDim * 0.6, center.z + maxDim * 1.3);
        camera.near = maxDim / 100;
        camera.far = maxDim * 20;
        camera.lookAt(center);

        controls = new OrbitControls(camera, renderer.domElement);
        controls.target.copy(center);
        controls.enableZoom = false;
        controls.enablePan = false;
        controls.autoRotate = !reducedMotion;
        controls.autoRotateSpeed = 1.4;

        const resize = () => {
          const w = mount.clientWidth || 1;
          const h = mount.clientHeight || 1;
          renderer!.setSize(w, h, false);
          camera.aspect = w / h;
          camera.updateProjectionMatrix();
        };
        resize();
        const ro = new ResizeObserver(resize);
        ro.observe(mountRef.current);

        const dom = renderer.domElement;
        dom.addEventListener('pointerdown', onDown);
        dom.addEventListener('pointermove', onDrag);
        dom.addEventListener('pointerup', onUp);

        setStatus('ready');
        const loop = () => {
          controls!.update();
          renderer!.render(scene, camera);
          if (!disposed) raf = requestAnimationFrame(loop);
        };
        if (reducedMotion) renderer.render(scene, camera);
        else loop();

        return () => {
          ro.disconnect();
          dom.removeEventListener('pointerdown', onDown);
          dom.removeEventListener('pointermove', onDrag);
          dom.removeEventListener('pointerup', onUp);
        };
      } catch {
        if (!disposed) setStatus('error');
      }
    })().then((cleanup) => {
      if (disposed && typeof cleanup === 'function') cleanup();
      else if (typeof cleanup === 'function') pendingCleanup.current = cleanup;
    });

    return () => {
      disposed = true;
      cancelAnimationFrame(raf);
      if (typeof pendingCleanup.current === 'function') pendingCleanup.current();
      pendingCleanup.current = null;
      controls?.dispose();
      if (renderer) {
        renderer.dispose();
        if (renderer.domElement.parentElement) renderer.domElement.parentElement.removeChild(renderer.domElement);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [structureId, model?.file]);

  if (status === 'nomodel' || !viewerUrl) return null;

  return (
    <div
      ref={mountRef}
      role="link"
      aria-label={`Ver ${structure?.nameEs ?? 'estructura'} en 3D`}
      title="Rotar arrastrando; clic para abrir el visor 3D completo"
      style={{
        position: 'relative', width: '100%', height, borderRadius: 12, overflow: 'hidden',
        background: '#0a0b0e', border: '1px solid var(--color-border-subtle, rgba(255,255,255,0.08))',
        cursor: 'pointer', touchAction: 'none',
      }}
    >
      {status !== 'ready' && (
        <div style={{ position: 'absolute', inset: 0, display: 'grid', placeItems: 'center', color: 'var(--text-secondary)', fontSize: '0.72rem' }}>
          {status === 'error' ? 'No se pudo cargar el modelo 3D' : (<span style={{ display: 'flex', alignItems: 'center', gap: 6 }}><Loader2 size={13} /> Miniatura 3D…</span>)}
        </div>
      )}
      {status === 'ready' && (
        <span style={{ position: 'absolute', bottom: 8, right: 8, display: 'inline-flex', alignItems: 'center', gap: 4, background: 'rgba(10,11,14,0.85)', border: '1px solid rgba(53,208,255,0.4)', borderRadius: 8, padding: '3px 8px', fontSize: '0.66rem', color: '#7fdcff', fontWeight: 700, pointerEvents: 'none' }}>
          <Maximize2 size={11} /> Abrir visor 3D
        </span>
      )}
    </div>
  );
}
