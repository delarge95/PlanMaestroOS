// src/data/cv/cvBase.ts — AG-PORT
// Base CV content structured from doc 17 (17_cv_base_and_role_variants.md).
// Claim discipline (doc 17 §1): no seniority overclaim, no EU work authorization,
// no certification claims. Placeholders from doc 17 §2 stay explicit.

import { links } from "../links";
import type {
  CvBullet,
  CvContact,
  CvEducationBlock,
  CvExperienceBlock,
  CvSkillGroup
} from "./types";

const PLACEHOLDER = (value: string) => value.startsWith("[");

export const cvName = "Alexander Woodcock Salomón";
export const cvLocationLine = "Colombia | Available for remote contractor/B2B roles";

export const cvContacts: CvContact[] = [
  { label: "Email", value: links.email, isPlaceholder: PLACEHOLDER(links.email) },
  { label: "LinkedIn", value: links.linkedIn },
  { label: "GitHub", value: links.githubProfile },
  { label: "Portfolio", value: links.portfolio, isPlaceholder: PLACEHOLDER(links.portfolio) },
  { label: "ArtStation", value: links.artStation }
];

/** Core stack block mirroring the job family (doc 28B §6.3). */
export const cvCoreStack: string[] = [
  "Unity | C# | WebGL | URP | UI Toolkit | Shader Graph",
  "Blender | CAD-to-Realtime | UVs | Texture Baking | Optimization",
  "Python | Git/GitHub | Technical Documentation | Usability Testing"
];

/** Skill groups by function (doc 17 §3 "Technical skills"; grouping rule doc 28B §4.4). */
export const cvSkillGroups: CvSkillGroup[] = [
  {
    id: "unity",
    name: "Unity / Real-Time 3D",
    items:
      "Unity, C#, Unity WebGL, URP, UI Toolkit, Shader Graph, runtime interaction systems, component selection, exploded view, cross-section tools, visual modes.",
    source: "doc-17 §3, doc-28B §6.3"
  },
  {
    id: "pipeline",
    name: "3D Pipeline",
    items:
      "Blender, CAD-to-realtime optimization, retopology, UVs, baking, high-poly to low-poly workflows, technical asset preparation.",
    source: "doc-17 §3, doc-28B §6.3"
  },
  {
    id: "programming",
    name: "Programming / Tooling",
    items:
      "Python, Git/GitHub, AI-assisted coding workflows, LangGraph prototype experience, basic FastAPI/React/PostgreSQL concepts.",
    source: "doc-17 §3"
  },
  {
    id: "evaluation",
    name: "Evaluation / Documentation",
    items:
      "SUS, NASA-TLX Raw, Think-Aloud, technical documentation, usability evaluation, multimedia engineering.",
    source: "doc-17 §3"
  }
];

/**
 * TwinSight bullet pool. Keys map to variant selections (doc 17 §3 base +
 * per-variant bullets §4–§8). Bullets carrying metrics keep the verify flag
 * until the final report confirms them (doc 17 §3, §18; doc 28B §9.4).
 */
export const twinsightBullets: Record<string, CvBullet> = {
  baseBuilt: {
    text: "Built an interactive Unity WebGL 3D visualization prototype for inspecting and understanding the assembly of a Holybro X500 V2 drone.",
    source: "doc-17 §3"
  },
  baseRuntime: {
    text: "Developed runtime interaction systems for component selection, exploded view, cross-section/clipping, visual modes, and technical part information panels.",
    source: "doc-17 §3"
  },
  baseCad: {
    text: "Implemented a CAD-to-realtime asset workflow using Blender-based cleanup, optimization, retopology, UV preparation, and high-to-low asset processing."
  },
  baseOptimized: {
    text: "Optimized CAD-derived geometry from over 6.5M triangles to approximately 95,617 triangles.",
    verify: true,
    source: "doc-17 §3 (verify final number)"
  },
  baseBrowser: {
    text: "Designed a browser-accessible inspection experience focused on spatial understanding, technical clarity, and mobile/web performance constraints."
  },
  baseEvaluated: {
    text: "Evaluated the prototype through usability and workload instruments, including SUS, NASA-TLX Raw, and Think-Aloud methodology.",
    verify: true,
    source: "doc-17 §3 (verify final metrics)"
  },
  baseAi: {
    text: "Used AI as an implementation and debugging assistant while retaining responsibility for architecture, integration, validation, technical judgment, and final ownership."
  },
  /**
   * Structure-scale bullet from the benchmark (doc 28B §6.4/§9.3). The 28/30/257
   * counts are documented thesis-context metrics (doc 28B §4.3 "usable current
   * metrics"); FPS/SUS/NASA-TLX stay pending and never appear without verification.
   */
  scaleStructure: {
    text: "Structured the model into 28 canonical research parts, 30 scene nodes, and 257 technical elements prepared for interactive inspection.",
    source: "doc-28B §6.4, §9.3"
  },
  v1Runtime: {
    text: "Built runtime interaction systems in Unity/C# for component selection, exploded views, cross-section/clipping, visual modes, and technical information panels.",
    source: "doc-17 §4"
  },
  v1Webgl: {
    text: "Designed the application for WebGL deployment, accounting for browser constraints, interaction clarity, asset optimization, and performance-conscious delivery.",
    source: "doc-17 §4"
  },
  v1Integrated: {
    text: "Integrated optimized 3D assets, UI Toolkit interfaces, and inspection workflows into a cohesive real-time technical visualization prototype.",
    source: "doc-17 §4"
  },
  v2Converted: {
    text: "Converted CAD-derived drone assembly assets into an optimized Unity WebGL visualization prototype for inspection and spatial understanding.",
    source: "doc-17 §5"
  },
  v2Inspection: {
    text: "Built inspection features including component selection, exploded view, cross-section/clipping, visual modes, and technical part information panels.",
    source: "doc-17 §5"
  },
  v2Evaluated: {
    text: "Connected technical implementation with evaluation methods, using SUS, NASA-TLX Raw, and Think-Aloud to compare user experience and perceived workload.",
    verify: true,
    source: "doc-17 §5 (verify exact metrics)"
  },
  v3Browser: {
    text: "Built a Unity WebGL interactive 3D prototype designed for browser-based inspection of drone assembly components.",
    source: "doc-17 §6"
  },
  v3Interaction: {
    text: "Developed interaction systems and technical UI for selecting, isolating, inspecting, and visually analyzing 3D components.",
    source: "doc-17 §6"
  },
  v3Assets: {
    text: "Prepared optimized 3D assets for web deployment, balancing visual clarity, geometry reduction, and interaction performance.",
    source: "doc-17 §6"
  },
  v4Workflows: {
    text: "Built technical art workflows connecting CAD-derived geometry, Blender optimization, Unity integration, visual modes, and runtime interaction systems.",
    source: "doc-17 §7"
  },
  v4Tools: {
    text: "Developed real-time inspection tools including exploded view, cross-section/clipping, component selection, and technical UI panels.",
    source: "doc-17 §7"
  },
  v4Optimized: {
    text: "Created optimized asset workflows for WebGL deployment, balancing geometry reduction, visual fidelity, and usability requirements.",
    source: "doc-17 §7"
  },
  v5Applied: {
    text: "Applied automation-oriented technical thinking to a Unity WebGL visualization system, integrating runtime features, documentation, validation, and AI-assisted development workflows.",
    source: "doc-17 §8"
  },
  shortBuilt: {
    text: "Built TwinSight X500, a Unity WebGL technical visualization prototype for drone assembly inspection, including component selection, exploded view, cross-section tools, visual modes, and technical UI.",
    source: "doc-17 §3 (short version)"
  },
  shortCad: {
    text: "Created a CAD-to-realtime pipeline using Blender optimization and asset preparation, reducing CAD-derived geometry from over 6.5M triangles to approximately 95,617 triangles.",
    verify: true,
    source: "doc-17 §3 (short version, verify final number)"
  },
  shortEvaluated: {
    text: "Evaluated the prototype using SUS, NASA-TLX Raw, and Think-Aloud methodology, connecting technical implementation with user-centered validation.",
    verify: true,
    source: "doc-17 §3 (short version, verify final metrics)"
  } as CvBullet
};

/** ARA Framework bullet pool (doc 17 §3 base + per-variant §4–§8). */
export const araBullets: Record<string, CvBullet> = {
  baseDeveloped: {
    text: "Developed a Python-based research automation prototype using LangGraph-style agent orchestration for niche analysis, literature research, technical architecture planning, implementation guidance, and report synthesis."
  },
  baseDesigned: {
    text: "Designed a multi-agent workflow with checkpointing, budget awareness, external research APIs, PDF/document processing concepts, and structured Markdown report generation."
  },
  basePositioned: {
    text: "Positioned the system as a research-tooling prototype, not as a production AI platform, emphasizing automation architecture, workflow design, and technical documentation."
  },
  short: {
    text: "Built ARA Framework, a Python/LangGraph research automation prototype for multi-agent literature analysis, technical planning, and structured report generation.",
    source: "doc-17 §3 (short version)"
  },
  v1: {
    text: "Developed Python automation prototypes to support research, documentation, and technical workflow acceleration.",
    source: "doc-17 §4"
  },
  v2: {
    text: "Built a Python-based research automation prototype supporting structured analysis, documentation, and technical report generation.",
    source: "doc-17 §5"
  },
  v4: {
    text: "Built Python-based workflow automation prototypes that support research, technical documentation, and production-tooling thinking.",
    source: "doc-17 §7"
  },
  v5a: {
    text: "Built ARA Framework, a Python-based research automation prototype using agent-style workflow orchestration for niche analysis, literature research, technical planning, and report synthesis.",
    source: "doc-17 §8"
  },
  v5b: {
    text: "Designed a modular multi-agent architecture with checkpointing, structured outputs, API integrations, document-processing concepts, and Markdown report generation.",
    source: "doc-17 §8"
  },
  v5c: {
    text: "Used LLM orchestration tools as workflow infrastructure while avoiding claims of ML model training or production AI engineering.",
    source: "doc-17 §8"
  }
};

/** Blender portrait bullet pool (doc 17 §3 + §7 variant). */
export const humanBullets: Record<string, CvBullet> = {
  base: {
    text: "Completed a high-fidelity Blender portrait study focused on topology, material definition, grooming, lighting, and realistic rendering."
  },
  basePositioned: {
    text: "Used the project as technical art evidence for 3D pipeline understanding rather than as a primary character-artist positioning asset."
  },
  v4: {
    text: "Completed a Blender portrait study focused on topology, materials, grooming, lighting, and rendering, used as supporting evidence of 3D pipeline literacy.",
    source: "doc-17 §7"
  }
};

export const cvExperience: CvExperienceBlock[] = [
  {
    title: "Independent Technical Artist & Developer",
    meta: "Freelance / Self-Directed Projects | Colombia | Mar 2024 – Present",
    bullets: [
      "Built portfolio and thesis projects combining Unity, C#, Blender, WebGL, Python automation, and technical visualization workflows.",
      "Developed interactive 3D systems, real-time visualization prototypes, and technical documentation for web-based and multimedia applications.",
      "Used AI-assisted development workflows to accelerate implementation, debugging, research, and documentation while maintaining final technical ownership."
    ],
    source: "doc-17 §3"
  }
];

export const cvEducation: CvEducationBlock[] = [
  {
    title: "Universidad Nacional Abierta y a Distancia — UNAD",
    meta: "B.Eng. / Ingeniería Multimedia | Expected [date]",
    bullets: [
      "Thesis: TwinSight X500 — Unity WebGL interactive technical visualization prototype for drone assembly inspection.",
      "Relevant focus: computer graphics, multimedia systems, software development, technical documentation, usability evaluation, and interactive 3D applications."
    ],
    source: "doc-17 §3, §11"
  },
  {
    title: "Universidad Nacional de Colombia — UNAL",
    meta: "Advanced Coursework in Electronic Engineering | 2013 – 2018",
    bullets: [
      "Completed advanced coursework in mathematics, physics, electronics, programming logic, systems thinking, and engineering fundamentals.",
      "Academic background supports technical reasoning in real-time systems, optimization, hardware-aware thinking, and technical visualization."
    ],
    source: "doc-17 §3, §11"
  }
];

/** Training wording (doc 17 §12: never listed as certifications). */
export const cvTraining: string[] = [
  "CG Cookie HUMAN — High-Fidelity Character Pipeline & Topology. Non-certified training.",
  "Alive! — 3D Animation Mechanics & Dynamic Motion. Non-certified training.",
  "Rebelway — Houdini / Real-Time FX / Procedural Workflows. [if completed/in progress]"
];

/** Languages wording (doc 17 §3: self-assessed, no certificate claims). */
export const cvLanguages: string[] = [
  "Spanish — Native",
  "English — Professional working proficiency / C1 self-assessed",
  "German — Beginner",
  "Portuguese — Planned / strategically relevant for future Portugal/EU route"
];

/** Fields still requiring user confirmation before PDF export (doc 17 §2, §18). */
export const cvPendingConfirmations: string[] = [
  "Confirm professional email (replaces [EMAIL]).",
  "Confirm phone/WhatsApp line (currently omitted).",
  "Confirm portfolio URL (replaces [PORTFOLIO_URL]).",
  "Verify exact TwinSight metrics against the final report (triangles, SUS, NASA-TLX).",
  "Confirm thesis defense / UNAD graduation wording (replaces [date]).",
  "Confirm which freelance work can be public.",
  "Confirm ARA repository public/private status.",
  "Confirm language wording and work authorization line before export."
];
