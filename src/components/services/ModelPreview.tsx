/**
 * ModelPreview.tsx — Previews WebGL procedurales para los sliders del cotizador.
 * Canvas transparente sin marco; reacciona en tiempo real al slider sin
 * reconstruir el contexto WebGL (stateRef + render loop).
 *
 * Ciclo 3 (feedback Alexander):
 * - detail:  slider CONTINUO — la geometría crece progresivamente entre los
 *            puntos discretos 1–5 (grupos con ventana de aparición) + contador
 *            de tris interpolado.
 * - pieces:  ensamblaje + explosión al idle 3 s.
 * - story:   replante 1.3 — catálogo de ANIMACIONES que se añaden con el slider
 *            y se reproducen en secuencia (giro, explosión, primer plano, órbita,
 *            salto, despliegue, tumble, presentación...). Timeline de chips bajo
 *            el canvas con la animación activa resaltada.
 * - variants: producto configurable; la selección la manda el chip interactivo.
 * - surface: morph continuo cubo→esfera (placeholder del yunque de Alexander).
 */

import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import { EN, TRIS_ETIQUETAS } from '../../data/services/i18n';
import { loadHolybro, applyFinish, tagAssemblySteps, revealSteps, HOLYBRO_STEPS } from './holybro';
import type { FinishKind } from './holybro';
import type { Lang } from '../../data/services/i18n';

export type PreviewMode = 'detail' | 'pieces' | 'story' | 'variants' | 'surface' | 'finish' | 'assembly' | 'hotspots' | 'shader-dial';

/** Catálogo de animaciones del modo story (1.3 replante). */
export const STORY_ANIMS = [
  { es: 'Giro', en: 'Spin', glyph: '↻' },
  { es: 'Explosión', en: 'Explode', glyph: '✦' },
  { es: 'Primer plano', en: 'Close-up', glyph: '⌕' },
  { es: 'Órbita', en: 'Orbit', glyph: '◐' },
  { es: 'Salto', en: 'Hop', glyph: '↑' },
  { es: 'Despliegue', en: 'Deploy', glyph: '✳' },
  { es: 'Tumble', en: 'Tumble', glyph: '⟳' },
  { es: 'Presentación', en: 'Showcase', glyph: '★' },
  { es: 'Giro inverso', en: 'Reverse spin', glyph: '↺' },
  { es: 'Pulso', en: 'Pulse', glyph: '◉' },
] as const;
const STORY_DURATION = 2.4; // segundos por animación

/** Interpolación del contador de tris entre etapas (trazable a POLY_POR_NIVEL). */
const POLY = [4000, 9000, 40000, 120000, 300000];
const polyLabel = (d: number) => {
  const f = Math.max(1, Math.min(5, d));
  const i = Math.min(3, Math.floor(f - 1));
  const frac = f - 1 - i;
  const v = POLY[i] + (POLY[i + 1] - POLY[i]) * frac;
  return `≈ ${v >= 1000 ? `${Math.round(v / 1000)}k` : Math.round(v)} tris`;
};

const smooth = (x: number) => { const t = Math.max(0, Math.min(1, x)); return t * t * (3 - 2 * t); };
/** Escala de un grupo cuya ventana de aparición es [a, b] sobre el slider d. */
const grow = (d: number, a: number, b: number) => smooth((d - a) / (b - a));

export function ModelPreview({ mode, detail = 3, pieces = 8, story = 5, surface = 1, variantSel, finish = 'detallado', estilo = 2, hotspots = 0, lang = 'es', height = 150 }: {
  mode: PreviewMode;
  /** Slider continuo 1–5 (detail). */
  detail?: number;
  /** Slider piezas 1–50 (pieces / assembly). */
  pieces?: number;
  /** Nº de animaciones en la línea de tiempo 1–10 (story). */
  story?: number;
  /** Slider superficie 1–5 continuo (surface): 1 = cubo duro, 5 = esfera orgánica. */
  surface?: number;
  /** Selección del configurador (variants): índices de color/material/accesorio. */
  variantSel?: { c: number; m: number; a: number };
  /** Acabado con el HolyBro X500 real (finish). */
  finish?: FinishKind;
  /** Estilo de shader 1–5 (shader-dial): 1 fotorrealista → 5 holograma. */
  estilo?: number;
  /** Nº de hotspots (hotspots, sección 3). */
  hotspots?: number;
  lang?: Lang;
  height?: number;
}) {
  const mountRef = useRef<HTMLDivElement>(null);
  const uiRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const stateRef = useRef({ mode, detail, pieces, story, surface, variantSel, finish, estilo, hotspots, lang });
  stateRef.current = { mode, detail, pieces, story, surface, variantSel, finish, estilo, hotspots, lang };

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;
    const st = stateRef.current;

    const scene = new THREE.Scene();
    const cam = new THREE.PerspectiveCamera(38, 1, 0.1, 60);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    mount.appendChild(renderer.domElement);

    const hemi = new THREE.HemisphereLight(0xffffff, 0xdde4ee, 1.05);
    scene.add(hemi);
    const key = new THREE.DirectionalLight(0xffffff, 1.4); key.position.set(3, 5, 4); scene.add(key);
    const rim = new THREE.DirectionalLight(0x9ecbff, 0.8); rim.position.set(-4, 2, -3); scene.add(rim);
    const pmrem = new THREE.PMREMGenerator(renderer);
    const envTex = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
    scene.environment = envTex;

    const group = new THREE.Group();
    scene.add(group);

    // ── Materiales compartidos ──
    const bodyMat = new THREE.MeshStandardMaterial({ color: 0xeef0f2, metalness: 0.3, roughness: 0.4 });
    const solidMat = new THREE.MeshStandardMaterial({ color: 0xdfe3e8, metalness: 0.1, roughness: 0.7, flatShading: true });
    const accentMat = new THREE.MeshStandardMaterial({ color: 0x0071e3, metalness: 0.5, roughness: 0.3 });
    const darkMat = new THREE.MeshStandardMaterial({ color: 0x3a3f47, metalness: 0.6, roughness: 0.35 });
    const wireMat = new THREE.MeshBasicMaterial({ color: 0x0071e3, wireframe: true, transparent: true, opacity: 0.9 });
    const setEnv = (v: number) => { bodyMat.envMapIntensity = v; accentMat.envMapIntensity = v; darkMat.envMapIntensity = v; };

    // ═══ detail (1.1): MORPH real — edges → sólido → cuerpo suave en UNA malla ═══
    const detailRoot = new THREE.Group();
    group.add(detailRoot);
    type Part = { obj: THREE.Object3D; a: number; b: number; shrinkAt?: [number, number] };
    const detailParts: Part[] = [];
    const addPart = (obj: THREE.Object3D, a: number, b: number) => {
      obj.scale.setScalar(a <= 1 ? 1 : 0.0001);
      detailParts.push({ obj, a, b });
      detailRoot.add(obj);
    };
    // Malla única: caja merged (20 seg) que se MORPHEA a píldora en [2,3]
    const detailGeo = new THREE.BoxGeometry(1.3, 0.9, 1.0, 16, 12, 12);
    detailGeo.translate(0, 0.15, 0);
    const detailMesh = new THREE.Mesh(detailGeo, solidMat);
    detailMesh.material = solidMat.clone();
    (detailMesh.material as THREE.MeshStandardMaterial).transparent = true;
    (detailMesh.material as THREE.MeshStandardMaterial).opacity = 0;
    detailRoot.add(detailMesh);
    const detailPos0 = (detailGeo.getAttribute('position') as THREE.BufferAttribute).array.slice();
    // Aristas azules (etapa 1): el wireframe ES esta malla
    const edges = new THREE.LineSegments(
      new THREE.EdgesGeometry(new THREE.BoxGeometry(1.3, 0.9, 1.0).translate(0, 0.15, 0)),
      new THREE.LineBasicMaterial({ color: 0x0071e3, transparent: true, opacity: 1 }),
    );
    detailRoot.add(edges);
    // Base placa (aparece rellenando en [1.5, 2.2], permanece)
    const plate = new THREE.Mesh(new THREE.BoxGeometry(2.0, 0.18, 1.4), darkMat);
    plate.position.y = -0.5;
    addPart(plate, 1.5, 2.2);
    // Tapa superior (etapa 1–2): se funde en el morph hacia la píldora
    const topBox = new THREE.Mesh(new THREE.BoxGeometry(0.7, 0.35, 0.7), solidMat);
    topBox.position.y = 0.78;
    addPart(topBox, 1.35, 2.0);
    topBox.userData.shrinkWindow = [2.0, 2.7] as [number, number];
    detailParts[detailParts.length - 1].shrinkAt = [2.0, 2.7];
    // Morph box → píldora (cuerpo suave de la etapa 3)
    const pillR = 0.52, pillHC = 0.18, pillCY = 0.32;
    const morphToPill = (t: number) => {
      const posAttr = detailMesh.geometry.getAttribute('position') as THREE.BufferAttribute;
      const arr = posAttr.array as Float32Array;
      for (let i = 0; i < arr.length; i += 3) {
        const sx = detailPos0[i], sy = detailPos0[i + 1], sz = detailPos0[i + 2];
        const yl = sy - pillCY;
        const lxz = Math.sqrt(sx * sx + sz * sz) || 1;
        let tx: number, ty: number, tz: number;
        if (Math.abs(yl) <= pillHC) {
          tx = (sx / lxz) * pillR; ty = sy; tz = (sz / lxz) * pillR;
        } else {
          const sgn = Math.sign(yl);
          const vx = sx, vy = Math.abs(yl) - pillHC, vz = sz;
          const vl = Math.sqrt(vx * vx + vy * vy + vz * vz) || 1;
          tx = (vx / vl) * pillR; ty = pillCY + sgn * (pillHC + (vy / vl) * pillR); tz = (vz / vl) * pillR;
        }
        arr[i] = sx + (tx - sx) * t;
        arr[i + 1] = sy + (ty - sy) * t;
        arr[i + 2] = sz + (tz - sz) * t;
      }
      posAttr.needsUpdate = true;
      detailMesh.geometry.computeVertexNormals();
    };
    let lastFlat = true;
    let builtDetailMode = true;
    // Etapa 4: detalles — anillo, pernos, asa
    const ring4 = new THREE.Mesh(new THREE.TorusGeometry(0.82, 0.055, 14, 52), accentMat);
    ring4.rotation.x = Math.PI / 2; ring4.position.y = -0.32;
    addPart(ring4, 2.9, 3.5);
    for (let i = 0; i < 6; i++) {
      const a = (i / 6) * Math.PI * 2;
      const bolt = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.07, 0.14, 12), darkMat);
      bolt.position.set(Math.cos(a) * 0.92, -0.42, Math.sin(a) * 0.92);
      addPart(bolt, 3.15 + i * 0.06, 3.65 + i * 0.06);
    }
    const handle = new THREE.Mesh(new THREE.BoxGeometry(0.34, 0.12, 0.16), darkMat);
    handle.position.y = 1.34;
    addPart(handle, 3.6, 4.1);
    // Etapa 5: pulido
    const strip = new THREE.Mesh(new THREE.TorusGeometry(0.76, 0.028, 10, 52), accentMat);
    strip.rotation.x = Math.PI / 2; strip.position.y = 0.55;
    addPart(strip, 4.05, 4.6);
    const panel = new THREE.Mesh(new THREE.TorusGeometry(0.805, 0.012, 8, 56), darkMat);
    panel.rotation.x = Math.PI / 2; panel.position.y = 0.1;
    addPart(panel, 4.3, 4.8);
    detailRoot.visible = true;

    // ═══ pieces (1.2): hub + ensamblaje + explosión al idle ═══
    const hub = new THREE.Group();
    const hubBase = new THREE.Mesh(new THREE.CylinderGeometry(0.85, 1.0, 0.4, 36), darkMat); hubBase.position.y = -0.35;
    const hubBody = new THREE.Mesh(new THREE.CylinderGeometry(0.6, 0.66, 0.75, 36), bodyMat); hubBody.position.y = 0.2;
    const hubCap = new THREE.Mesh(new THREE.SphereGeometry(0.6, 32, 16, 0, Math.PI * 2, 0, Math.PI / 2), accentMat); hubCap.position.y = 0.575;
    hub.add(hubBase, hubBody, hubCap);
    group.add(hub);
    const satRoot = new THREE.Group();
    group.add(satRoot);
    const PART_TYPES = [
      () => new THREE.CylinderGeometry(0.09, 0.09, 0.34, 12),
      () => new THREE.TorusGeometry(0.16, 0.055, 10, 22),
      () => new THREE.BoxGeometry(0.3, 0.12, 0.2),
      () => new THREE.CylinderGeometry(0.045, 0.045, 0.5, 8),
      () => new THREE.DodecahedronGeometry(0.15),
      () => new THREE.SphereGeometry(0.11, 14, 10),
    ];
    const MAX_VISIBLE = 18;
    type Sat = { mesh: THREE.Mesh; dir: THREE.Vector3; assembled: THREE.Vector3; born: number };
    let sats: Sat[] = [];
    let builtPieces = -1;
    let explode = 0, explodeTarget = 0;
    let lastPiecesChange = performance.now();
    const syncParts = (n: number) => {
      while (sats.length > n) { const s = sats.pop()!; satRoot.remove(s.mesh); s.mesh.geometry.dispose(); }
      while (sats.length < n) {
        const i = sats.length;
        const mesh = new THREE.Mesh(PART_TYPES[i % PART_TYPES.length](), i % 3 === 0 ? accentMat : i % 3 === 1 ? darkMat : bodyMat);
        const angle = (i / n) * Math.PI * 2 + i * 0.35;
        const radius = 1.55 + (i % 3) * 0.38;
        const pos = new THREE.Vector3(Math.cos(angle) * radius, -0.25 + (i % 4) * 0.22, Math.sin(angle) * radius);
        mesh.position.copy(pos);
        satRoot.add(mesh);
        sats.push({ mesh, dir: new THREE.Vector3(pos.x, 0.15, pos.z).normalize(), assembled: pos.clone(), born: performance.now() });
      }
      lastPiecesChange = performance.now();
      explodeTarget = 0;
    };

    // ═══ Producto compartido por story / variants ═══
    const prod = new THREE.Group();
    const pBase = new THREE.Mesh(new THREE.CylinderGeometry(0.66, 0.74, 0.2, 36), darkMat); pBase.position.y = -0.62;
    const pBody = new THREE.Mesh(new THREE.CapsuleGeometry(0.5, 0.72, 8, 28), bodyMat); pBody.position.y = 0.18;
    const pRing = new THREE.Mesh(new THREE.TorusGeometry(0.54, 0.055, 12, 40), accentMat); pRing.rotation.x = Math.PI / 2; pRing.position.y = -0.1;
    const pCap = new THREE.Mesh(new THREE.SphereGeometry(0.34, 24, 14, 0, Math.PI * 2, 0, Math.PI / 2), accentMat); pCap.position.y = 0.82;
    prod.add(pBase, pBody, pRing, pCap);
    const storySats: THREE.Vector3[] = [];
    for (let i = 0; i < 5; i++) {
      const a = (i / 5) * Math.PI * 2;
      const s = new THREE.Mesh(i % 2 ? new THREE.CylinderGeometry(0.07, 0.07, 0.3, 10) : new THREE.SphereGeometry(0.1, 12, 8), i % 2 ? darkMat : accentMat);
      s.position.set(Math.cos(a) * 0.72, 0.1 + (i % 2) * 0.35, Math.sin(a) * 0.72);
      storySats.push(s.position.clone());
      s.userData.home = s.position.clone();
      prod.add(s);
    }
    group.add(prod);

    // ═══ surface: morph cubo→esfera ═══
    const morphRoot = new THREE.Group();
    group.add(morphRoot);
    let boxGeo: THREE.BufferGeometry = new THREE.BoxGeometry(1.5, 1.5, 1.5, 20, 20, 20);
    const morph = new THREE.Mesh(boxGeo, bodyMat);
    morphRoot.add(morph);
    let cubePos: ArrayLike<number> = (boxGeo.getAttribute('position') as THREE.BufferAttribute).array;
    const tmpV = new THREE.Vector3();
    let lastMorphT = -1;
    const applyMorph = (t01: number) => {
      const t = smooth(t01);
      const posAttr = morph.geometry.getAttribute('position') as THREE.BufferAttribute;
      const arr = posAttr.array as Float32Array;
      const radius = 1.02;
      for (let i = 0; i < arr.length; i += 3) {
        const sx = cubePos[i], sy = cubePos[i + 1], sz = cubePos[i + 2];
        const len = Math.sqrt(sx * sx + sy * sy + sz * sz) || 1;
        arr[i] = sx + ((sx / len) * radius - sx) * t;
        arr[i + 1] = sy + ((sy / len) * radius - sy) * t;
        arr[i + 2] = sz + ((sz / len) * radius - sz) * t;
      }
      posAttr.needsUpdate = true;
      morph.geometry.computeVertexNormals();
      bodyMat.metalness = 0.5 - t * 0.45;
      bodyMat.roughness = 0.3 + t * 0.5;
    };
    // Vertices compartidos (merge) para que la esfera final quede suave
    import('three/examples/jsm/utils/BufferGeometryUtils.js')
      .then(({ mergeVertices }) => {
        const merged = mergeVertices(boxGeo);
        boxGeo.dispose();
        boxGeo = merged;
        morph.geometry = merged;
        cubePos = (merged.getAttribute('position') as THREE.BufferAttribute).array;
        applyMorph((stateRef.current.surface - 1) / 4);
      })
      .catch(() => { /* sin merge, el morph funciona igual con caras separadas */ });
    applyMorph((st.surface - 1) / 4);

    // ═══ variants: producto configurable ═══
    const colorTarget = new THREE.Color(0xeef0f2);
    const matTarget = { roughness: 0.4, metalness: 0.3 };
    const VARIANT_HEX = [0x3a3f47, 0xeef0f2, 0x0071e3, 0xff6b57, 0x2e7d4f, 0xc9b99a];
    const applyVariant = (sel?: { c: number; m: number; a: number }) => {
      if (!sel) return;
      colorTarget.setHex(VARIANT_HEX[sel.c % VARIANT_HEX.length]);
      const mats = [{ r: 0.75, m: 0.05 }, { r: 0.18, m: 0.1 }, { r: 0.35, m: 0.85 }];
      matTarget.roughness = mats[sel.m % mats.length].r;
      matTarget.metalness = mats[sel.m % mats.length].m;
      pRing.visible = sel.a % 3 !== 2;
      pCap.visible = sel.a % 3 !== 1;
    };

    // Visibilidad por modo
    const applyModeVisibility = (m: PreviewMode) => {
      detailRoot.visible = m === 'detail';
      hub.visible = satRoot.visible = m === 'pieces';
      prod.visible = m === 'story' || m === 'variants' || m === 'hotspots' || m === 'shader-dial';
      morphRoot.visible = m === 'surface';
      prod.children.forEach((c, i) => { if (i >= 4) c.visible = m === 'story'; });
      if (m === 'variants' || m === 'shader-dial') { pRing.visible = true; pCap.visible = true; }
      if (m === 'detail') setEnv(0.9);
      if (m === 'finish' || m === 'assembly') {
        setEnv(2.4);
        key.intensity = 3.2;
        hemi.intensity = 1.6;
        renderer.toneMappingExposure = 1.45;
        startHolybro();
      } else {
        key.intensity = 1.4;
        hemi.intensity = 1.05;
        renderer.toneMappingExposure = 1.0;
      }
    };

    // ═══ HolyBro X500 real: finish (acabados) + assembly (piezas progresivas) ═══
    const holybroRoot = new THREE.Group();
    group.add(holybroRoot);
    let holybroStarted = false;
    let holybroReady: THREE.Group | null = null;
    let lastFinish: FinishKind | null = null;
    let lastStepCount = -1;
    function startHolybro() {
      if (holybroStarted) return;
      holybroStarted = true;
      loadHolybro()
        .then(root => {
          tagAssemblySteps(root);
          holybroRoot.add(root);
          holybroReady = root;
          revealSteps(root, 99);
          applyFinish(root, stateRef.current.mode === "assembly" ? "variado" : (stateRef.current.finish ?? "detallado"));
          applyFinish(root, stateRef.current.finish ?? 'detallado');
          lastFinish = stateRef.current.finish ?? 'detallado';
          lastStepCount = -1;
        })
        .catch(() => { holybroStarted = false; });
    }

    // ── Hotspots (sección 3): marcadores que pulsan sobre el producto ──
    const markerGroup = new THREE.Group();
    group.add(markerGroup);
    const ANCHORS: Array<[number, number, number]> = [
      [0, 1.05, 0], [0.55, 0.45, 0.35], [-0.55, 0.45, 0.35], [0.55, 0.45, -0.35], [-0.55, 0.45, -0.35],
      [0.7, -0.5, 0.45], [-0.7, -0.5, 0.45], [0.7, -0.5, -0.45], [-0.7, -0.5, -0.45], [0, -0.35, 0.72],
      [0, -0.35, -0.72], [0.62, 0.1, 0], [-0.62, 0.1, 0],
    ];
    const markers = ANCHORS.map((pos, i) => {
      const m = new THREE.Mesh(new THREE.SphereGeometry(0.075, 14, 10), accentMat);
      m.position.set(...pos);
      m.userData.i = i;
      markerGroup.add(m);
      return m;
    });
    markerGroup.visible = false;

    // ── shader-dial: presets de material sobre el producto ──
    let toonMat: THREE.MeshToonMaterial | null = null;
    let holoMat: THREE.ShaderMaterial | null = null;
    let lastEstilo = -1;
    const stdSaved: Array<{ mesh: THREE.Mesh; mat: THREE.Material }> = [];
    const saveStd = () => {
      if (stdSaved.length) return;
      for (const m of [pBase, pBody, pRing, pCap]) stdSaved.push({ mesh: m, mat: m.material });
    };
    const gradientMap = (() => {
      const data = new Uint8Array([80, 160, 255]);
      const tex = new THREE.DataTexture(data, 3, 1, THREE.RedFormat);
      tex.needsUpdate = true;
      return tex;
    })();
    const applyEstilo = (e: number) => {
      const estilo = Math.max(1, Math.min(5, Math.round(e)));
      if (estilo === lastEstilo) return;
      lastEstilo = estilo;
      saveStd();
      if (estilo <= 3) {
        for (const { mesh, mat } of stdSaved) mesh.material = mat;
        setEnv(estilo === 1 ? 1.3 : estilo === 2 ? 0.9 : 0.7);
        bodyMat.metalness = estilo === 1 ? 0.6 : 0.3;
        bodyMat.roughness = estilo === 1 ? 0.25 : 0.45;
        bodyMat.color.setHex(estilo === 3 ? 0xf3e9d6 : 0xeef0f2);
        accentMat.emissiveIntensity = 0;
        return;
      }
      if (estilo === 4) {
        if (!toonMat) {
          toonMat = new THREE.MeshToonMaterial({ color: 0xf2f4f8, gradientMap });
        }
        const tMat = toonMat as unknown as THREE.MeshStandardMaterial;
        pBody.material = tMat; pCap.material = tMat; pBase.material = tMat;
        setEnv(0);
        return;
      }
      if (!holoMat) {
        holoMat = new THREE.ShaderMaterial({
          transparent: true, depthWrite: false, side: THREE.DoubleSide, blending: THREE.AdditiveBlending,
          uniforms: { uTime: { value: 0 }, uColor: { value: new THREE.Color(0x2997ff) } },
          vertexShader: `varying vec3 vN; varying vec3 vP; void main(){ vN = normalize(normalMatrix * normal); vec4 wp = modelViewMatrix * vec4(position,1.0); vP = wp.xyz; gl_Position = projectionMatrix * wp; }`,
          fragmentShader: `uniform float uTime; uniform vec3 uColor; varying vec3 vN; varying vec3 vP;
            void main(){
              float fres = pow(1.0 - abs(normalize(vN).z), 2.2);
              float scan = 0.55 + 0.45 * sin((vP.y + uTime * 40.0) * 14.0);
              float a = fres * (0.35 + 0.65 * scan);
              gl_FragColor = vec4(uColor * (0.7 + fres), a * 0.9);
            }`,
        });
      }
      const hM = holoMat as unknown as THREE.MeshStandardMaterial;
      pBody.material = hM; pCap.material = hM; pBase.material = hM; pRing.material = hM;
      setEnv(0);
    };

    // ── Interacción: arrastrar para rotar + inercia ──
    let dragging = false, lastX = 0, lastY = 0;
    let rotY = 0.6, rotX = 0.12, velY = 0;
    const el = renderer.domElement;
    el.style.touchAction = 'pan-y';
    const onDown = (e: PointerEvent) => { dragging = true; lastX = e.clientX; lastY = e.clientY; el.setPointerCapture(e.pointerId); };
    const onMove = (e: PointerEvent) => {
      if (!dragging) return;
      velY = (e.clientX - lastX) * 0.006;
      rotY += velY;
      rotX = Math.max(-0.5, Math.min(0.6, rotX + (e.clientY - lastY) * 0.004));
      lastX = e.clientX; lastY = e.clientY;
    };
    const onUp = () => { dragging = false; };
    el.addEventListener('pointerdown', onDown);
    el.addEventListener('pointermove', onMove);
    el.addEventListener('pointerup', onUp);
    el.addEventListener('pointercancel', onUp);

    // ── Resize + visibilidad ──
    const resize = () => {
      const w = mount.clientWidth || 260, h = mount.clientHeight || height;
      renderer.setSize(w, h, false);
      cam.aspect = w / h; cam.updateProjectionMatrix();
    };
    resize();
    const ro = new ResizeObserver(resize); ro.observe(mount);
    let visible = true;
    const io = new IntersectionObserver(([e]) => { visible = e.isIntersecting; });
    io.observe(mount);

    // Inicialización de modo (tras declarar TODO lo que usa)
    applyModeVisibility(st.mode);
    if (st.mode === 'variants') applyVariant(st.variantSel);

    // ── Overlays HTML ──
    let storyActive = 0;
    let storyT0 = performance.now() / 1000;
    let lastStoryCount = -1;
    const renderUi = () => {
      const cur = stateRef.current;
      const ui = uiRef.current, badge = badgeRef.current;
      if (ui) {
        if (cur.mode === 'detail') {
          ui.textContent = polyLabel(cur.detail);
          ui.style.opacity = '1';
        } else if (cur.mode === 'pieces' && cur.pieces > MAX_VISIBLE) {
          ui.textContent = `+${cur.pieces - MAX_VISIBLE}`;
          ui.style.opacity = '1';
        } else {
          ui.style.opacity = '0';
        }
      }
      if (badge) {
        const exploded = cur.mode === 'pieces' && explode > 0.5;
        badge.textContent = cur.lang === 'es' ? 'Vista explosionada' : EN.wizard.exploded;
        badge.style.opacity = exploded ? '1' : '0';
      }
      const tl = timelineRef.current;
      if (tl) {
        if (cur.mode === 'story') {
          const n = Math.max(1, Math.min(STORY_ANIMS.length, Math.round(cur.story)));
          if (tl.childElementCount !== n) {
            tl.replaceChildren();
            for (let i = 0; i < n; i++) {
              const chip = document.createElement('span');
              chip.style.cssText = 'display:inline-flex;align-items:center;gap:4px;font-size:11px;font-weight:600;padding:3px 10px;border-radius:999px;border:1px solid var(--cx-border);background:var(--cx-card-solid);color:var(--cx-muted);white-space:nowrap;transition:all .25s;pointer-events:auto;cursor:pointer;';
              chip.addEventListener('click', () => {
                // seleccionar momento: salta a reproducirlo; el ciclo continúa desde ahí
                storyActive = i;
                storyT0 = performance.now() / 1000 - i * STORY_DURATION;
                lastStoryCount = n;
              });
              tl.appendChild(chip);
            }
          }
          const kids = Array.from(tl.children) as HTMLElement[];
          kids.forEach((chip, i) => {
            const anim = STORY_ANIMS[i];
            const name = cur.lang === 'es' ? anim.es : anim.en;
            const text = `${anim.glyph} ${name}`;
            if (chip.textContent !== text) chip.textContent = text;
            const active = i === storyActive;
            chip.style.borderColor = active ? 'var(--cx-accent)' : 'var(--cx-border)';
            chip.style.color = active ? 'var(--cx-accent)' : 'var(--cx-muted)';
            chip.style.background = active ? 'var(--cx-accent-soft)' : 'var(--cx-card-solid)';
            chip.style.transform = active ? 'translateY(-1px)' : 'none';
          });
          tl.style.opacity = '1';
        } else {
          tl.style.opacity = '0';
        }
      }
    };

    // ── Loop ──
    let raf = 0;
    const start = performance.now();
    const loop = () => {
      raf = requestAnimationFrame(loop);
      if (!visible || document.hidden) return;
      const t = (performance.now() - start) / 1000;
      const cur = stateRef.current;

      if (cur.mode !== group.userData.mode) { group.userData.mode = cur.mode; applyModeVisibility(cur.mode); }

      if (cur.mode === 'detail') {
        const d = Math.max(1, Math.min(5, cur.detail));
        // [1,2] la malla se RELLENA dentro de sus aristas; edges se desvanecen después
        const fill = grow(d, 1.0, 2.0);
        detailMesh.scale.setScalar(0.9 + 0.1 * fill);
        (detailMesh.material as THREE.MeshStandardMaterial).opacity = fill;
        (edges.material as THREE.LineBasicMaterial).opacity = 1 - grow(d, 1.7, 2.6);
        // [2,3] MORPH box → píldora (la MISMA malla se transforma)
        const mt = grow(d, 2.0, 3.0);
        morphToPill(mt);
        const wantFlat = mt < 0.45;
        if (wantFlat !== lastFlat) {
          lastFlat = wantFlat;
          const mm = detailMesh.material as THREE.MeshStandardMaterial;
          mm.flatShading = wantFlat;
          mm.needsUpdate = true;
        }
        for (const p of detailParts) {
          let sc = grow(d, p.a, p.b);
          if (p.shrinkAt) sc *= 1 - grow(d, p.shrinkAt[0], p.shrinkAt[1]);
          p.obj.scale.setScalar(Math.max(0.0001, sc));
        }
        setEnv(grow(d, 3.4, 5));
        accentMat.emissive.setHex(0x0071e3);
        accentMat.emissiveIntensity = grow(d, 4.0, 5) * 0.35;
        if (bodyMat.metalness > 0.5 || bodyMat.roughness < 0.3) { bodyMat.metalness = 0.3; bodyMat.roughness = 0.4; }
      }
      if (cur.mode === 'finish') {
        if (holybroReady && cur.finish !== lastFinish) { applyFinish(holybroReady, cur.finish); lastFinish = cur.finish; }
        holybroRoot.rotation.y = t * 0.25;
      }
      if (cur.mode === 'assembly') {
        if (holybroReady) {
          const stepCount = Math.max(1, Math.min(HOLYBRO_STEPS.length, Math.ceil(cur.pieces / 5)));
          if (stepCount !== lastStepCount) { revealSteps(holybroReady, stepCount - 1); lastStepCount = stepCount; }
          const stepName = HOLYBRO_STEPS[Math.min(stepCount, HOLYBRO_STEPS.length) - 1];
          if (uiRef.current) {
            uiRef.current.textContent = cur.lang === 'es' ? stepName.es : stepName.en;
            uiRef.current.style.opacity = '1';
          }
          holybroRoot.rotation.y = t * 0.25;
        }
      } else if (cur.mode !== 'detail' && uiRef.current && uiRef.current.textContent && uiRef.current.textContent.startsWith('≈') === false && cur.mode !== 'hotspots') {
        // limpia la etiqueta de paso si salimos de assembly (el resto lo gestiona renderUi)
      }
      if (cur.mode === 'hotspots') {
        markerGroup.visible = true;
        const n = Math.max(0, Math.min(markers.length, Math.round(cur.hotspots)));
        markers.forEach((m, i) => {
          m.visible = i < n;
          if (m.visible) {
            const k = 1 + 0.35 * Math.sin(t * 3 + i * 1.4);
            m.scale.setScalar(k);
          }
        });
        if (uiRef.current) {
          uiRef.current.textContent = cur.hotspots > markers.length ? `+${cur.hotspots - markers.length}` : '';
          uiRef.current.style.opacity = cur.hotspots > markers.length ? '1' : '0';
        }
      } else {
        markerGroup.visible = false;
      }
      if (cur.mode === 'shader-dial') {
        applyEstilo(cur.estilo);
        if (holoMat) holoMat.uniforms.uTime.value = t;
        prod.rotation.y = t * 0.3;
      } else if (lastEstilo > 0) {
        applyEstilo(1);
        lastEstilo = -1;
      }
      if (cur.mode === 'pieces') {
        if (cur.pieces !== builtPieces) { syncParts(Math.min(MAX_VISIBLE, Math.max(1, cur.pieces))); builtPieces = cur.pieces; }
        const idle = (performance.now() - lastPiecesChange) / 1000;
        explodeTarget = idle > 3 ? 1 : 0;
        explode += (explodeTarget - explode) * 0.06;
        const e = explode * explode * (3 - 2 * explode);
        for (const part of sats) {
          const age = Math.min(1, (performance.now() - part.born) / 380);
          const back = 1 + 2.2 * Math.pow(age - 1, 3) + 1.2 * Math.pow(age - 1, 2);
          const target = part.assembled.clone().add(part.dir.clone().multiplyScalar(1.35 * e));
          part.mesh.position.lerp(target, 0.16);
          part.mesh.scale.setScalar(0.001 + back);
          part.mesh.rotation.y += 0.004;
        }
      }
      if (cur.mode === 'story') {
        const n = Math.max(1, Math.min(STORY_ANIMS.length, Math.round(cur.story)));
        if (n !== lastStoryCount) {
          storyActive = n - 1;
          storyT0 = performance.now() / 1000 - storyActive * STORY_DURATION;
          lastStoryCount = n;
        }
        const elapsed = performance.now() / 1000 - storyT0;
        const idx = Math.floor(elapsed / STORY_DURATION) % n;
        storyActive = idx;
        const p = (elapsed % STORY_DURATION) / STORY_DURATION;
        const ease = p < 0.5 ? 2 * p * p : 1 - Math.pow(-2 * p + 2, 2) / 2;
        // reset base del producto y satélites
        prod.position.set(0, 0, 0);
        prod.rotation.set(0, 0, 0);
        prod.scale.set(1, 1, 1);
        cam.position.set(0, 1.15, 5.4);
        cam.lookAt(0, 0.2, 0);
        prod.children.forEach((c, i) => {
          if (i >= 4) c.position.lerp(c.userData.home as THREE.Vector3, 0.2);
        });
        switch (idx) {
          case 0: prod.rotation.y = ease * Math.PI * 2; break;
          case 1: { const k = Math.sin(p * Math.PI); prod.children.forEach((c, i) => { if (i >= 4) { const h = c.userData.home as THREE.Vector3; c.position.set(h.x * (1 + k * 1.1), h.y + k * 0.3, h.z * (1 + k * 1.1)); } }); break; }
          case 2: cam.position.set(0.5, 0.9, 3.1 - Math.sin(p * Math.PI) * 0.7); cam.lookAt(0, 0.45, 0); break;
          case 3: { const a = 0.6 + ease * Math.PI; cam.position.set(Math.sin(a) * 4.6, 1.0, Math.cos(a) * 4.6); cam.lookAt(0, 0.2, 0); break; }
          case 4: { const k = Math.abs(Math.sin(p * Math.PI * 2)); prod.position.y = k * 0.7; prod.scale.set(1 + (1 - k) * 0.12, 1 - (1 - k) * 0.18, 1 + (1 - k) * 0.12); break; }
          case 5: { const k = Math.sin(p * Math.PI); prod.children.forEach((c, i) => { if (i >= 4) { const h = c.userData.home as THREE.Vector3; c.position.set(h.x * (1 + k * 1.6), h.y * (1 + k * 2), h.z * (1 + k * 1.6)); } }); prod.rotation.y = ease * Math.PI; break; }
          case 6: prod.rotation.x = ease * Math.PI * 1.6; prod.rotation.y = ease * 0.8; break;
          case 7: { const k = Math.sin(p * Math.PI); cam.position.set(0, 1.1 + k * 0.6, 5.4 - k * 1.2); prod.position.y = k * 0.35; prod.rotation.y = ease * Math.PI * 2.5; break; }
          case 8: prod.rotation.y = -ease * Math.PI * 2; break;
          case 9: { const k = Math.sin(p * Math.PI * 3); accentMat.emissiveIntensity = 0.2 + k * 0.9; prod.scale.setScalar(1 + k * 0.07); break; }
        }
        if (idx !== 9) accentMat.emissiveIntensity = 0;
      }
      if (cur.mode === 'surface') {
        const t05 = (Math.max(1, Math.min(5, cur.surface)) - 1) / 4;
        if (Math.abs(t05 - lastMorphT) > 0.0005) { applyMorph(t05); lastMorphT = t05; }
      }
      if (cur.mode === 'variants' && cur.variantSel) {
        applyVariant(cur.variantSel);
        pBody.material.color.lerp(colorTarget, 0.12);
        pBody.material.roughness += (matTarget.roughness - pBody.material.roughness) * 0.12;
        pBody.material.metalness += (matTarget.metalness - pBody.material.metalness) * 0.12;
      }

      if (!dragging && cur.mode !== 'story') {
        velY *= 0.94;
        rotY += 0.0035 + velY;
      }
      group.rotation.y += (rotY - group.rotation.y) * 0.12;
      group.rotation.x += (rotX - group.rotation.x) * 0.12;
      if (cur.mode !== 'story') {
        cam.position.set(0, 1.35, 6.1);
        cam.lookAt(0, 0.15, 0);
      }
      renderer.render(scene, cam);
      renderUi();
    };
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect(); io.disconnect();
      el.removeEventListener('pointerdown', onDown);
      el.removeEventListener('pointermove', onMove);
      el.removeEventListener('pointerup', onUp);
      el.removeEventListener('pointercancel', onUp);
      renderer.dispose(); pmrem.dispose(); envTex.dispose();
      scene.traverse(o => { const m = o as THREE.Mesh; if (m.geometry) m.geometry.dispose(); });
      mount.replaceChildren();
    };
  }, [height]);

  return (
    <div style={{ position: 'relative', width: '100%', maxWidth: 320, margin: '0 auto' }}>
      <div ref={mountRef} style={{ width: '100%', height, cursor: 'grab' }} aria-hidden="true" />
      <div ref={uiRef} style={{
        position: 'absolute', top: 6, right: 6, fontSize: 11, fontWeight: 600, color: 'var(--cx-muted)',
        fontVariantNumeric: 'tabular-nums', opacity: 0, transition: 'opacity 0.3s', pointerEvents: 'none',
      }} />
      <div ref={badgeRef} style={{
        position: 'absolute', bottom: 8, left: '50%', transform: 'translateX(-50%)', whiteSpace: 'nowrap',
        fontSize: 11, fontWeight: 600, color: 'var(--cx-accent)', background: 'var(--cx-accent-soft)',
        padding: '2px 10px', borderRadius: 999, opacity: 0, transition: 'opacity 0.4s', pointerEvents: 'none',
      }} />
      {/* Timeline de animaciones (modo story) — indicadores, no un segundo control */}
      <div ref={timelineRef} style={{
        display: 'flex', gap: 5, flexWrap: 'wrap', justifyContent: 'center', marginTop: 6,
        opacity: 0, transition: 'opacity 0.3s', pointerEvents: 'none', minHeight: 22,
      }} />
      <div style={{
        width: '58%', height: 12, margin: '-6px auto 0', borderRadius: '50%',
        background: 'radial-gradient(ellipse at center, var(--cx-obj-shadow) 0%, transparent 70%)',
      }} />
    </div>
  );
}
