import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { isPlaceholderLink, links } from "@data/links";

/*
 * PortfolioHero — hero WebGL full-screen del portafolio público.
 *
 * Constelación de partículas que fluyen (campo de velocidades por senos,
 * dominio toroidal) + núcleo wireframe + líneas de constelación entre
 * anclas cercanas. Responde al mouse con parallax sutil de cámara y se
 * desvanece con parallax al hacer scroll.
 *
 * - Fallback estático CSS (.pf-hero-fallback) si no hay WebGL.
 * - prefers-reduced-motion: render de UN frame estático, sin loop.
 * - Pausa el loop cuando la sección sale del viewport o la pestaña.
 * - Limpia TODO (geometrías, materiales, texturas, renderer) al desmontar.
 * - i18n runtime escuchando "langchange" (siteLang.ts).
 */

type Lang = "en" | "es";

const strings = {
  en: {
    kicker: "Based in Colombia · Remote contractor / B2B",
    title1: "Real-Time 3D",
    title2: "Developer /",
    title3: "Unity Technical Artist",
    copy: "Interactive technical visualization with Unity, WebGL and Blender — from CAD data to browser-ready systems.",
    ctaFlagship: "View TwinSight X500",
    ctaQuote: "Estimate a project",
    ctaGitHub: "GitHub",
    statSus: "SUS · usability",
    statTris: "Triangles optimized",
    statSystems: "Flagship systems",
    explore: "Explore",
    metaStack: "Unity · WebGL · Blender · Python",
    metaLocation: "Colombia · UTC−5",
    canvasLabel: "Interactive particle constellation background"
  },
  es: {
    kicker: "Desde Colombia · Contratista remoto / B2B",
    title1: "Desarrollador 3D",
    title2: "en tiempo real /",
    title3: "Artista Técnico Unity",
    copy: "Visualización técnica interactiva con Unity, WebGL y Blender — de datos CAD a sistemas listos para el navegador.",
    ctaFlagship: "Ver TwinSight X500",
    ctaQuote: "Cotizar un proyecto",
    ctaGitHub: "GitHub",
    statSus: "SUS · usabilidad",
    statTris: "Triángulos optimizados",
    statSystems: "Sistemas insignia",
    explore: "Explorar",
    metaStack: "Unity · WebGL · Blender · Python",
    metaLocation: "Colombia · UTC−5",
    canvasLabel: "Fondo interactivo de constelación de partículas"
  }
} as const;

const hasReducedMotion = () =>
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* Dominio toroidal del campo de partículas (más ancho que alto) */
const BOUNDS = { x: 9.6, y: 5.8, zNear: 4.4, zFar: -7.2 };
const ANCHOR_COUNT = 132; /* subconjunto que forma las líneas de constelación */
const MAX_SEGMENTS = 240;
const LINK_DISTANCE = 2.7;
const REBUILD_EVERY_MS = 650;

export default function PortfolioHero() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [lang, setLang] = useState<Lang>("en");

  /* i18n en runtime (siteLang.ts emite "langchange") */
  useEffect(() => {
    setLang(document.documentElement.lang === "es" ? "es" : "en");
    const onLang = (event: Event) => {
      const next = (event as CustomEvent<{ lang?: string }>).detail?.lang;
      if (next === "es" || next === "en") setLang(next);
    };
    window.addEventListener("langchange", onLang);
    return () => window.removeEventListener("langchange", onLang);
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    const canvas = canvasRef.current;
    if (!section || !canvas) return undefined;

    const reduced = hasReducedMotion();

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true, powerPreference: "high-performance" });
    } catch {
      section.classList.add("is-fallback");
      return undefined;
    }

    /* Acento desde los tokens del sistema — sin hex hardcodeado */
    const accentCss = getComputedStyle(document.documentElement).getPropertyValue("--accent").trim();
    const accent = new THREE.Color(accentCss || "#0a84ff");
    const ink = new THREE.Color("#ffffff");

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x000000, 0.052);

    const camera = new THREE.PerspectiveCamera(55, 1, 0.1, 60);
    camera.position.set(0, 0, 9);

    /* ── Sprite circular para puntos suaves ── */
    const spriteCanvas = document.createElement("canvas");
    spriteCanvas.width = 64;
    spriteCanvas.height = 64;
    const spriteCtx = spriteCanvas.getContext("2d");
    if (spriteCtx) {
      const gradient = spriteCtx.createRadialGradient(32, 32, 0, 32, 32, 32);
      gradient.addColorStop(0, "rgba(255,255,255,1)");
      gradient.addColorStop(0.4, "rgba(255,255,255,0.55)");
      gradient.addColorStop(1, "rgba(255,255,255,0)");
      spriteCtx.fillStyle = gradient;
      spriteCtx.fillRect(0, 0, 64, 64);
    }
    const sprite = new THREE.CanvasTexture(spriteCanvas);

    /* ── Campo de partículas ── */
    const quality = Math.min(1, Math.max(0.55, (window.innerWidth * Math.min(window.devicePixelRatio || 1, 1.75)) / 2100));
    const count = Math.round(2600 * quality);
    const positions = new Float32Array(count * 3);
    const velocities = new Float32Array(count * 3);
    const phases = new Float32Array(count);
    const colors = new Float32Array(count * 3);
    const tint = new THREE.Color();

    for (let i = 0; i < count; i += 1) {
      positions[i * 3] = (Math.random() * 2 - 1) * BOUNDS.x;
      positions[i * 3 + 1] = (Math.random() * 2 - 1) * BOUNDS.y;
      positions[i * 3 + 2] = BOUNDS.zNear + Math.random() * (BOUNDS.zFar - BOUNDS.zNear);
      phases[i] = Math.random() * Math.PI * 2;
      /* 12% de las partículas llevan el acento; el resto blanco tenue */
      const isAccent = Math.random() < 0.12;
      tint.copy(isAccent ? accent : ink);
      const shade = isAccent ? 0.85 + Math.random() * 0.15 : 0.35 + Math.random() * 0.65;
      colors[i * 3] = tint.r * shade;
      colors[i * 3 + 1] = tint.g * shade;
      colors[i * 3 + 2] = tint.b * shade;
    }

    const pointsGeometry = new THREE.BufferGeometry();
    pointsGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    pointsGeometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const pointsMaterial = new THREE.PointsMaterial({
      size: 0.085,
      map: sprite,
      vertexColors: true,
      transparent: true,
      opacity: 0.9,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true
    });
    const points = new THREE.Points(pointsGeometry, pointsMaterial);
    scene.add(points);

    /* ── Núcleo wireframe (que el hero SE SIENTA 3D) ── */
    const coreGroup = new THREE.Group();
    const coreGeometry = new THREE.EdgesGeometry(new THREE.IcosahedronGeometry(2.15, 1));
    const coreMaterial = new THREE.LineBasicMaterial({
      color: ink,
      transparent: true,
      opacity: 0.12,
      depthWrite: false
    });
    const core = new THREE.LineSegments(coreGeometry, coreMaterial);

    const innerGeometry = new THREE.EdgesGeometry(new THREE.OctahedronGeometry(1.05, 0));
    const innerMaterial = new THREE.LineBasicMaterial({
      color: accent,
      transparent: true,
      opacity: 0.28,
      depthWrite: false
    });
    const inner = new THREE.LineSegments(innerGeometry, innerMaterial);

    coreGroup.add(core, inner);
    coreGroup.position.set(2.6, -0.4, -2.2);
    scene.add(coreGroup);

    /* ── Líneas de constelación entre anclas ── */
    const anchorStride = Math.max(1, Math.floor(count / ANCHOR_COUNT));
    const anchors: number[] = [];
    for (let i = 0; i < count && anchors.length < ANCHOR_COUNT; i += anchorStride) anchors.push(i);

    const linePositions = new Float32Array(MAX_SEGMENTS * 6);
    const lineGeometry = new THREE.BufferGeometry();
    lineGeometry.setAttribute("position", new THREE.BufferAttribute(linePositions, 3));
    const lineMaterial = new THREE.LineBasicMaterial({
      color: ink,
      transparent: true,
      opacity: 0.14,
      depthWrite: false,
      blending: THREE.AdditiveBlending
    });
    const lines = new THREE.LineSegments(lineGeometry, lineMaterial);
    scene.add(lines);

    let pairs: number[] = [];
    const rebuildPairs = () => {
      pairs = [];
      for (let a = 0; a < anchors.length && pairs.length < MAX_SEGMENTS * 2; a += 1) {
        const i = anchors[a];
        const ax = positions[i * 3];
        const ay = positions[i * 3 + 1];
        const az = positions[i * 3 + 2];
        for (let b = a + 1; b < anchors.length; b += 1) {
          const j = anchors[b];
          const dx = positions[j * 3] - ax;
          const dy = positions[j * 3 + 1] - ay;
          const dz = positions[j * 3 + 2] - az;
          if (dx * dx + dy * dy + dz * dz < LINK_DISTANCE * LINK_DISTANCE) {
            pairs.push(i, j);
            if (pairs.length >= MAX_SEGMENTS * 2) break;
          }
        }
      }
    };
    rebuildPairs();

    const writeLines = () => {
      for (let s = 0; s < pairs.length / 2; s += 1) {
        const i = pairs[s * 2];
        const j = pairs[s * 2 + 1];
        linePositions[s * 6] = positions[i * 3];
        linePositions[s * 6 + 1] = positions[i * 3 + 1];
        linePositions[s * 6 + 2] = positions[i * 3 + 2];
        linePositions[s * 6 + 3] = positions[j * 3];
        linePositions[s * 6 + 4] = positions[j * 3 + 1];
        linePositions[s * 6 + 5] = positions[j * 3 + 2];
      }
      lineGeometry.setDrawRange(0, pairs.length / 2 * 2);
      (lineGeometry.getAttribute("position") as THREE.BufferAttribute).needsUpdate = true;
    };

    /* ── Interacción: mouse sutil + scroll fade ── */
    const mouse = { x: 0, y: 0 };
    const smoothed = { x: 0, y: 0 };
    let heroProgress = 0;

    const onPointerMove = (event: PointerEvent) => {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = (event.clientY / window.innerHeight) * 2 - 1;
    };

    const onScroll = () => {
      const rect = section.getBoundingClientRect();
      heroProgress = Math.min(1, Math.max(0, -rect.top / Math.max(1, rect.height)));
    };

    const resize = () => {
      const rect = section.getBoundingClientRect();
      const width = Math.max(320, rect.width);
      const height = Math.max(360, rect.height);
      renderer.setPixelRatio(Math.min(1.75, window.devicePixelRatio || 1));
      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };

    /* ── Loop ── */
    let frame = 0;
    let running = true;
    let lastRebuild = performance.now();
    const clock = new THREE.Clock();

    const flow = (dt: number, t: number) => {
      for (let i = 0; i < count; i += 1) {
        const ix = i * 3;
        const px = positions[ix];
        const py = positions[ix + 1];
        const pz = positions[ix + 2];
        const phase = phases[i];
        /* campo de flujo barato por senos (estilo curl) */
        velocities[ix] += Math.sin(py * 0.32 + t * 0.6 + phase) * 0.014 * dt;
        velocities[ix + 1] += Math.cos(px * 0.28 - t * 0.44 + phase * 0.7) * 0.012 * dt;
        velocities[ix + 2] += Math.sin(px * 0.21 + pz * 0.26 + t * 0.36 + phase) * 0.010 * dt;

        velocities[ix] *= 0.986;
        velocities[ix + 1] *= 0.986;
        velocities[ix + 2] *= 0.986;

        positions[ix] = px + velocities[ix] * dt;
        positions[ix + 1] = py + velocities[ix + 1] * dt;
        positions[ix + 2] = pz + velocities[ix + 2] * dt;

        /* dominio toroidal: envolver para que nunca se acaben */
        if (positions[ix] > BOUNDS.x) positions[ix] = -BOUNDS.x;
        else if (positions[ix] < -BOUNDS.x) positions[ix] = BOUNDS.x;
        if (positions[ix + 1] > BOUNDS.y) positions[ix + 1] = -BOUNDS.y;
        else if (positions[ix + 1] < -BOUNDS.y) positions[ix + 1] = BOUNDS.y;
        if (positions[ix + 2] > BOUNDS.zNear) positions[ix + 2] = BOUNDS.zFar;
        else if (positions[ix + 2] < BOUNDS.zFar) positions[ix + 2] = BOUNDS.zNear;
      }
      (pointsGeometry.getAttribute("position") as THREE.BufferAttribute).needsUpdate = true;
    };

    const tick = () => {
      frame = window.requestAnimationFrame(tick);
      if (!running) return;

      const dt = Math.min(1.8, clock.getDelta() * 60);
      const t = clock.elapsedTime;
      const speed = 1 - heroProgress * 0.55; /* el flujo se calma al salir */

      flow(dt * speed, t);
      writeLines();

      if (performance.now() - lastRebuild > REBUILD_EVERY_MS) {
        rebuildPairs();
        lastRebuild = performance.now();
      }

      /* núcleo wireframe en contra-rotación lenta */
      core.rotation.y += 0.0012 * dt * speed;
      core.rotation.x += 0.0005 * dt * speed;
      inner.rotation.y -= 0.0032 * dt * speed;
      inner.rotation.z += 0.0018 * dt * speed;

      /* parallax sutil de cámara hacia el mouse (no exagerado) */
      smoothed.x += (mouse.x - smoothed.x) * 0.045;
      smoothed.y += (mouse.y - smoothed.y) * 0.045;
      camera.position.x = smoothed.x * 0.55;
      camera.position.y = -smoothed.y * 0.4;
      camera.lookAt(0, 0, 0);
      points.rotation.y = smoothed.x * 0.03;

      /* fade + parallax al hacer scroll (el 3D se despide) */
      canvas.style.opacity = String(Math.max(0, 1 - heroProgress * 1.05));
      canvas.style.transform = `translateY(${heroProgress * 70}px)`;

      renderer.render(scene, camera);
    };

    /* pausa cuando la sección no está en pantalla o la pestaña está oculta */
    const observer = new IntersectionObserver(
      ([entry]) => {
        const visible = Boolean(entry?.isIntersecting) && !document.hidden;
        if (visible && !running && !reduced) {
          running = true;
          clock.getDelta();
        } else if (!visible) {
          running = false;
        }
      },
      { threshold: 0.02 }
    );

    const onVisibility = () => {
      if (document.hidden) running = false;
      else if (!reduced) {
        running = true;
        clock.getDelta();
      }
    };

    resize();
    observer.observe(section);

    if (reduced) {
      /* reduced-motion: una sola toma estática (sigue habiendo 3D, sin flujo) */
      writeLines();
      renderer.render(scene, camera);
    } else {
      clock.getDelta();
      tick();
      window.addEventListener("pointermove", onPointerMove, { passive: true });
      window.addEventListener("scroll", onScroll, { passive: true });
    }

    window.addEventListener("resize", resize);
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      window.cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", onVisibility);
      pointsGeometry.dispose();
      pointsMaterial.dispose();
      sprite.dispose();
      coreGeometry.dispose();
      coreMaterial.dispose();
      innerGeometry.dispose();
      innerMaterial.dispose();
      lineGeometry.dispose();
      lineMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  const t = strings[lang];
  const githubOk = !isPlaceholderLink(links.githubProfile);

  return (
    <section className="pf-hero" ref={sectionRef} aria-label="Portfolio hero">
      <div className="pf-hero-fallback" aria-hidden="true" />
      <canvas ref={canvasRef} className="pf-hero-canvas" aria-label={t.canvasLabel} role="img" />

      <div className="pf-shell pf-hero-inner">
        <p className="pf-kicker">{t.kicker}</p>
        <h1 className="pf-hero-title">
          <span>{t.title1}</span>
          <span>{t.title2}</span>
          <span className="pf-hero-accent">{t.title3}</span>
        </h1>
        <p className="pf-hero-copy">{t.copy}</p>

        <div className="pf-hero-actions">
          <a className="pf-btn pf-btn-primary" href="/twinsight-x500">
            <span>{t.ctaFlagship}</span>
            <span className="pf-btn-arrow" aria-hidden="true">→</span>
          </a>
          <a
            className="pf-btn pf-btn-secondary"
            href="https://services.alexwoodcock.me/cotizador/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>{t.ctaQuote}</span>
            <span className="pf-btn-arrow" aria-hidden="true">↗</span>
          </a>
          {githubOk && (
            <a className="pf-btn pf-btn-ghost" href={links.githubProfile} target="_blank" rel="noopener noreferrer">
              <span>{t.ctaGitHub}</span>
              <span className="pf-btn-arrow" aria-hidden="true">↗</span>
            </a>
          )}
        </div>

        <ul className="pf-hero-stats" aria-label="Key proof points">
          <li>
            <strong>91.88</strong>
            <span>{t.statSus}</span>
          </li>
          <li>
            <strong>95,617</strong>
            <span>{t.statTris}</span>
          </li>
          <li>
            <strong>03</strong>
            <span>{t.statSystems}</span>
          </li>
        </ul>
      </div>

      <div className="pf-hero-meta" aria-hidden="true">
        <span>{t.metaStack}</span>
        <span>{t.metaLocation}</span>
      </div>

      <a className="pf-hero-scroll" href="#work">
        <span>{t.explore}</span>
        <span className="pf-scroll-line" aria-hidden="true" />
      </a>
    </section>
  );
}
