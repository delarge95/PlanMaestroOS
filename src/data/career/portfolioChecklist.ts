// src/data/career/portfolioChecklist.ts — AG-PORT
// Pending asset checklist derived from doc 33 (33_portfolio_asset_production_sprint.md).
// Rule (PLAN_MULTIAGENTE §3.7): no invented metrics/URLs; every pending asset is
// traceable to a doc-33 section. Status starts as "pending" and is updated only
// when the real asset exists.

export type PortfolioAssetPlatform = "artstation" | "github" | "linkedin" | "web";

export type PortfolioAssetStatus = "pending" | "in_progress" | "done";

export interface PortfolioAssetItem {
  id: string;
  title: string;
  detail: string;
  platform: PortfolioAssetPlatform;
  status: PortfolioAssetStatus;
  /** Citation of the doc-33 section that requires this asset. */
  source: string;
  /** Keys in src/data/links.ts that this asset unblocks when published. */
  unblocksLinkKeys?: string[];
}

export const portfolioAssetChecklist: PortfolioAssetItem[] = [
  // ── Video assets (doc-33 §3.1) ────────────────────────────────────────────
  {
    id: "video-demo-90s",
    title: "90-second TwinSight demo video",
    detail: "twinsight_x500_demo_90s.mp4 (90–120 s) for portfolio, LinkedIn Featured and GitHub.",
    platform: "web",
    status: "pending",
    source: "doc-33 §3.1",
    unblocksLinkKeys: ["twinsightDemo"]
  },
  {
    id: "video-teaser-30s",
    title: "30-second teaser",
    detail: "twinsight_x500_teaser_30s.mp4 (30–45 s) for LinkedIn post and homepage.",
    platform: "linkedin",
    status: "pending",
    source: "doc-33 §3.1"
  },
  {
    id: "video-breakdown-5min",
    title: "4–7 minute technical breakdown video",
    detail: "twinsight_x500_technical_breakdown_5min.mp4 for interviews, GitHub and technical review.",
    platform: "github",
    status: "pending",
    source: "doc-33 §3.1"
  },
  {
    id: "gif-preview",
    title: "GIF preview for GitHub README",
    detail: "twinsight_x500_preview.gif (5–8 s).",
    platform: "github",
    status: "pending",
    source: "doc-33 §3.1"
  },

  // ── Core screenshot package (doc-33 §3.2, §8) ─────────────────────────────
  {
    id: "image-thumbnail",
    title: "TwinSight thumbnail",
    detail: "twinsight_x500_thumbnail.jpg — exploded drone + UI panel + title, readable at small size.",
    platform: "web",
    status: "pending",
    source: "doc-33 §3.2, §15"
  },
  {
    id: "image-hero-viewer",
    title: "Hero viewer screenshot",
    detail: "01_hero_view.jpg — drone centered, UI visible, understandable at thumbnail size.",
    platform: "web",
    status: "pending",
    source: "doc-33 §3.2, §7.1"
  },
  {
    id: "image-browser-proof",
    title: "Browser/WebGL proof screenshot",
    detail: "02_browser_webgl_view.jpg — browser frame visible to prove no-install WebGL delivery.",
    platform: "web",
    status: "pending",
    source: "doc-33 §3.2, §7.2"
  },
  {
    id: "image-component-selection",
    title: "Component selection screenshot",
    detail: "03_component_selection.jpg — hover/select with highlight and technical panel.",
    platform: "web",
    status: "pending",
    source: "doc-33 §3.2, §7.3"
  },
  {
    id: "image-technical-panel",
    title: "Technical panel screenshot",
    detail: "04_technical_panel.jpg — UI proof with part metadata.",
    platform: "web",
    status: "pending",
    source: "doc-33 §3.2"
  },
  {
    id: "image-exploded-view",
    title: "Exploded view screenshot",
    detail: "05_exploded_view.jpg — assembly hierarchy proof.",
    platform: "web",
    status: "pending",
    source: "doc-33 §3.2, §7.4"
  },
  {
    id: "image-cross-section",
    title: "Cross-section screenshot",
    detail: "06_cross_section.jpg — clipping plane with internal structures visible.",
    platform: "web",
    status: "pending",
    source: "doc-33 §3.2, §7.5"
  },
  {
    id: "image-visual-modes-grid",
    title: "Visual modes grid (3×3)",
    detail: "07_visual_modes_grid.jpg — same camera/crop across 9 modes, with thermal-style disclaimer.",
    platform: "artstation",
    status: "pending",
    source: "doc-33 §3.2, §9"
  },
  {
    id: "image-cad-optimization",
    title: "CAD optimization before/after",
    detail: "08_cad_optimization_before_after.jpg — high-poly source vs optimized wireframe.",
    platform: "web",
    status: "pending",
    source: "doc-33 §3.2, §7.7"
  },
  {
    id: "image-metrics-card",
    title: "Metrics card",
    detail: "09_metrics_card.jpg — triangles, SUS, NASA-TLX values with academic-eval footer.",
    platform: "web",
    status: "pending",
    source: "doc-33 §3.2, §10"
  },
  {
    id: "image-pipeline-diagram",
    title: "CAD-to-realtime pipeline diagram",
    detail: "10_pipeline_diagram.jpg — CAD → conversion → Blender → Unity → WebGL → evaluation.",
    platform: "web",
    status: "pending",
    source: "doc-33 §3.2, §11"
  },
  {
    id: "image-architecture-diagram",
    title: "Unity architecture diagram",
    detail: "11_architecture_diagram.jpg — input → interaction controller → visualization systems → UI → WebGL runtime.",
    platform: "web",
    status: "pending",
    source: "doc-33 §3.2, §12"
  },
  {
    id: "image-blender-cleanup",
    title: "Blender cleanup screenshot",
    detail: "12_blender_cleanup.jpg — process proof of the optimization workflow.",
    platform: "web",
    status: "pending",
    source: "doc-33 §3.2"
  },
  {
    id: "image-unity-editor",
    title: "Unity editor screenshot",
    detail: "13_unity_editor.jpg — implementation proof of scene and systems.",
    platform: "web",
    status: "pending",
    source: "doc-33 §3.2"
  },
  {
    id: "image-github-preview",
    title: "GitHub README preview screenshot",
    detail: "14_github_readme_preview.jpg — proof loop between repo and portfolio.",
    platform: "github",
    status: "pending",
    source: "doc-33 §3.2"
  },

  // ── GitHub package (doc-33 §4.2, §18) ─────────────────────────────────────
  {
    id: "github-media-folder",
    title: "GitHub /media folder",
    detail: "media/ with demo thumbnail, 8 numbered screenshots and preview GIF (doc-33 §4.2 names).",
    platform: "github",
    status: "pending",
    source: "doc-33 §4.2, §18.1",
    unblocksLinkKeys: ["twinsightGithub"]
  },
  {
    id: "github-readme-final",
    title: "TwinSight README updated per 19B",
    detail: "Apply 19B final README; acceptance: first screen explains project, media visible, limitations visible, topics added.",
    platform: "github",
    status: "pending",
    source: "doc-33 §18.2, §18.3"
  },

  // ── ArtStation package (doc-33 §16) ───────────────────────────────────────
  {
    id: "artstation-cover",
    title: "ArtStation cover image",
    detail: "15_artstation_cover.jpg — full drone with technical UI, or exploded view with labels.",
    platform: "artstation",
    status: "pending",
    source: "doc-33 §3.2, §16.1"
  },
  {
    id: "artstation-twinsight-breakdown",
    title: "ArtStation TwinSight breakdown set",
    detail: "12-image set (cover, final views, feature breakdown, CAD optimization, modes grid, UI, metrics, tools) in doc-33 §16.2 order.",
    platform: "artstation",
    status: "pending",
    source: "doc-33 §16.1, §16.2"
  },
  {
    id: "artstation-human-breakdown",
    title: "ArtStation Human portrait breakdown",
    detail: "Technical breakdown post for the Blender study (sculpt, topology, UVs, materials, groom, lighting) with CG Cookie context.",
    platform: "artstation",
    status: "pending",
    source: "doc-33 §2.1, §16.3",
    unblocksLinkKeys: ["humanArtStation"]
  },

  // ── LinkedIn package (doc-33 §17) ─────────────────────────────────────────
  {
    id: "linkedin-featured-media",
    title: "LinkedIn Featured media package",
    detail: "Teaser 30s, thumbnail, metrics card, visual modes grid + portfolio/GitHub links ready to feature.",
    platform: "linkedin",
    status: "pending",
    source: "doc-33 §17.1"
  },
  {
    id: "linkedin-featured-order",
    title: "LinkedIn Featured section order",
    detail: "1) TwinSight case study 2) 90s demo 3) GitHub repo 4) ArtStation breakdown.",
    platform: "linkedin",
    status: "pending",
    source: "doc-33 §17.3"
  },

  // ── Web portfolio package (doc-33 §4.3, §19) ─────────────────────────────
  {
    id: "web-portfolio-media",
    title: "Portfolio media folder for TwinSight",
    detail: "portfolio/projects/twinsight-x500/: hero.jpg, demo, teaser, thumbnail, feature shots, grids, diagrams, metrics card.",
    platform: "web",
    status: "pending",
    source: "doc-33 §4.3, §19.1"
  },
  {
    id: "web-cv-pdf",
    title: "CV PDF linked from portfolio",
    detail: "Export the selected CV variant to PDF and publish behind links.cv so the CV link works.",
    platform: "web",
    status: "pending",
    source: "doc-33 §20.4",
    unblocksLinkKeys: ["cv"]
  }
];

export const pendingPortfolioAssets = portfolioAssetChecklist.filter(
  (item) => item.status !== "done"
);

export const portfolioAssetsByPlatform = (platform: PortfolioAssetPlatform) =>
  pendingPortfolioAssets.filter((item) => item.platform === platform);

export const pendingPortfolioAssetCount = pendingPortfolioAssets.length;

// ── ArtStation breakdown structure (doc 29C) ────────────────────────────────
// Paraphrased structure for the simulated ArtStation tab. Rule (PLAN_MULTIAGENTE
// §3.7 Fase 2a): imitate STRUCTURE, never exact branding; the simulator always
// shows a simulation notice. No invented metrics — numbers below are quoted
// verbatim from doc 29C §8.6 (which itself cites the TwinSight evaluation).

export type BreakdownSectionKind =
  | "cover"
  | "video"
  | "summary"
  | "role"
  | "final-renders"
  | "features"
  | "pipeline"
  | "before-after"
  | "wireframe"
  | "visual-modes"
  | "interaction"
  | "ui"
  | "metrics"
  | "reference"
  | "sculpt-stages"
  | "uv"
  | "textures"
  | "material"
  | "groom"
  | "lighting"
  | "limitations"
  | "software"
  | "links"
  | "lessons";

export interface ArtStationBreakdownSection {
  id: string;
  order: number;
  title: string;
  kind: BreakdownSectionKind;
  requirement: "required" | "recommended" | "optional";
  /** Paraphrased guidance from doc 29C. */
  guidance: string;
  /** Citation of the doc-29C section that defines this block. */
  source: string;
}

export interface ArtStationBreakdownSpec {
  id: "twinsight-x500" | "blender-portrait";
  title: string;
  /** How this asset is positioned in the portfolio strategy. */
  positioning: string;
  sections: ArtStationBreakdownSection[];
  /** Only tools actually used in the final pipeline (doc 29C §12 rule). */
  software: string[];
  tags: string[];
  source: string;
}

export const artstationBreakdownSpecs: ArtStationBreakdownSpec[] = [
  {
    id: "twinsight-x500",
    title: "TwinSight X500 — Technical Visualization (Unity WebGL)",
    positioning:
      "Proyecto insignia: la pieza principal del perfil. El breakdown debe mostrar proceso técnico, no solo renders finales.",
    source: "doc-29C §2, §8, §19.1",
    sections: [
      {
        id: "ts-cover",
        order: 1,
        title: "Cover image",
        kind: "cover",
        requirement: "required",
        guidance:
          "Dron completo con UI técnica visible, vista explosionada con etiquetas o grid de modos visuales. Debe leerse a tamaño thumbnail.",
        source: "doc-29C §8.1"
      },
      {
        id: "ts-video",
        order: 2,
        title: "Vídeo de 30–60 s incrustado arriba",
        kind: "video",
        requirement: "required",
        guidance:
          "Cerca del inicio, sin intro larga; captions grabadas y foco en features (export específico ArtStation del plan de vídeo 21).",
        source: "doc-29C §7.1, §20.2"
      },
      {
        id: "ts-summary",
        order: 3,
        title: "Resumen en 1–2 frases",
        kind: "summary",
        requirement: "required",
        guidance:
          "Qué es TwinSight y qué hace, sin abrir con metodología académica (eso va al final). Copy recomendado en doc-29C §17.1.",
        source: "doc-29C §8.2, §17.1"
      },
      {
        id: "ts-role",
        order: 4,
        title: "Role / contribución",
        kind: "role",
        requirement: "required",
        guidance:
          "Real-time 3D, integración Unity WebGL, sistemas C#, UI técnica, modos visuales, workflow Blender y evaluación. Si se menciona IA: apoyo en implementación, decisiones y ownership propios.",
        source: "doc-29C §8.3"
      },
      {
        id: "ts-final",
        order: 5,
        title: "Screenshots finales",
        kind: "final-renders",
        requirement: "required",
        guidance:
          "Hero viewer, selección de componente, explosionado y sección como imágenes Required del set (doc-29C §10.1).",
        source: "doc-29C §7.1, §10.1"
      },
      {
        id: "ts-features",
        order: 6,
        title: "Feature breakdown (cards)",
        kind: "features",
        requirement: "required",
        guidance:
          "Cards concisas: selección de componentes, exploded view, cross-section, modos visuales, UI técnica, WebGL, evaluación SUS/NASA-TLX.",
        source: "doc-29C §8.4"
      },
      {
        id: "ts-pipeline",
        order: 7,
        title: "Pipeline CAD → realtime (milestone notes)",
        kind: "pipeline",
        requirement: "required",
        guidance:
          "Notas por hito: CAD source → conversión/tessellación → cleanup Blender → low-poly → UV/bake/materiales → import Unity → deploy WebGL. Incluir sistema modular de fasteners y limitaciones.",
        source: "doc-29C §8.5"
      },
      {
        id: "ts-before-after",
        order: 8,
        title: "Optimización before/after",
        kind: "before-after",
        requirement: "required",
        guidance:
          "Comparación de conteo de triángulos (rutas CAD 6.5M+ → 95.617 optimizados) y de wireframes alto/bajo. Es la señal técnica más fuerte del proyecto.",
        source: "doc-29C §8.5, §8.6"
      },
      {
        id: "ts-wireframe",
        order: 9,
        title: "Wireframe comparison",
        kind: "wireframe",
        requirement: "required",
        guidance:
          "Imagen dedicada al wireframe (señal de credibilidad real-time esperada en breakdowns).",
        source: "doc-29C §10.1"
      },
      {
        id: "ts-metrics",
        order: 10,
        title: "Optimization metrics card",
        kind: "metrics",
        requirement: "required",
        guidance:
          "Card con métricas citadas: 95.617 tris, 6.5M+ fuente, 12 participantes, SUS 91.88, NASA-TLX 8.69 vs 19.89, 96 registros. Contexto: evaluación formativa académica, no benchmark de producción.",
        source: "doc-29C §8.6"
      },
      {
        id: "ts-visual-modes",
        order: 11,
        title: "Visual modes breakdown",
        kind: "visual-modes",
        requirement: "required",
        guidance:
          "Grid de modos: realistic, X-ray, ghosted, blueprint, wireframe, solid y thermal-style. Wording obligatorio: thermal-style es modo visual cualitativo, no simulación física.",
        source: "doc-29C §8.7"
      },
      {
        id: "ts-interaction",
        order: 12,
        title: "Unity interaction systems",
        kind: "interaction",
        requirement: "required",
        guidance:
          "Sección compacta: selección/highlight, cámara, estado explosionado, clipping, switching de modos, bottom-sheet, panel de metadatos. Capturas opcionales de hierarchy/inspector/Shader Graph. Código detallado → GitHub, no ArtStation.",
        source: "doc-29C §8.8"
      },
      {
        id: "ts-ui",
        order: 13,
        title: "UI / paneles técnicos",
        kind: "ui",
        requirement: "required",
        guidance:
          "Close-up del panel técnico con metadatos de pieza visible durante la inspección.",
        source: "doc-29C §7.1, §10.1"
      },
      {
        id: "ts-limitations",
        order: 14,
        title: "Limitaciones",
        kind: "limitations",
        requirement: "required",
        guidance:
          "Prototipo académico, no digital twin desplegado: sin IoT en vivo, ni mantenimiento predictivo, ni WebAR, ni monitoring. Wording en doc-29C §17.3.",
        source: "doc-29C §7.1, §17.3"
      },
      {
        id: "ts-software",
        order: 15,
        title: "Tools used (software del asset)",
        kind: "software",
        requirement: "required",
        guidance:
          "Lista limpia de solo las herramientas realmente usadas en el pipeline final. No inflar la lista.",
        source: "doc-29C §12.1"
      },
      {
        id: "ts-links",
        order: 16,
        title: "Links",
        kind: "links",
        requirement: "required",
        guidance:
          "Demo en vivo, GitHub, case study y demo video (placeholders explícitos hasta que existan las URLs reales).",
        source: "doc-29C §17.4"
      }
    ],
    software: ["Unity", "C#", "Unity WebGL", "URP", "UI Toolkit", "Shader Graph", "Blender", "GitHub"],
    tags: [
      "Unity",
      "Unity WebGL",
      "Technical Art",
      "Real-Time 3D",
      "Technical Visualization",
      "CAD Optimization",
      "Drone",
      "Interactive 3D",
      "CSharp",
      "URP",
      "Blender",
      "Digital Twin",
      "Simulation"
    ]
  },
  {
    id: "blender-portrait",
    title: "Blender Portrait — Character Art Breakdown",
    positioning:
      "Secundario: evidencia de apoyo de fundamentos 3D (anatomía, materiales, grooming). Nunca presentarlo como prueba principal para roles Unity WebGL.",
    source: "doc-29C §9.1, §9.4, §19.1",
    sections: [
      {
        id: "pt-cover",
        order: 1,
        title: "Cover render",
        kind: "cover",
        requirement: "required",
        guidance:
          "Render final suficientemente fuerte para ser la portada del post.",
        source: "doc-29C §7.2, §15.2"
      },
      {
        id: "pt-turntable",
        order: 2,
        title: "Turntable / secuencia",
        kind: "video",
        requirement: "recommended",
        guidance:
          "Vídeo turntable o secuencia de imágenes que pruebe el volumen 3D.",
        source: "doc-29C §7.2, §10.2"
      },
      {
        id: "pt-summary",
        order: 3,
        title: "Resumen corto",
        kind: "summary",
        requirement: "required",
        guidance:
          "Estudio de retrato realista en Blender: anatomía facial, lookdev de piel, grooming, iluminación y presentación técnica. Copy en doc-29C §18.1.",
        source: "doc-29C §18.1"
      },
      {
        id: "pt-reference",
        order: 4,
        title: "Reference board",
        kind: "reference",
        requirement: "required",
        guidance:
          "Board de referencias o explicación breve de las usadas.",
        source: "doc-29C §9.2"
      },
      {
        id: "pt-sculpt",
        order: 5,
        title: "Sculpt stages (milestone notes)",
        kind: "sculpt-stages",
        requirement: "required",
        guidance:
          "Notas por hito: blockout → mid → escultura final. El proceso es la señal técnica.",
        source: "doc-29C §7.2, §9.2"
      },
      {
        id: "pt-topology",
        order: 6,
        title: "Topology",
        kind: "wireframe",
        requirement: "required",
        guidance:
          "Face loops limpias (párpados, boca) para deformación; overlay wireframe Required.",
        source: "doc-29C §9.2, §10.2"
      },
      {
        id: "pt-uv",
        order: 7,
        title: "UVs",
        kind: "uv",
        requirement: "required",
        guidance: "Layout y densidad de texels del unwrap.",
        source: "doc-29C §9.2"
      },
      {
        id: "pt-textures",
        order: 8,
        title: "Texture maps",
        kind: "textures",
        requirement: "required",
        guidance: "Mapas de textura mostrados (albedo, roughness, SSS, displacement).",
        source: "doc-29C §6.2, §9.2"
      },
      {
        id: "pt-material",
        order: 9,
        title: "Skin shader / material setup",
        kind: "material",
        requirement: "required",
        guidance:
          "Setup del material de piel + material de iris/córnea de los ojos.",
        source: "doc-29C §9.2"
      },
      {
        id: "pt-groom",
        order: 10,
        title: "Grooming",
        kind: "groom",
        requirement: "required",
        guidance: "Cejas, barba, pestañas y guías de pelo.",
        source: "doc-29C §9.2"
      },
      {
        id: "pt-lighting",
        order: 11,
        title: "Lighting",
        kind: "lighting",
        requirement: "recommended",
        guidance: "Diagrama del setup de iluminación (key/fill/rim, HDRI, cámara).",
        source: "doc-29C §6.2"
      },
      {
        id: "pt-final",
        order: 12,
        title: "Final renders",
        kind: "final-renders",
        requirement: "required",
        guidance: "2–4 imágenes más fuertes: frontal, close-up, perfil.",
        source: "doc-29C §9.2, §10.2"
      },
      {
        id: "pt-realtime",
        order: 13,
        title: "Nota real-time (si aplica)",
        kind: "limitations",
        requirement: "optional",
        guidance:
          "Adaptación game-ready como camino opcional — valiosa si se hace.",
        source: "doc-29C §7.2, §9.3"
      },
      {
        id: "pt-software",
        order: 14,
        title: "Tools used (software del asset)",
        kind: "software",
        requirement: "required",
        guidance: "Solo herramientas realmente usadas en este asset.",
        source: "doc-29C §12.2"
      },
      {
        id: "pt-lessons",
        order: 15,
        title: "Lessons learned",
        kind: "lessons",
        requirement: "recommended",
        guidance: "Cierre breve con aprendizajes técnicos del estudio.",
        source: "doc-29C §7.2"
      }
    ],
    software: ["Blender", "Cycles / Eevee Next", "Substance 3D Painter", "Photoshop / Krita"],
    tags: [
      "Blender",
      "Character Art",
      "Portrait",
      "Realistic Character",
      "Topology",
      "Grooming",
      "Skin Shader",
      "Lookdev",
      "3D Art",
      "Technical Art"
    ]
  }
];

// ── ArtStation profile publication checklist (doc 28E) ─────────────────────
// Profile-level setup checklist (the 28E areas: skills, software, availability,
// links, hero artwork, plus headline/summary/NoAI). Paraphrased; copy-pasteable
// source texts live in doc 28E itself, not duplicated verbatim here.

export type ArtStationChecklistArea =
  | "headline"
  | "skills"
  | "software"
  | "availability"
  | "links"
  | "hero-artwork"
  | "noai";

export interface ArtStationProfileChecklistItem {
  id: string;
  area: ArtStationChecklistArea;
  title: string;
  detail: string;
  source: string;
}

export const artstationProfileChecklist: ArtStationProfileChecklistItem[] = [
  {
    id: "as-headline",
    area: "headline",
    title: "Titular profesional",
    detail:
      "Una de las 5 opciones de doc-28E §1 (eje: Unity Technical Artist / Real-Time 3D / CAD-to-WebGL). Elegir una y mantenerla coherente con LinkedIn y CV.",
    source: "doc-28E §1"
  },
  {
    id: "as-summary",
    area: "headline",
    title: "Resumen profesional (About)",
    detail:
      "Resumen EN de doc-28E §2: estudiante de Multimedia Engineering con coursework avanzado de Electronic Engineering, foco Unity WebGL y optimización CAD, proyecto insignia TwinSight.",
    source: "doc-28E §2"
  },
  {
    id: "as-skills",
    area: "skills",
    title: "Lista de skills (sección Resume)",
    detail:
      "13 skills de doc-28E §2 (Technical Art Unity, CAD-to-Realtime, Unity WebGL, decimation/retopology, hard-surface Blender, Shader Graph, UI Toolkit, SUS/NASA-TLX…).",
    source: "doc-28E §2"
  },
  {
    id: "as-skills-tags",
    area: "skills",
    title: "Tags estratégicos (Job Preferences)",
    detail:
      "Tags recruiter-facing: Technical Art, Pipeline, Hard Surface, Props and assets, Vehicles, Rendering, UI/UX, Generalist. Industrias top 5: Games, Software Development, AR/VR, Asset creation, Product Design. Medio: Real time + Digital 3D.",
    source: "doc-28E §3"
  },
  {
    id: "as-software",
    area: "software",
    title: "Software expertise con niveles",
    detail:
      "Advanced: Unity (URP/WebGL/C#/UI Toolkit/Shader Graph), Blender. Intermediate: Substance 3D Painter, Photoshop, Marmoset Toolbag. Foundational: Python, LangGraph/LangChain, web stack.",
    source: "doc-28E §2"
  },
  {
    id: "as-software-checkboxes",
    area: "software",
    title: "Checkboxes de software del perfil",
    detail: "Marcar: Blender, Unity, Substance 3D Painter, Photoshop, Marmoset Toolbag.",
    source: "doc-28E §3"
  },
  {
    id: "as-availability",
    area: "availability",
    title: "Ubicación y disponibilidad remota",
    detail:
      "Location: Pasto, Nariño, Colombia (UTC-5). About: open to fully remote or contractor roles worldwide, con horas solapadas para equipos US/EU. Job Digest: Weekly.",
    source: "doc-28E §4"
  },
  {
    id: "as-links-linkedin",
    area: "links",
    title: "Link LinkedIn (condicionado)",
    detail: "Enlazar cuando coincida con el summary/headline de ArtStation.",
    source: "doc-28E §5"
  },
  {
    id: "as-links-github",
    area: "links",
    title: "Link GitHub (condicionado)",
    detail: "Enlazar tras limpiar el repo TwinSight y añadir disclaimers de prototipo.",
    source: "doc-28E §5"
  },
  {
    id: "as-links-portfolio",
    area: "links",
    title: "Link portfolio personal (condicionado)",
    detail: "Enlazar cuando 1–2 case studies estén completamente escritos.",
    source: "doc-28E §5"
  },
  {
    id: "as-hero-artwork",
    area: "hero-artwork",
    title: "Hero artwork del perfil",
    detail:
      "El artwork destacado debe ser el breakdown TwinSight (proyecto insignia) con cover legible a tamaño thumbnail — no un render genérico. Orden ArtStation: 1) TwinSight breakdown 2) portrait breakdown.",
    source: "doc-29C §8.1, §15.1, §19.2"
  },
  {
    id: "as-noai",
    area: "noai",
    title: "NoAI tagging en ambos proyectos",
    detail:
      "Activar el checkbox NoAI nativo en TwinSight y en el retrato; hashtags #NoAI #NoAIArt + línea de disclaimer en la descripción (doc-28E §6). Sin evidencia de impacto negativo en ranking.",
    source: "doc-28E §6"
  }
];

export const artstationChecklistAreas: { area: ArtStationChecklistArea; label: string }[] = [
  { area: "headline", label: "Titular y resumen" },
  { area: "skills", label: "Skills y tags" },
  { area: "software", label: "Software" },
  { area: "availability", label: "Disponibilidad" },
  { area: "links", label: "Links" },
  { area: "hero-artwork", label: "Hero artwork" },
  { area: "noai", label: "NoAI" }
];
