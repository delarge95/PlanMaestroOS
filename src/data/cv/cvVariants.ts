// src/data/cv/cvVariants.ts — AG-PORT
// Role variants from doc 17 §4–§8. File names and production priority follow
// doc 17 §17. Every variant carries its doc-17 section citations.

import type { CvVariant } from "./types";

export const cvVariants: CvVariant[] = [
  {
    slug: "realtime-3d-unity",
    label: "Real-Time 3D / Unity Developer",
    headline: "Real-Time 3D Developer | Unity, C#, WebGL, Technical Visualization",
    summary:
      "Real-Time 3D Developer focused on Unity, C#, WebGL deployment, interactive technical visualization, and optimized 3D asset workflows. Built TwinSight X500, a Unity WebGL prototype for drone assembly inspection using component selection, exploded views, cross-section tools, visual modes, technical UI, and CAD-to-realtime optimization.",
    targets: [
      "Real-Time 3D Developer",
      "Unity Developer",
      "Interactive 3D Developer",
      "Unity C# Developer",
      "Unity Technical Developer",
      "Interactive Visualization Developer"
    ],
    keywords: [
      "Unity",
      "C#",
      "Real-Time 3D",
      "Interactive 3D",
      "WebGL",
      "URP",
      "UI Toolkit",
      "Runtime Systems",
      "Technical Visualization",
      "3D Optimization",
      "CAD-to-Realtime",
      "Blender",
      "Git"
    ],
    fileName: "Alexander_Woodcock_RealTime3D_Unity_CV",
    producePriority: 1,
    skillGroupOrder: ["unity", "pipeline", "programming", "evaluation"],
    projectBullets: {
      twinsight: ["v1Runtime", "v1Webgl", "v1Integrated"],
      ara: ["v1"]
    },
    sources: ["doc-17 §4"]
  },
  {
    slug: "technical-visualization",
    label: "Technical Visualization / Digital Twin",
    headline:
      "Technical Visualization Developer | Unity WebGL, CAD-to-Realtime, Simulation-Oriented 3D",
    summary:
      "Technical Visualization Developer focused on transforming complex technical assets and documentation into interactive real-time 3D systems. Built TwinSight X500, a Unity WebGL drone assembly visualization prototype that combines CAD-to-realtime optimization, component inspection, exploded views, cross-sections, visual modes, and usability/workload evaluation.",
    targets: [
      "Technical Visualization Developer",
      "Digital Twin Visualization Developer",
      "Simulation Developer",
      "Industrial Visualization Developer",
      "CAD Visualization Developer",
      "Training Simulation Developer",
      "Product/Assembly Visualization Developer"
    ],
    keywords: [
      "Technical Visualization",
      "Digital Twin",
      "Simulation",
      "CAD-to-Realtime",
      "Unity",
      "Unity WebGL",
      "Interactive 3D",
      "Industrial Visualization",
      "Assembly Visualization",
      "SUS",
      "NASA-TLX"
    ],
    fileName: "Alexander_Woodcock_Technical_Visualization_CV",
    producePriority: 1,
    skillGroupOrder: ["pipeline", "unity", "evaluation", "programming"],
    projectBullets: {
      twinsight: ["v2Converted", "v2Inspection", "v2Evaluated"],
      ara: ["v2"]
    },
    sources: ["doc-17 §5"]
  },
  {
    slug: "unity-webgl",
    label: "Unity WebGL / Interactive 3D",
    headline: "Unity WebGL / Interactive 3D Developer | Browser-Based Technical Visualization",
    summary:
      "Unity WebGL / Interactive 3D Developer focused on browser-accessible technical visualization, optimized 3D assets, and real-time interaction systems. Built TwinSight X500, a WebGL-based drone assembly inspection prototype with component selection, exploded view, cross-sections, visual modes, and technical UI.",
    targets: [
      "Unity WebGL Developer",
      "Interactive 3D Developer",
      "Web 3D Developer",
      "3D Web Developer",
      "WebGL Visualization Developer",
      "Interactive Product / Technical Visualization Developer"
    ],
    keywords: [
      "Unity WebGL",
      "WebGL",
      "WebAssembly",
      "Interactive 3D",
      "Web 3D",
      "Browser-Based 3D",
      "Technical UI",
      "Unity C#",
      "3D Optimization",
      "Blender",
      "Product Visualization",
      "3D Configurator"
    ],
    fileName: "Alexander_Woodcock_Unity_WebGL_CV",
    producePriority: 1,
    skillGroupOrder: ["unity", "pipeline", "programming", "evaluation"],
    projectBullets: {
      twinsight: ["v3Browser", "v3Interaction", "v3Assets"],
      ara: []
    },
    sources: ["doc-17 §6"]
  },
  {
    slug: "unity-technical-artist",
    label: "Unity Technical Artist",
    headline:
      "Unity Technical Artist | Real-Time 3D Optimization, Runtime Systems, Technical Visualization",
    summary:
      "Unity Technical Artist focused on bridging 3D asset production, real-time optimization, runtime interaction systems, and technical visualization. Built TwinSight X500, a Unity WebGL drone assembly inspection prototype involving CAD-to-realtime asset preparation, technical UI, visual modes, component interaction, and performance-conscious deployment.",
    targets: [
      "Unity Technical Artist",
      "Technical Artist",
      "Technical Art Generalist",
      "Runtime Technical Artist",
      "Technical Artist — Optimization",
      "Technical Artist — Tools"
    ],
    keywords: [
      "Technical Artist",
      "Unity Technical Artist",
      "Real-Time 3D",
      "Unity",
      "C#",
      "Shader Graph",
      "URP",
      "Blender",
      "Optimization",
      "Retopology",
      "UVs",
      "Baking",
      "Runtime Tools",
      "Technical UI",
      "Python Tools"
    ],
    fileName: "Alexander_Woodcock_Unity_Technical_Artist_CV",
    producePriority: 2,
    skillGroupOrder: ["pipeline", "unity", "programming", "evaluation"],
    projectBullets: {
      twinsight: ["v4Workflows", "v4Tools", "v4Optimized"],
      ara: ["v4"],
      human: ["v4"]
    },
    sources: ["doc-17 §7"]
  },
  {
    slug: "tools-python-automation",
    label: "Tools / Python Automation",
    headline:
      "Tools / Python Automation Developer | Research Automation, Technical Workflows, Real-Time 3D Support",
    summary:
      "Tools / Python Automation Developer with a background in real-time 3D, technical visualization, and AI-assisted production workflows. Built ARA Framework, a Python/LangGraph research automation prototype, and TwinSight X500, a Unity WebGL technical visualization project demonstrating systems thinking, documentation, and technical integration.",
    targets: [
      "Python Automation Developer",
      "Tools Developer",
      "Pipeline Developer",
      "Research Automation Developer",
      "LLM Application Developer",
      "AI Tools Developer"
    ],
    keywords: [
      "Python",
      "Automation",
      "LangGraph",
      "LangChain",
      "LLM Applications",
      "Research Automation",
      "Workflow Automation",
      "Technical Documentation",
      "APIs",
      "Redis",
      "Playwright",
      "GitHub",
      "AI-Assisted Development"
    ],
    fileName: "Alexander_Woodcock_Tools_Python_Automation_CV",
    producePriority: 2,
    skillGroupOrder: ["programming", "unity", "pipeline", "evaluation"],
    projectBullets: {
      twinsight: ["v5Applied"],
      ara: ["v5a", "v5b", "v5c"]
    },
    sources: ["doc-17 §8 (secondary route)"]
  }
];

export const cvVariantBySlug = (slug: string): CvVariant | undefined =>
  cvVariants.find((variant) => variant.slug === slug);

export const defaultCvVariantSlug = cvVariants[0].slug;
