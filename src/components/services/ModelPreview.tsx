/**
 * ModelPreview.tsx — Preview WebGL procedural para los sliders del wizard.
 * Un producto 3D generado por código que aumenta detalle (subdivisión,
 * materiales) y piezas (ensamblaje) en tiempo real según el slider.
 * Sin marco: el canvas es transparente y flota sobre el fondo de la página.
 */

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export type PreviewMode = 'detail' | 'pieces';

export function ModelPreview({ mode, detail = 3, pieces = 8, height = 150 }: {
  mode: PreviewMode;
  /** Nivel 1–5 (slider de detalle). */
  detail?: number;
  /** Cantidad de piezas 1–50 (slider de ensamblaje). */
  pieces?: number;
  height?: number;
}) {
  const mountRef = useRef<HTMLDivElement>(null);
  const stateRef = useRef({ detail, pieces });
  stateRef.current = { detail, pieces };

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const scene = new THREE.Scene();
    const cam = new THREE.PerspectiveCamera(38, 1, 0.1, 50);
    cam.position.set(0, 1.4, 6.2);
    cam.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
    mount.appendChild(renderer.domElement);

    const group = new THREE.Group();
    scene.add(group);

    // ── Iluminación de estudio (3 puntos, sin sombras costosas) ──
    scene.add(new THREE.HemisphereLight(0xffffff, 0xdde4ee, 1.1));
    const key = new THREE.DirectionalLight(0xffffff, 1.6); key.position.set(3, 5, 4); scene.add(key);
    const rim = new THREE.DirectionalLight(0x9ecbff, 0.9); rim.position.set(-4, 2, -3); scene.add(rim);

    // ── Construcción del producto procedural ──
    // Cuerpo: esfera achatada (segments crecen con detail) + anillo toroidal.
    let body: THREE.Mesh, ring: THREE.Mesh;
    const bodyMat = new THREE.MeshStandardMaterial({ color: 0xeff1f5, metalness: 0.35, roughness: 0.42 });
    const accentMat = new THREE.MeshStandardMaterial({ color: 0x0071e3, metalness: 0.55, roughness: 0.3 });
    const darkMat = new THREE.MeshStandardMaterial({ color: 0x3a3f47, metalness: 0.6, roughness: 0.35 });

    const buildStatic = (d: number) => {
      for (const c of [body, ring]) { if (c) group.remove(c); }
      const seg = 8 + d * 8; // 16 → 48
      const bodyGeo = new THREE.SphereGeometry(1.15, seg, Math.max(8, seg / 2));
      body = new THREE.Mesh(bodyGeo, bodyMat);
      body.scale.set(1, 0.62, 1);
      body.position.y = 0.15;
      const ringGeo = new THREE.TorusGeometry(1.28, 0.09, Math.max(6, seg / 2), seg);
      ring = new THREE.Mesh(ringGeo, accentMat);
      ring.rotation.x = Math.PI / 2;
      ring.position.y = 0.15;
      group.add(body, ring);
      // Materiales según detalle: wireframe → flat → pulido
      if (d === 1) {
        bodyMat.wireframe = true; accentMat.wireframe = true;
      } else {
        bodyMat.wireframe = false; accentMat.wireframe = false;
        bodyMat.flatShading = d === 2;
        accentMat.flatShading = d === 2;
        bodyMat.metalness = 0.1 + d * 0.08;
        accentMat.metalness = 0.3 + d * 0.07;
        bodyMat.needsUpdate = true; accentMat.needsUpdate = true;
      }
    };
    buildStatic(stateRef.current.detail);
    let builtDetail = stateRef.current.detail;

    // Piezas satélite: pernos y módulos que orbitan el cuerpo (ensamblaje).
    const satGroup = new THREE.Group();
    group.add(satGroup);
    const satGeos = [
      new THREE.CylinderGeometry(0.07, 0.07, 0.3, 10),
      new THREE.BoxGeometry(0.22, 0.14, 0.14),
      new THREE.SphereGeometry(0.09, 12, 8),
    ];
    const MAX_VISIBLE = 20;

    const syncSatellites = (pieces: number) => {
      const n = Math.min(MAX_VISIBLE, Math.max(1, pieces));
      while (satGroup.children.length > n) {
        const m = satGroup.children[satGroup.children.length - 1];
        satGroup.remove(m);
        if (m instanceof THREE.Mesh && m.geometry !== satGeos[0] && m.geometry !== satGeos[1] && m.geometry !== satGeos[2]) m.geometry.dispose();
      }
      while (satGroup.children.length < n) {
        const i = satGroup.children.length;
        const geo = satGeos[i % satGeos.length];
        const m = new THREE.Mesh(geo, i % 3 === 0 ? accentMat : darkMat);
        const angle = (i / n) * Math.PI * 2;
        const radius = 1.75 + (i % 2) * 0.35;
        m.position.set(Math.cos(angle) * radius, -0.1 + (i % 3) * 0.16, Math.sin(angle) * radius);
        m.rotation.y = Math.random() * Math.PI;
        satGroup.add(m);
      }
      satGroup.children.forEach((m, i) => { m.visible = i < n; });
    };
    syncSatellites(stateRef.current.pieces);
    let builtPieces = stateRef.current.pieces;

    // ── Interacción: arrastrar para rotar + inercia suave ──
    let dragging = false, lastX = 0, lastY = 0;
    let targetRY = 0.6, targetRX = 0.12, velY = 0;
    const el = renderer.domElement;
    el.style.touchAction = 'pan-y';
    const onDown = (e: PointerEvent) => { dragging = true; lastX = e.clientX; lastY = e.clientY; el.setPointerCapture(e.pointerId); };
    const onMove = (e: PointerEvent) => {
      if (!dragging) return;
      velY = (e.clientX - lastX) * 0.006;
      targetRY += velY;
      targetRX = Math.max(-0.5, Math.min(0.6, targetRX + (e.clientY - lastY) * 0.004));
      lastX = e.clientX; lastY = e.clientY;
    };
    const onUp = () => { dragging = false; };
    el.addEventListener('pointerdown', onDown);
    el.addEventListener('pointermove', onMove);
    el.addEventListener('pointerup', onUp);
    el.addEventListener('pointercancel', onUp);

    // ── Resize ──
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

    // ── Loop ──
    let raf = 0;
    const start = performance.now();
    const loop = () => {
      const t = (performance.now() - start) / 1000;
      // Reacciona a los sliders sin reconstruir el contexto WebGL
      const st = stateRef.current;
      if (st.detail !== builtDetail) { buildStatic(st.detail); builtDetail = st.detail; }
      if (st.pieces !== builtPieces) { syncSatellites(st.pieces); builtPieces = st.pieces; }
      if (!dragging) {
        velY *= 0.94;
        targetRY += 0.0035 + velY; // giro idle + inercia
      }
      group.rotation.y += (targetRY - group.rotation.y) * 0.12;
      group.rotation.x += (targetRX - group.rotation.x) * 0.12;
      // Piezas flotando suavemente
      satGroup.children.forEach((m, i) => {
        m.position.y += Math.sin(t * 1.4 + i * 1.7) * 0.0012;
        m.rotation.y += 0.004;
      });
      renderer.render(scene, cam);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      el.removeEventListener('pointerdown', onDown);
      el.removeEventListener('pointermove', onMove);
      el.removeEventListener('pointerup', onUp);
      el.removeEventListener('pointercancel', onUp);
      renderer.dispose();
      scene.traverse(o => { const m = o as THREE.Mesh; if (m.geometry) m.geometry.dispose(); });
      mount.replaceChildren();
    };
  }, [height]);

  return (
    <div style={{ position: 'relative', width: '100%', maxWidth: 320, margin: '0 auto' }}>
      <div ref={mountRef} style={{ width: '100%', height, cursor: 'grab' }} aria-hidden="true" />
      {/* Sombra suave bajo el producto — integra el canvas sin marco */}
      <div style={{
        width: '58%', height: 12, margin: '-6px auto 0', borderRadius: '50%',
        background: 'radial-gradient(ellipse at center, rgba(29,29,31,0.14) 0%, transparent 70%)',
      }} />
    </div>
  );
}
