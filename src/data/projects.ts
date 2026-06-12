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
  stack: string[];
  tags: string[];
  href: string;
  media: string;
  mediaAlt: string;
  accent: "cyan" | "warm" | "green";
  links: { label: string; href: string }[];
  metrics?: Metric[];
  statusNote?: string;
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
    stack: ["Unity", "C#", "WebGL", "URP", "UI Toolkit", "Blender", "CAD-to-Realtime"],
    tags: ["Technical Visualization", "Interactive 3D", "Optimization", "Evaluation"],
    href: "/twinsight-x500",
    media: "/assets/placeholders/twinsight-hero.svg",
    mediaAlt: "TwinSight X500 Unity WebGL viewer placeholder with drone inspection UI.",
    accent: "cyan",
    links: [
      { label: "Watch demo", href: links.twinsightDemo },
      { label: "View GitHub", href: links.twinsightGithub },
      { label: "Open WebGL prototype", href: links.twinsightLiveDemo }
    ],
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
    stack: ["Blender", "Topology", "UVs", "Materials", "Grooming", "Lighting", "Rendering"],
    tags: ["Character Pipeline", "Technical Art", "Lookdev", "3D Fundamentals"],
    href: "/human-character-pipeline",
    media: "/assets/placeholders/human-hero.svg",
    mediaAlt: "Human character pipeline placeholder with portrait, topology, materials and grooming panels.",
    accent: "warm",
    links: [
      { label: "View breakdown", href: "/human-character-pipeline" },
      { label: "ArtStation", href: links.humanArtStation }
    ],
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
    stack: ["Python", "LangGraph-style workflows", "Research automation", "Markdown", "LLM tooling"],
    tags: ["AI Tooling", "Python", "Automation", "Documentation"],
    href: "/ara-framework",
    media: "/assets/placeholders/ara-system.svg",
    mediaAlt: "ARA Framework research automation workflow placeholder.",
    accent: "green",
    links: [{ label: "View GitHub", href: links.araGithub }],
    statusNote:
      "Prototype positioning only. Not described as a production AI platform, ML research system or enterprise product."
  }
];

export const featuredProjects = projects.filter((project) => project.id !== "ai-news");

export const getProject = (id: string) => projects.find((project) => project.id === id);
