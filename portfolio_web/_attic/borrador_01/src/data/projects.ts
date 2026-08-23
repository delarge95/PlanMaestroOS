import { links } from "./links";

export type Metric = {
  label: string;
  value: string;
  detail: string;
  status?: "verify" | "safe" | "placeholder";
};

export type Project = {
  id: string;
  slug: string;
  title: string;
  eyebrow: string;
  subtitle: string;
  summary: string;
  proof: string;
  role: string;
  primaryStack: string[];
  secondaryStack: string[];
  stack: string[];
  tags: string[];
  href: string;
  caseStudyUrl: string;
  liveUrl?: string;
  demoUrl?: string;
  media: string;
  mediaAlt: string;
  accent: "cyan" | "warm" | "green";
  links: { label: string; href: string }[];
  galleryRole: string;
  interactionNotes: string;
  metrics?: Metric[];
  statusNote?: string;
};

export type GalleryItem = {
  id: string;
  title: string;
  year: string;
  category: string;
  image: string;
  projectHref: string;
  tags: string[];
  shortSignal: string;
  accent: "cyan" | "warm" | "green";
};

export const twinsightMetrics: Metric[] = [
  {
    label: "Optimized geometry",
    value: "95,617",
    detail: "Triangles in the optimized WebGL-ready model.",
    status: "verify"
  },
  {
    label: "Source routes",
    value: "6.5M+",
    detail: "Triangle-heavy CAD-derived routes documented in the strategy.",
    status: "verify"
  },
  {
    label: "Participants",
    value: "12",
    detail: "Academic formative evaluation sample.",
    status: "verify"
  },
  {
    label: "SUS average",
    value: "91.88",
    detail: "Usability perception metric pending final report verification.",
    status: "verify"
  },
  {
    label: "NASA-TLX Raw",
    value: "8.69 vs 19.89",
    detail: "3D viewer condition vs 2D support condition.",
    status: "verify"
  },
  {
    label: "Task records",
    value: "96",
    detail: "Structured task-condition records.",
    status: "verify"
  }
];

export const humanPipelineStages = [
  "Reference and training context",
  "Sculpting and form development",
  "Modeling and retopology",
  "UV layout and texture organization",
  "Skin material and shader setup",
  "Eyes, brows, beard and hair grooming",
  "Lighting, render control and presentation",
  "Lessons learned and limitations"
];

export const projects: Project[] = [
  {
    id: "twinsight",
    slug: "twinsight-x500",
    title: "TwinSight X500",
    eyebrow: "Flagship technical visualization",
    subtitle: "Unity WebGL technical visualization for drone assembly inspection.",
    summary:
      "A browser-based 3D inspection prototype that turns CAD-derived drone assets into an optimized Unity WebGL experience with selection, exploded views, clipping, visual modes, technical UI and formative usability testing.",
    proof:
      "Shows Unity/C# runtime systems, WebGL delivery, CAD-to-realtime optimization, technical UI, interaction design, visual modes and evaluation thinking.",
    role:
      "Real-time 3D development, Unity WebGL integration, runtime interaction systems, technical UI, visual modes, Blender-based asset preparation, documentation and evaluation design.",
    primaryStack: ["Unity", "C#", "WebGL", "URP"],
    secondaryStack: ["UI Toolkit", "Blender", "CAD-to-Realtime", "Optimization", "Evaluation"],
    stack: ["Unity", "C#", "WebGL", "URP", "UI Toolkit", "Blender", "CAD-to-Realtime"],
    tags: ["Technical Visualization", "Interactive 3D", "Optimization", "Evaluation"],
    href: "/twinsight-x500",
    caseStudyUrl: "/twinsight-x500",
    liveUrl: links.twinsightLiveDemo,
    demoUrl: links.twinsightDemo,
    media: "/assets/placeholders/twinsight-hero.svg",
    mediaAlt: "TwinSight X500 Unity WebGL viewer placeholder with drone inspection UI.",
    accent: "cyan",
    links: [
      { label: "Watch demo", href: links.twinsightDemo },
      { label: "View GitHub", href: links.twinsightGithub },
      { label: "Open WebGL prototype", href: links.twinsightLiveDemo }
    ],
    galleryRole: "Flagship system",
    interactionNotes:
      "Open the WebGL prototype when the reviewer wants proof of runtime delivery; use the case study when they need the design and optimization story.",
    metrics: twinsightMetrics,
    statusNote:
      "Academic/portfolio prototype. Not a full production digital twin, not live IoT, and not a real thermal simulation."
  },
  {
    id: "human",
    slug: "human-character-pipeline",
    title: "Human Character Pipeline Study",
    eyebrow: "3D workflow depth",
    subtitle: "Blender study in sculpting, topology, UVs, materials, grooming, lighting and rendering.",
    summary:
      "A Blender character pipeline study based on CG Cookie HUMAN training material. It shows the full upstream craft behind a finished 3D asset: form, topology, UVs, material work, grooming, lighting and presentation.",
    proof:
      "Shows full 3D workflow literacy: form, topology, UVs, texture/material thinking, groom setup, lighting, rendering and technical breakdown communication.",
    role:
      "Sculpting, modeling, topology, UV organization, material setup, grooming, lighting, rendering and breakdown documentation.",
    primaryStack: ["Blender", "Topology", "Materials", "Grooming"],
    secondaryStack: ["UVs", "Lighting", "Rendering", "Lookdev", "CG Cookie HUMAN"],
    stack: ["Blender", "Topology", "UVs", "Materials", "Grooming", "Lighting", "Rendering"],
    tags: ["Character Pipeline", "Technical Art", "Lookdev", "3D Fundamentals"],
    href: "/human-character-pipeline",
    caseStudyUrl: "/human-character-pipeline",
    media: "/assets/placeholders/human-hero.svg",
    mediaAlt: "Human character pipeline placeholder with portrait, topology, materials and grooming panels.",
    accent: "warm",
    links: [
      { label: "ArtStation breakdown", href: links.humanArtStation }
    ],
    galleryRole: "3D workflow pillar",
    interactionNotes:
      "Use this project when the reviewer needs evidence of sculpt, retopology, UV, material, grooming and render literacy behind the real-time work.",
    statusNote:
      "Non-certified training-based portfolio study following CG Cookie HUMAN. It is not presented as a professional character-artist commission or formal certification."
  },
  {
    id: "ara",
    slug: "ara-framework",
    title: "ARA Framework",
    eyebrow: "Secondary tooling system",
    subtitle: "AI-assisted research automation prototype.",
    summary:
      "A Python research automation prototype for literature analysis, technical planning and structured report generation.",
    proof:
      "Supports tooling, automation, documentation architecture and AI-assisted production workflows without taking over the main Unity/3D story.",
    role:
      "Workflow architecture, research automation logic, structured Markdown report generation and prototype documentation.",
    primaryStack: ["Python", "Research automation", "Markdown"],
    secondaryStack: ["LangGraph-style workflows", "LLM tooling", "Documentation", "Workflow design"],
    stack: ["Python", "LangGraph-style workflows", "Research automation", "Markdown", "LLM tooling"],
    tags: ["AI Tooling", "Python", "Automation", "Documentation"],
    href: "/ara-framework",
    caseStudyUrl: "/ara-framework",
    media: "/assets/placeholders/ara-system.svg",
    mediaAlt: "ARA Framework research automation workflow placeholder.",
    accent: "green",
    links: [{ label: "View GitHub", href: links.araGithub }],
    galleryRole: "Supporting tooling",
    interactionNotes:
      "Keep ARA as a secondary signal for systems thinking, automation and technical writing rather than the main portfolio identity.",
    statusNote:
      "Prototype positioning only. Not described as a production AI platform, ML research system or enterprise product."
  }
];

export const featuredProjects = projects.filter((project) => project.id !== "ai-news");

export const getProject = (id: string) => projects.find((project) => project.id === id);

export const galleryItems: GalleryItem[] = [
  {
    id: "twinsight-inspection",
    title: "Inspection Modes",
    year: "2026",
    category: "Unity WebGL",
    image: "/assets/placeholders/twinsight-visual-modes.svg",
    projectHref: "/twinsight-x500",
    tags: ["Visual Modes", "Runtime UI"],
    shortSignal: "Selection, clipping and visual states built for technical reading.",
    accent: "cyan"
  },
  {
    id: "cad-pipeline",
    title: "CAD to Realtime",
    year: "2026",
    category: "Pipeline",
    image: "/assets/placeholders/pipeline-diagram.svg",
    projectHref: "/twinsight-x500",
    tags: ["Optimization", "Blender"],
    shortSignal: "Heavy source geometry reorganized for browser-first inspection.",
    accent: "cyan"
  },
  {
    id: "human-topology",
    title: "Human Topology Pass",
    year: "2026",
    category: "Blender Study",
    image: "/assets/placeholders/human-breakdown.svg",
    projectHref: "/human-character-pipeline",
    tags: ["Topology", "UVs"],
    shortSignal: "Mesh and UV evidence supporting production literacy.",
    accent: "warm"
  },
  {
    id: "human-lookdev",
    title: "Skin Lookdev Notes",
    year: "2026",
    category: "Technical Art",
    image: "/assets/placeholders/human-hero.svg",
    projectHref: "/human-character-pipeline",
    tags: ["Materials", "Lighting"],
    shortSignal: "Material response, grooming and lighting treated as a controlled study.",
    accent: "warm"
  },
  {
    id: "ara-research",
    title: "Research Automation",
    year: "2026",
    category: "Python Tooling",
    image: "/assets/placeholders/ara-system.svg",
    projectHref: "/ara-framework",
    tags: ["Automation", "Docs"],
    shortSignal: "Structured workflows for technical synthesis and documentation.",
    accent: "green"
  },
  {
    id: "portfolio-system",
    title: "Living Portfolio System",
    year: "2026",
    category: "UX System",
    image: "/assets/placeholders/twinsight-hero.svg",
    projectHref: "/work",
    tags: ["Storytelling", "Variants"],
    shortSignal: "Role-specific routes keep the same evidence aligned to different applications.",
    accent: "green"
  }
];
