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
