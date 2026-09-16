// src/data/career/cv/cvVariants.ts — Las 5 variantes del doc-17 §4–§8, 1:1.
// V5 es ruta secundaria («use selectively», doc §8).

import type { CvVariant } from './cvTypes';

export const cvVariants: CvVariant[] = [
  {
    id: 'realtime-unity',
    name: 'Real-Time 3D / Unity Developer',
    targetRoles: [
      'Real-Time 3D Developer', 'Unity Developer', 'Interactive 3D Developer',
      'Unity C# Developer', 'Unity Technical Developer', 'Interactive Visualization Developer',
    ],
    headerTitle: 'Real-Time 3D Developer | Unity, C#, WebGL, Technical Visualization',
    summary:
      'Real-Time 3D Developer focused on Unity, C#, WebGL deployment, interactive technical visualization, and optimized 3D asset workflows. Built TwinSight X500, a Unity WebGL prototype for drone assembly inspection using component selection, exploded views, cross-section tools, visual modes, technical UI, and CAD-to-realtime optimization.',
    skillsEmphasis: ['Unity', 'C#', 'Unity WebGL', 'URP', 'UI Toolkit', 'runtime systems', 'technical UI', 'asset optimization', 'Blender', 'Git/GitHub', 'performance constraints'],
    skillsDeemphasize: ['Python AI tooling', 'full-stack', 'Houdini', 'character art'],
    projectOrder: ['twinsight-x500', 'ara-framework'],
    projectBullets: {
      'twinsight-x500': [
        'Built runtime interaction systems in Unity/C# for component selection, exploded views, cross-section/clipping, visual modes, and technical information panels.',
        'Designed the application for WebGL deployment, accounting for browser constraints, interaction clarity, asset optimization, and performance-conscious delivery.',
        'Integrated optimized 3D assets, UI Toolkit interfaces, and inspection workflows into a cohesive real-time technical visualization prototype.',
      ],
      'ara-framework': [
        'Developed Python automation prototypes to support research, documentation, and technical workflow acceleration.',
      ],
    },
    keywords: ['Unity', 'C#', 'Real-Time 3D', 'Interactive 3D', 'WebGL', 'URP', 'UI Toolkit', 'Runtime Systems', 'Technical Visualization', '3D Optimization', 'CAD-to-Realtime', 'Blender', 'Git'],
  },
  {
    id: 'techvis-digitaltwin',
    name: 'Technical Visualization / Digital Twin / Simulation',
    targetRoles: [
      'Technical Visualization Developer', 'Digital Twin Visualization Developer', 'Simulation Developer',
      'Industrial Visualization Developer', 'CAD Visualization Developer', 'Training Simulation Developer',
      'Product/Assembly Visualization Developer',
    ],
    headerTitle: 'Technical Visualization Developer | Unity WebGL, CAD-to-Realtime, Simulation-Oriented 3D',
    summary:
      'Technical Visualization Developer focused on transforming complex technical assets and documentation into interactive real-time 3D systems. Built TwinSight X500, a Unity WebGL drone assembly visualization prototype that combines CAD-to-realtime optimization, component inspection, exploded views, cross-sections, visual modes, and usability/workload evaluation.',
    skillsEmphasis: ['technical visualization', 'CAD-to-realtime', 'Unity WebGL', 'Blender optimization', 'component inspection', 'assembly visualization', 'cross-section tools', 'exploded view', 'usability evaluation', 'SUS', 'NASA-TLX'],
    skillsDeemphasize: ['game development', 'pure 3D art', 'full-stack'],
    projectOrder: ['twinsight-x500', 'ara-framework'],
    projectBullets: {
      'twinsight-x500': [
        'Converted CAD-derived drone assembly assets into an optimized Unity WebGL visualization prototype for inspection and spatial understanding.',
        'Built inspection features including component selection, exploded view, cross-section/clipping, visual modes, and technical part information panels.',
        'Connected technical implementation with evaluation methods — SUS average 91.88 and NASA-TLX Raw 8.69 (3D viewer) vs 19.89 (2D support) across 12 participants (Think-Aloud included).',
      ],
      'ara-framework': [
        'Built a Python-based research automation prototype supporting structured analysis, documentation, and technical report generation.',
      ],
    },
    keywords: ['Technical Visualization', 'Digital Twin', 'Simulation', 'CAD-to-Realtime', 'Unity', 'Unity WebGL', 'Interactive 3D', 'Industrial Visualization', 'Assembly Visualization', 'Cross-Section', 'Exploded View', 'Usability Evaluation', 'Technical Documentation'],
  },
  {
    id: 'unity-webgl',
    name: 'Unity WebGL / Interactive 3D Developer',
    targetRoles: [
      'Unity WebGL Developer', 'Interactive 3D Developer', 'Web 3D Developer',
      '3D Web Developer', 'WebGL Visualization Developer', 'Interactive Product / Technical Visualization Developer',
    ],
    headerTitle: 'Unity WebGL / Interactive 3D Developer | Browser-Based Technical Visualization',
    summary:
      'Unity WebGL / Interactive 3D Developer focused on browser-accessible technical visualization, optimized 3D assets, and real-time interaction systems. Built TwinSight X500, a WebGL-based drone assembly inspection prototype with component selection, exploded view, cross-sections, visual modes, and technical UI.',
    skillsEmphasis: ['Unity WebGL', 'browser deployment', 'optimized assets', 'UI Toolkit', 'runtime interaction', 'technical UI', 'Blender optimization', 'WebAssembly/WebGL concepts', 'GitHub'],
    skillsDeemphasize: ['XR', 'pure game development', 'offline rendering', 'full-stack unless role requires it'],
    projectOrder: ['twinsight-x500', 'ara-framework'],
    projectBullets: {
      'twinsight-x500': [
        'Built a Unity WebGL interactive 3D prototype designed for browser-based inspection of drone assembly components.',
        'Developed interaction systems and technical UI for selecting, isolating, inspecting, and visually analyzing 3D components.',
        'Prepared optimized 3D assets for web deployment, balancing visual clarity, geometry reduction, and interaction performance.',
      ],
      'ara-framework': [
        'Built supporting web prototypes using Python/FastAPI, React, PostgreSQL, and Redis concepts in private experimental projects. [include only if demonstrable]',
      ],
    },
    keywords: ['Unity WebGL', 'WebGL', 'WebAssembly', 'Interactive 3D', 'Web 3D', 'Browser-Based 3D', 'Technical UI', 'Unity C#', '3D Optimization', 'Blender', 'Product Visualization', '3D Configurator'],
  },
  {
    id: 'unity-ta',
    name: 'Unity Technical Artist',
    targetRoles: [
      'Unity Technical Artist', 'Technical Artist', 'Technical Art Generalist',
      'Runtime Technical Artist', 'Technical Artist — Optimization', 'Technical Artist — Tools',
    ],
    headerTitle: 'Unity Technical Artist | Real-Time 3D Optimization, Runtime Systems, Technical Visualization',
    summary:
      'Unity Technical Artist focused on bridging 3D asset production, real-time optimization, runtime interaction systems, and technical visualization. Built TwinSight X500, a Unity WebGL drone assembly inspection prototype involving CAD-to-realtime asset preparation, technical UI, visual modes, component interaction, and performance-conscious deployment.',
    skillsEmphasis: ['Unity', 'C#', 'Blender', 'technical art', 'optimization', 'retopology', 'UVs', 'baking', 'Shader Graph', 'visual modes', 'UI Toolkit', 'runtime interaction', 'Python tooling'],
    skillsDeemphasize: ['senior shader specialization', 'Houdini FX unless completed', 'pure character art'],
    projectOrder: ['twinsight-x500', 'blender-portrait', 'ara-framework'],
    projectBullets: {
      'twinsight-x500': [
        'Built technical art workflows connecting CAD-derived geometry, Blender optimization, Unity integration, visual modes, and runtime interaction systems.',
        'Developed real-time inspection tools including exploded view, cross-section/clipping, component selection, and technical UI panels.',
        'Created optimized asset workflows for WebGL deployment, balancing geometry reduction, visual fidelity, and usability requirements.',
      ],
      'blender-portrait': [
        'Completed a Blender portrait study focused on topology, materials, grooming, lighting, and rendering, used as supporting evidence of 3D pipeline literacy.',
      ],
      'ara-framework': [
        'Built Python-based workflow automation prototypes that support research, technical documentation, and production-tooling thinking.',
      ],
    },
    keywords: ['Technical Artist', 'Unity Technical Artist', 'Real-Time 3D', 'Unity', 'C#', 'Shader Graph', 'URP', 'Blender', 'Optimization', 'Retopology', 'UVs', 'Baking', 'Runtime Tools', 'Technical UI', 'Python Tools'],
  },
  {
    id: 'tools-python',
    name: 'Tools / Python Automation Developer',
    targetRoles: [
      'Python Automation Developer', 'Tools Developer', 'Pipeline Developer',
      'Research Automation Developer', 'LLM Application Developer', 'AI Tools Developer',
    ],
    headerTitle: 'Tools / Python Automation Developer | Research Automation, Technical Workflows, Real-Time 3D Support',
    summary:
      'Tools / Python Automation Developer with a background in real-time 3D, technical visualization, and AI-assisted production workflows. Built ARA Framework, a Python/LangGraph research automation prototype, and TwinSight X500, a Unity WebGL technical visualization project demonstrating systems thinking, documentation, and technical integration.',
    skillsEmphasis: ['Python', 'LangGraph', 'LangChain', 'Redis', 'APIs', 'automation', 'research tooling', 'technical documentation', 'Git/GitHub', 'AI-assisted workflows', 'Unity/C# as domain context'],
    skillsDeemphasize: ['Deep ML', 'model training', 'MLOps', 'data science', 'senior AI engineering'],
    projectOrder: ['ara-framework', 'twinsight-x500'],
    projectBullets: {
      'ara-framework': [
        'Built ARA Framework, a Python-based research automation prototype using agent-style workflow orchestration for niche analysis, literature research, technical planning, and report synthesis.',
        'Designed a modular multi-agent architecture with checkpointing, structured outputs, API integrations, document-processing concepts, and Markdown report generation.',
        'Used LLM orchestration tools as workflow infrastructure while avoiding claims of ML model training or production AI engineering.',
      ],
      'twinsight-x500': [
        'Applied automation-oriented technical thinking to a Unity WebGL visualization system, integrating runtime features, documentation, validation, and AI-assisted development workflows.',
      ],
    },
    keywords: ['Python', 'Automation', 'LangGraph', 'LangChain', 'Redis', 'APIs', 'Research Tooling', 'Technical Documentation', 'Git/GitHub', 'AI-Assisted Workflows'],
    secondaryRoute: true,
  },
];

export function getCvVariant(id: string): CvVariant | undefined {
  return cvVariants.find((v) => v.id === id);
}
