/**
 * ModelPreview.tsx — Previews WebGL procedurales para los sliders del cotizador.
 * Un producto 3D generado por código que reacciona en tiempo real al slider.
 * Sin marco: canvas transparente que flota sobre el fondo de la página.
 *
 * Ciclo 2.1 (docs/cotizador/05):
 * - detail:  fabricaciones (1.1.A: blockout→PBR) + contador de tris (1.1.B)
 * - pieces:  ensamblaje que se construye (1.2.A) + explosión al idle 3 s (1.2.B)
 * - scenes:  dolly de cámara por estaciones (1.3.A) — la carcasa mini-scroll vive en el slider
 * - variants: configurador en vivo (1.4.A) con 3 ejes (color × material × accesorio)
 */

import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import { EN, VARIANTES, TRIS_ETIQUETAS } from '../../data/services/i18n';
import type { Lang } from '../../data/services/i18n';

export type PreviewMode = 'detail' | 'pieces' | 'scenes' | 'variants';

export function ModelPreview({ mode, detail = 3, pieces = 8, progress = 0.5, variantIndex = 1, lang = 'es', height = 150 }: {
  mode: PreviewMode;
  /** Slider nivel 1–5 (detail). */
  detail?: number;
  /** Slider piezas 1–50 (pieces). */
  pieces?: number;
  /** Progreso 0–1 del recorrido de escenas (scenes). */
  progress?: number;
  /** Índice de variante 1–N (variants). */
  variantIndex?: number;
  lang?: Lang;
  height?: number;
}) {
  const mountRef = useRef<HTMLDivElement>(null);
  const uiRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  // Estado de sliders SIN reconstruir el contexto WebGL.
  const stateRef = useRef({ mode, detail, pieces, progress, variantIndex, lang });
  stateRef.current = { mode, detail, pieces, progress, variantIndex, lang };

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

    // ── Iluminación de estudio + entorno PBR (para etapas altas de detalle) ──
    scene.add(new THREE.HemisphereLight(0xffffff, 0xdde4ee, 1.05));
    const key = new THREE.DirectionalLight(0xffffff, 1.5); key.position.set(3, 5, 4); scene.add(key);
    const rim = new THREE.DirectionalLight(0x9ecbff, 0.8); rim.position.set(-4, 2, -3); scene.add(rim);
    const pmrem = new THREE.PMREMGenerator(renderer);
    const envTex = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
    scene.environment = envTex;

    const group = new THREE.Group();
    scene.add(group);

    // ── Materiales compartidos ──
    const bodyMat = new THREE.MeshStandardMaterial({ color: 0xeef0f2, metalness: 0.3, roughness: 0.4 });
    const accentMat = new THREE.MeshStandardMaterial({ color: 0x0071e3, metalness: 0.5, roughness: 0.3 });
    const darkMat = new THREE.MeshStandardMaterial({ color: 0x3a3f47, metalness: 0.6, roughness: 0.35 });
    const wireMat = new THREE.MeshBasicMaterial({ color: 0x0071e3, wireframe: true, transparent: true, opacity: 0.9 });

    const setEnvIntensity = (v: number) => {
      bodyMat.envMapIntensity = v; accentMat.envMapIntensity = v; darkMat.envMapIntensity = v;
    };

    // ═══ MODO detail: 5 fabricaciones del mismo objeto (1.1.A) ═══
    // StageGeometry = { parts: THREE.Mesh[] }
    const detailRoot = new THREE.Group();
    group.add(detailRoot);
    let builtDetail = -1;
    const disposeGroup = (g: THREE.Group) => {
      for (const c of [...g.children]) { g.remove(c); const m = c as THREE.Mesh; if (m.geometry) m.geometry.dispose(); }
    };
    const buildDetail = (d: number) => {
      disposeGroup(detailRoot);
      const parts = new THREE.Group();
      if (d === 1) {
        // Blockout: cajas primitivas en wireframe
        for (const [w, h, dp, y] of [[2.0, 0.18, 1.4, -0.5], [1.3, 0.9, 1.0, 0.15], [0.7, 0.35, 0.7, 0.78]] as const) {
          const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, dp), wireMat);
          m.position.y = y; parts.add(m);
        }
        setEnvIntensity(0);
      } else if (d === 2) {
        // Base: cajas con flat shading
        bodyMat.flatShading = true;
        for (const [w, h, dp, y] of [[2.0, 0.18, 1.4, -0.5], [1.3, 0.9, 1.0, 0.15], [0.7, 0.35, 0.7, 0.78]] as const) {
          const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, dp), y < 0 ? darkMat : bodyMat);
          m.position.y = y; parts.add(m);
        }
        setEnvIntensity(0);
      } else if (d === 3) {
        // Suavizado: cuerpo cilíndrico + tapa esférica
        bodyMat.flatShading = false;
        const base = new THREE.Mesh(new THREE.CylinderGeometry(1.05, 1.15, 0.2, 40), darkMat);
        base.position.y = -0.5;
        const body = new THREE.Mesh(new THREE.CylinderGeometry(0.72, 0.8, 1.0, 48), bodyMat);
        body.position.y = 0.15;
        const cap = new THREE.Mesh(new THREE.SphereGeometry(0.72, 40, 20, 0, Math.PI * 2, 0, Math.PI / 2), bodyMat);
        cap.position.y = 0.65;
        parts.add(base, body, cap);
        setEnvIntensity(0.15);
      } else {
        // Detalles + PBR: anillo, pernos, panel line, asa
        bodyMat.flatShading = false;
        const base = new THREE.Mesh(new THREE.CylinderGeometry(1.05, 1.15, 0.2, 40), darkMat);
        base.position.y = -0.5;
        const body = new THREE.Mesh(new THREE.CylinderGeometry(0.72, 0.8, 1.0, 48), bodyMat);
        body.position.y = 0.15;
        const cap = new THREE.Mesh(new THREE.SphereGeometry(0.72, 40, 20, 0, Math.PI * 2, 0, Math.PI / 2), bodyMat);
        cap.position.y = 0.65;
        const ring = new THREE.Mesh(new THREE.TorusGeometry(0.82, 0.055, 14, 52), accentMat);
        ring.rotation.x = Math.PI / 2; ring.position.y = -0.32;
        parts.add(base, body, cap, ring);
        if (d >= 4) {
          for (let i = 0; i < 6; i++) {
            const a = (i / 6) * Math.PI * 2;
            const bolt = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.07, 0.14, 12), darkMat);
            bolt.position.set(Math.cos(a) * 0.92, -0.42, Math.sin(a) * 0.92);
            parts.add(bolt);
          }
          const handle = new THREE.Mesh(new THREE.BoxGeometry(0.34, 0.12, 0.16), darkMat);
          handle.position.y = 1.34;
          parts.add(handle);
          setEnvIntensity(d === 4 ? 0.5 : 0.5);
        }
        if (d === 5) {
          const strip = new THREE.Mesh(new THREE.TorusGeometry(0.76, 0.028, 10, 52), accentMat);
          strip.rotation.x = Math.PI / 2; strip.position.y = 0.55;
          const panel = new THREE.Mesh(new THREE.TorusGeometry(0.805, 0.012, 8, 56), darkMat);
          panel.rotation.x = Math.PI / 2; panel.position.y = 0.1;
          parts.add(strip, panel);
          accentMat.emissive = new THREE.Color(0x0071e3); accentMat.emissiveIntensity = 0.35;
          setEnvIntensity(1.2);
        }
      }
      detailRoot.add(parts);
      // Pop de entrada
      detailRoot.scale.setScalar(0.94);
    };
    buildDetail(st.detail);

    // ═══ MODO pieces: ensamblaje + explosión al idle (1.2.A + 1.2.B) ═══
    const hub = new THREE.Group();
    const hubBase = new THREE.Mesh(new THREE.CylinderGeometry(0.85, 1.0, 0.4, 36), darkMat);
    hubBase.position.y = -0.35;
    const hubBody = new THREE.Mesh(new THREE.CylinderGeometry(0.6, 0.66, 0.75, 36), bodyMat);
    hubBody.position.y = 0.2;
    const hubCap = new THREE.Mesh(new THREE.SphereGeometry(0.6, 32, 16, 0, Math.PI * 2, 0, Math.PI / 2), accentMat);
    hubCap.position.y = 0.575;
    hub.add(hubBase, hubBody, hubCap);
    group.add(hub);

    const satRoot = new THREE.Group();
    group.add(satRoot);
    const PART_TYPES = [
      () => new THREE.CylinderGeometry(0.09, 0.09, 0.34, 12),                    // perno
      () => new THREE.TorusGeometry(0.16, 0.055, 10, 22),                        // anillo
      () => new THREE.BoxGeometry(0.3, 0.12, 0.2),                               // placa
      () => new THREE.CylinderGeometry(0.045, 0.045, 0.5, 8),                    // pin
      () => new THREE.DodecahedronGeometry(0.15),                                // módulo
      () => new THREE.SphereGeometry(0.11, 14, 10),                              // casquillo
    ];
    const MAX_VISIBLE = 18;
    type Sat = { mesh: THREE.Mesh; dir: THREE.Vector3; assembled: THREE.Vector3; born: number };
    let sats: Sat[] = [];
    let builtPieces = -1;
    let explode = 0, explodeTarget = 0;
    let lastChange = performance.now();

    const partMaterial = (i: number) => (i % 3 === 0 ? accentMat : i % 3 === 1 ? darkMat : bodyMat);
    const syncParts = (pieces: number) => {
      const n = Math.min(MAX_VISIBLE, Math.max(1, pieces));
      while (sats.length > n) {
        const s = sats.pop()!;
        satRoot.remove(s.mesh); s.mesh.geometry.dispose();
      }
      while (sats.length < n) {
        const i = sats.length;
        const geo = PART_TYPES[i % PART_TYPES.length]();
        const mesh = new THREE.Mesh(geo, partMaterial(i));
        const angle = (i / n) * Math.PI * 2 + i * 0.35;
        const radius = 1.55 + (i % 3) * 0.38;
        const pos = new THREE.Vector3(Math.cos(angle) * radius, -0.25 + (i % 4) * 0.22, Math.sin(angle) * radius);
        mesh.position.copy(pos);
        const dir = new THREE.Vector3(pos.x, 0.15, pos.z).normalize();
        satRoot.add(mesh);
        sats.push({ mesh, dir, assembled: pos.clone(), born: performance.now() });
      }
      lastChange = performance.now();
      explodeTarget = 0;
    };
    hub.visible = false;
    satRoot.visible = false;

    // ═══ MODO scenes: producto en plataforma + dolly por estaciones (1.3.A) ═══
    const sceneRoot = new THREE.Group();
    group.add(sceneRoot);
    sceneRoot.visible = false;
    const plat = new THREE.Mesh(new THREE.CylinderGeometry(1.5, 1.7, 0.16, 48), darkMat);
    plat.position.y = -0.75;
    const prod = new THREE.Mesh(new THREE.CapsuleGeometry(0.5, 0.7, 8, 24), bodyMat);
    prod.position.y = 0.35;
    const prodRing = new THREE.Mesh(new THREE.TorusGeometry(0.53, 0.05, 12, 40), accentMat);
    prodRing.rotation.x = Math.PI / 2; prodRing.position.y = 0.12;
    sceneRoot.add(plat, prod, prodRing);

    const buildCurve = (stations: number) => {
      const n = Math.max(3, Math.min(10, Math.round(stations)));
      const pts: THREE.Vector3[] = [];
      const radii = [4.4, 3.2, 2.3, 2.6, 4.0, 2.5, 3.0, 2.2, 3.6, 2.6];
      const heights = [1.1, 0.6, 0.3, 1.5, 0.7, 1.2, 0.4, 1.7, 0.8, 1.0];
      for (let i = 0; i < n; i++) {
        const t = i / (n - 1);
        const angle = -1.15 + t * 2.3 + (i % 2) * 0.18;
        pts.push(new THREE.Vector3(Math.sin(angle) * radii[i % 10], heights[i % 10], Math.cos(angle) * radii[i % 10]));
      }
      return new THREE.CatmullRomCurve3(pts, false, 'catmullrom', 0.3);
    };
    let curve = buildCurve(st.progress * 8 + 3);
    let builtStations = -1;
    let progTarget = st.progress;
    let prog = progTarget;

    // ═══ MODO variants: producto configurable 3 ejes (1.4) ═══
    const varRoot = new THREE.Group();
    group.add(varRoot);
    varRoot.visible = false;
    const vBody = new THREE.Mesh(new THREE.CapsuleGeometry(0.52, 0.75, 8, 28), bodyMat);
    vBody.position.y = 0.25;
    const vBase = new THREE.Mesh(new THREE.CylinderGeometry(0.62, 0.7, 0.18, 36), darkMat);
    vBase.position.y = -0.55;
    const vAccRing = new THREE.Mesh(new THREE.TorusGeometry(0.58, 0.06, 12, 40), accentMat);
    vAccRing.rotation.x = Math.PI / 2; vAccRing.position.y = 0.02;
    const vAccHandle = new THREE.Mesh(new THREE.BoxGeometry(0.4, 0.1, 0.18), darkMat);
    vAccHandle.position.y = 1.22;
    varRoot.add(vBody, vBase, vAccRing, vAccHandle);
    const colorTarget = new THREE.Color(VARIANTES.colores[0]);
    const matTarget: { roughness: number; metalness: number } = { roughness: VARIANTES.materiales[0].roughness, metalness: VARIANTES.materiales[0].metalness };
    const applyVariant = (idx: number) => {
      const i = Math.max(0, Math.round(idx) - 1);
      colorTarget.set(VARIANTES.colores[i % VARIANTES.colores.length]);
      const m = VARIANTES.materiales[Math.floor(i / VARIANTES.colores.length) % VARIANTES.materiales.length];
      matTarget.roughness = m.roughness; matTarget.metalness = m.metalness;
      const acc = VARIANTES.accesorios[Math.floor(i / (VARIANTES.colores.length * VARIANTES.materiales.length)) % VARIANTES.accesorios.length];
      vAccRing.visible = acc.kind === 'anillo';
      vAccHandle.visible = acc.kind === 'asa';
    };
    applyVariant(st.variantIndex);

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
      const w = mount.clientWidth || 260;
      const h = mount.clientHeight || height;
      renderer.setSize(w, h, false);
      cam.aspect = w / h;
      cam.updateProjectionMatrix();
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(mount);
    let visible = true;
    const io = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; });
    io.observe(mount);

    // ── Overlays HTML (contador de tris / badge explosionado) ──
    const renderUi = () => {
      const cur = stateRef.current;
      const ui = uiRef.current, badge = badgeRef.current;
      if (ui) {
        if (cur.mode === 'detail') {
          const d = Math.round(Math.min(5, Math.max(1, cur.detail)));
          ui.textContent = TRIS_ETIQUETAS[d - 1];
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
    };

    // ── Loop ──
    let raf = 0;
    const start = performance.now();
    const loop = () => {
      raf = requestAnimationFrame(loop);
      if (!visible || document.hidden) return;
      const t = (performance.now() - start) / 1000;
      const cur = stateRef.current;

      // Cambios de modo/valores sin reconstruir contexto
      if (cur.mode !== group.userData.mode) {
        group.userData.mode = cur.mode;
        detailRoot.visible = cur.mode === 'detail';
        hub.visible = satRoot.visible = cur.mode === 'pieces';
        sceneRoot.visible = cur.mode === 'scenes';
        varRoot.visible = cur.mode === 'variants';
      }
      if (cur.mode === 'detail' && cur.detail !== builtDetail) { buildDetail(cur.detail); builtDetail = cur.detail; }
      if (cur.mode === 'pieces' && cur.pieces !== builtPieces) { syncParts(cur.pieces); builtPieces = cur.pieces; }
      if (cur.mode === 'scenes') {
        if (cur.progress !== progTarget) { progTarget = cur.progress; lastChange = performance.now(); }
        if (Math.abs(progTarget - prog) > 0.0005) prog += (progTarget - prog) * 0.08;
        const p = Math.min(1, Math.max(0, prog));
        const pos = curve.getPoint(p);
        cam.position.copy(pos);
        cam.lookAt(0, 0.3, 0);
      }
      if (cur.mode === 'variants') applyVariant(cur.variantIndex);

      if (!dragging && cur.mode !== 'scenes') {
        velY *= 0.94;
        rotY += 0.0035 + velY;
      }
      group.rotation.y += (rotY - group.rotation.y) * 0.12;
      group.rotation.x += (rotX - group.rotation.x) * 0.12;

      if (cur.mode === 'detail') {
        // Pop suave tras cada rebuild
        const s = detailRoot.scale.x + (1 - detailRoot.scale.x) * 0.14;
        detailRoot.scale.setScalar(s);
      }
      if (cur.mode === 'pieces') {
        // 1.2.B: slider quieto 3 s ⇒ vista explosionada; al mover, re-ensambla
        const idle = (performance.now() - lastChange) / 1000;
        explodeTarget = idle > 3 ? 1 : 0;
        explode += (explodeTarget - explode) * 0.06;
        const e = explode * explode * (3 - 2 * explode); // smoothstep
        for (const part of sats) {
          // entrada con easeOutBack
          const age = Math.min(1, (performance.now() - part.born) / 380);
          const back = 1 + 2.2 * Math.pow(age - 1, 3) + 1.2 * Math.pow(age - 1, 2);
          const target = part.assembled.clone().add(part.dir.clone().multiplyScalar(1.35 * e));
          part.mesh.position.lerp(target, 0.16);
          part.mesh.scale.setScalar(0.001 + back);
          part.mesh.rotation.y += 0.004;
        }
      }
      if (cur.mode === 'variants') {
        vBody.material.color.lerp(colorTarget, 0.12);
        vBody.material.roughness += (matTarget.roughness - vBody.material.roughness) * 0.12;
        vBody.material.metalness += (matTarget.metalness - vBody.material.metalness) * 0.12;
      }
      if (cur.mode !== 'scenes') {
        // Cámara fija para los modos no-dolly
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

  const en = lang === 'en';
  return (
    <div style={{ position: 'relative', width: '100%', maxWidth: 320, margin: '0 auto' }}>
      <div ref={mountRef} style={{ width: '100%', height, cursor: 'grab' }} aria-hidden="true" />
      {/* Contador de tris / badge +N — HTML, accesible y traducible */}
      <div ref={uiRef} style={{
        position: 'absolute', top: 6, right: 6, fontSize: 11, fontWeight: 600, color: 'var(--cx-muted)',
        fontVariantNumeric: 'tabular-nums', opacity: 0, transition: 'opacity 0.3s', pointerEvents: 'none',
      }} />
      {/* Badge de vista explosionada (1.2.B) */}
      <div ref={badgeRef} style={{
        position: 'absolute', bottom: 8, left: '50%', transform: 'translateX(-50%)', whiteSpace: 'nowrap',
        fontSize: 11, fontWeight: 600, color: 'var(--cx-accent)', background: 'var(--cx-accent-soft)',
        padding: '2px 10px', borderRadius: 999, opacity: 0, transition: 'opacity 0.4s', pointerEvents: 'none',
      }} />
      {/* Sombra suave bajo el producto — integra el canvas sin marco */}
      <div style={{
        width: '58%', height: 12, margin: '-6px auto 0', borderRadius: '50%',
        background: 'radial-gradient(ellipse at center, var(--cx-obj-shadow) 0%, transparent 70%)',
      }} />
    </div>
  );
}
