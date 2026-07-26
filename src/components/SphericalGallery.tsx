import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";
import type { GalleryItem } from "@data/projects";

type Props = {
  items: GalleryItem[];
};

const tones = {
  cyan: { ink: "#77e7ff", wash: "rgba(119, 231, 255, 0.18)" },
  warm: { ink: "#ffbd75", wash: "rgba(255, 189, 117, 0.18)" },
  green: { ink: "#81f6b0", wash: "rgba(129, 246, 176, 0.18)" }
} as const;

const drawRoundedRect = (
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  width: number,
  height: number,
  radius: number
) => {
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.arcTo(x + width, y, x + width, y + height, radius);
  ctx.arcTo(x + width, y + height, x, y + height, radius);
  ctx.arcTo(x, y + height, x, y, radius);
  ctx.arcTo(x, y, x + width, y, radius);
  ctx.closePath();
};

const coverImage = (
  ctx: CanvasRenderingContext2D,
  image: HTMLImageElement,
  x: number,
  y: number,
  width: number,
  height: number
) => {
  const scale = Math.max(width / image.width, height / image.height);
  const drawWidth = image.width * scale;
  const drawHeight = image.height * scale;
  ctx.drawImage(image, x + (width - drawWidth) / 2, y + (height - drawHeight) / 2, drawWidth, drawHeight);
};

const makeCardTexture = (item: GalleryItem, index: number) => {
  const canvas = document.createElement("canvas");
  canvas.width = 1024;
  canvas.height = 640;
  const ctx = canvas.getContext("2d");
  const accent = tones[item.accent];

  if (!ctx) {
    return new THREE.CanvasTexture(canvas);
  }

  const drawBase = (image?: HTMLImageElement) => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, "#111318");
    gradient.addColorStop(0.58, "#050608");
    gradient.addColorStop(1, "#19120e");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    if (image) {
      ctx.save();
      ctx.globalAlpha = 0.84;
      coverImage(ctx, image, 54, 58, 916, 438);
      ctx.restore();
    }

    const shade = ctx.createLinearGradient(0, 0, 0, canvas.height);
    shade.addColorStop(0, "rgba(0,0,0,0.05)");
    shade.addColorStop(0.62, "rgba(0,0,0,0.2)");
    shade.addColorStop(1, "rgba(0,0,0,0.86)");
    ctx.fillStyle = shade;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.strokeStyle = "rgba(255,255,255,0.14)";
    ctx.lineWidth = 2;
    drawRoundedRect(ctx, 36, 36, 952, 568, 26);
    ctx.stroke();

    ctx.strokeStyle = accent.wash;
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(56, 520);
    ctx.lineTo(968, 520);
    ctx.stroke();

    ctx.fillStyle = accent.ink;
    ctx.font = "600 26px Azeret Mono, monospace";
    ctx.fillText(`${item.year} / ${item.category}`, 64, 90);

    ctx.fillStyle = "#effff6";
    ctx.font = "700 58px Chakra Petch, Space Grotesk, Arial, sans-serif";
    ctx.fillText(item.title, 64, 572);

    ctx.fillStyle = "rgba(247,242,233,0.72)";
    ctx.font = "500 23px Space Grotesk, Arial, sans-serif";
    ctx.fillText(item.tags.join("  /  "), 66, 612);

    ctx.fillStyle = "rgba(255,255,255,0.74)";
    ctx.font = "700 22px Azeret Mono, monospace";
    ctx.fillText(String(index + 1).padStart(2, "0"), 920, 92);
  };

  drawBase();

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = 4;

  const image = new Image();
  image.decoding = "async";
  image.onload = () => {
    drawBase(image);
    texture.needsUpdate = true;
  };
  image.src = item.image;

  return texture;
};

const hasReducedMotion = () =>
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export default function SphericalGallery({ items }: Props) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const stageRef = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState<GalleryItem | null>(items[0] ?? null);
  const [fallback, setFallback] = useState(false);
  const reduced = useMemo(hasReducedMotion, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const stage = stageRef.current;

    if (!canvas || !stage || reduced) {
      setFallback(true);
      return undefined;
    }

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        canvas,
        alpha: true,
        antialias: true,
        powerPreference: "high-performance"
      });
    } catch {
      setFallback(true);
      return undefined;
    }

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x050506, 0.055);

    const camera = new THREE.PerspectiveCamera(52, 1, 0.1, 80);
    camera.position.set(0, 0, 0.55);

    const gallery = new THREE.Group();
    scene.add(gallery);

    const cardGeometry = new THREE.PlaneGeometry(2.6, 1.64, 10, 6);
    const meshes: THREE.Mesh<THREE.PlaneGeometry, THREE.MeshBasicMaterial>[] = [];
    const textures: THREE.Texture[] = [];
    const radius = 7.25;
    const columns = 3;

    items.forEach((item, index) => {
      const texture = makeCardTexture(item, index);
      textures.push(texture);
      const material = new THREE.MeshBasicMaterial({
        map: texture,
        transparent: true,
        side: THREE.DoubleSide
      });
      const mesh = new THREE.Mesh(cardGeometry, material);
      const row = Math.floor(index / columns);
      const col = index % columns;
      const theta = (col - 1) * 0.58 + (row % 2 === 0 ? -0.1 : 0.12);
      const phi = (row - 0.45) * 0.36;

      mesh.position.set(
        Math.sin(theta) * Math.cos(phi) * radius,
        Math.sin(phi) * radius,
        -Math.cos(theta) * Math.cos(phi) * radius
      );
      mesh.lookAt(0, 0, 0);
      mesh.userData.item = item;
      mesh.userData.baseScale = 1;
      gallery.add(mesh);
      meshes.push(mesh);
    });

    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0xf7f2e9,
      transparent: true,
      opacity: 0.13
    });

    const addArc = (points: THREE.Vector3[]) => {
      const geometry = new THREE.BufferGeometry().setFromPoints(points);
      const line = new THREE.Line(geometry, lineMaterial);
      gallery.add(line);
      return geometry;
    };

    const lineGeometries: THREE.BufferGeometry[] = [];
    [-0.48, 0, 0.48].forEach((phi) => {
      const points: THREE.Vector3[] = [];
      for (let i = -74; i <= 74; i += 2) {
        const theta = i * 0.018;
        points.push(
          new THREE.Vector3(
            Math.sin(theta) * Math.cos(phi) * radius,
            Math.sin(phi) * radius,
            -Math.cos(theta) * Math.cos(phi) * radius
          )
        );
      }
      lineGeometries.push(addArc(points));
    });

    [-0.82, 0, 0.82].forEach((theta) => {
      const points: THREE.Vector3[] = [];
      for (let i = -44; i <= 44; i += 2) {
        const phi = i * 0.018;
        points.push(
          new THREE.Vector3(
            Math.sin(theta) * Math.cos(phi) * radius,
            Math.sin(phi) * radius,
            -Math.cos(theta) * Math.cos(phi) * radius
          )
        );
      }
      lineGeometries.push(addArc(points));
    });

    const raycaster = new THREE.Raycaster();
    const pointer = new THREE.Vector2();
    const targetRotation = { x: -0.04, y: 0 };
    const currentRotation = { x: -0.04, y: 0 };
    let hovered: THREE.Mesh<THREE.PlaneGeometry, THREE.MeshBasicMaterial> | null = null;
    let width = 1;
    let height = 1;
    let animationFrame = 0;
    let isDragging = false;
    let didDrag = false;
    let lastX = 0;
    let lastY = 0;
    let visible = true;

    const resize = () => {
      const rect = stage.getBoundingClientRect();
      width = Math.max(320, rect.width);
      height = Math.max(360, rect.height);
      renderer.setSize(width, height, false);
      renderer.setPixelRatio(Math.min(1.55, window.devicePixelRatio || 1));
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };

    const setPointer = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      pointer.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
    };

    const updateHover = (event: PointerEvent) => {
      if (isDragging) return;
      setPointer(event);
      raycaster.setFromCamera(pointer, camera);
      const hit = raycaster.intersectObjects(meshes, false)[0]?.object as
        | THREE.Mesh<THREE.PlaneGeometry, THREE.MeshBasicMaterial>
        | undefined;

      if (hovered !== hit) {
        hovered = hit ?? null;
        canvas.classList.toggle("is-hovering-card", Boolean(hovered));
      }
    };

    const animate = () => {
      animationFrame = window.requestAnimationFrame(animate);
      if (!visible) return;

      currentRotation.x += (targetRotation.x - currentRotation.x) * 0.065;
      currentRotation.y += (targetRotation.y - currentRotation.y) * 0.065;
      gallery.rotation.x = currentRotation.x;
      gallery.rotation.y = currentRotation.y;

      meshes.forEach((mesh) => {
        const target = mesh === hovered ? 1.075 : 1;
        const next = mesh.scale.x + (target - mesh.scale.x) * 0.12;
        mesh.scale.setScalar(next);
        mesh.material.opacity += ((mesh === hovered ? 1 : 0.84) - mesh.material.opacity) * 0.1;
      });

      renderer.render(scene, camera);
    };

    const onPointerDown = (event: PointerEvent) => {
      isDragging = true;
      didDrag = false;
      lastX = event.clientX;
      lastY = event.clientY;
      canvas.setPointerCapture(event.pointerId);
    };

    const onPointerMove = (event: PointerEvent) => {
      if (!isDragging) {
        updateHover(event);
        return;
      }

      const dx = event.clientX - lastX;
      const dy = event.clientY - lastY;
      if (Math.abs(dx) + Math.abs(dy) > 3) didDrag = true;
      targetRotation.y += dx * 0.0038;
      targetRotation.x += dy * 0.0022;
      targetRotation.x = Math.max(-0.42, Math.min(0.38, targetRotation.x));
      lastX = event.clientX;
      lastY = event.clientY;
    };

    const onPointerUp = (event: PointerEvent) => {
      isDragging = false;
      canvas.releasePointerCapture(event.pointerId);

      if (!didDrag && hovered?.userData.item) {
        setActive(hovered.userData.item as GalleryItem);
      }
    };

    const onWheel = (event: WheelEvent) => {
      if (!event.shiftKey && Math.abs(event.deltaY) > Math.abs(event.deltaX)) return;
      event.preventDefault();
      targetRotation.y += (event.deltaX || event.deltaY) * 0.0015;
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        visible = Boolean(entry?.isIntersecting);
      },
      { threshold: 0.08 }
    );

    resize();
    animate();
    observer.observe(stage);
    window.addEventListener("resize", resize);
    canvas.addEventListener("pointerdown", onPointerDown);
    canvas.addEventListener("pointermove", onPointerMove);
    canvas.addEventListener("pointerup", onPointerUp);
    canvas.addEventListener("pointercancel", onPointerUp);
    canvas.addEventListener("wheel", onWheel, { passive: false });

    return () => {
      window.cancelAnimationFrame(animationFrame);
      observer.disconnect();
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("pointerdown", onPointerDown);
      canvas.removeEventListener("pointermove", onPointerMove);
      canvas.removeEventListener("pointerup", onPointerUp);
      canvas.removeEventListener("pointercancel", onPointerUp);
      canvas.removeEventListener("wheel", onWheel);
      cardGeometry.dispose();
      lineMaterial.dispose();
      lineGeometries.forEach((geometry) => geometry.dispose());
      textures.forEach((texture) => texture.dispose());
      meshes.forEach((mesh) => mesh.material.dispose());
      renderer.dispose();
    };
  }, [items, reduced]);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage || !fallback) return undefined;

    const cards = Array.from(stage.querySelectorAll<HTMLElement>("[data-gallery-item-id]"));
    if (!cards.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const strongest = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        const id = strongest?.target instanceof HTMLElement ? strongest.target.dataset.galleryItemId : undefined;
        const next = items.find((item) => item.id === id);
        if (next) setActive(next);
      },
      {
        root: null,
        rootMargin: "-32% 0px -42% 0px",
        threshold: [0.22, 0.44, 0.66]
      }
    );

    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, [fallback, items]);

  return (
    <section className="spherical-gallery" aria-label="Exploratory work gallery">
      <div className="gallery-copy">
        <p className="eyebrow">Small works / active goals</p>
        <h2>Explorations held inside the main story.</h2>
        <p>
          A lightweight gallery for supporting work: inspection states, pipeline passes, automation notes and
          portfolio-system experiments. TwinSight and Human remain the proof anchors.
        </p>
      </div>
      <div className={`gallery-stage ${fallback ? "is-fallback" : "is-webgl"}`} ref={stageRef}>
        {!fallback && <canvas ref={canvasRef} className="gallery-canvas" aria-label="Drag to orbit the project gallery" />}
        {fallback && (
          <div className="gallery-fallback">
            {items.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setActive(item)}
                data-gallery-item-id={item.id}
              >
                <img src={item.image} alt="" loading="lazy" />
                <span>{item.year} / {item.category}</span>
                <strong>{item.title}</strong>
                <p>{item.shortSignal}</p>
              </button>
            ))}
          </div>
        )}
        <div className="gallery-detail-rail">
          <aside className="gallery-detail" aria-live="polite">
            {active && (
              <>
                <span>{active.year} / {active.category}</span>
                <h3>{active.title}</h3>
                <p>{active.shortSignal}</p>
                <div>
                  {active.tags.map((tag) => (
                    <em key={tag}>{tag}</em>
                  ))}
                </div>
                <a href={active.projectHref}>Open related case</a>
              </>
            )}
          </aside>
        </div>
      </div>
    </section>
  );
}
