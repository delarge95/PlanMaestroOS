// src/data/career/cv/cvData.ts — CV base, 1:1 desde doc-17 §3 (y §19 texto final).
// No editar a mano sin actualizar el doc-17: el doc es la fuente.

import type { CvBaseData } from './cvTypes';

export const cvBase: CvBaseData = {
  profile: {
    fullName: 'Alexander Woodcock Salomón',
    baseTitle: 'Real-Time 3D Developer / Unity Technical Artist',
    location: 'Colombia | Open to remote contractor roles',
    availability: 'Available for remote contractor/B2B work from Colombia.',
    links: [
      { label: 'LinkedIn', url: 'https://www.linkedin.com/in/alexander-woodcock-0132382a6/' },
      { label: 'GitHub', url: 'https://github.com/delarge95' },
      { label: 'ArtStation', url: 'https://www.artstation.com/alexanderwoodcocksalomon3' },
      { label: 'Portfolio', url: '', needsVerification: true },
      { label: 'Email', url: '', needsVerification: true },
      { label: 'Phone', url: '', needsVerification: true },
    ],
  },
  summaryBase:
    'Real-Time 3D Developer / Unity Technical Artist focused on interactive technical visualization, CAD-to-realtime optimization, and Unity WebGL deployment. Background in Multimedia Engineering with advanced Electronic Engineering coursework, combining Unity, C#, Blender, WebGL, technical UI, asset optimization, and Python-assisted tooling. Built TwinSight X500, a Unity WebGL technical visualization prototype for inspecting drone assembly through component selection, exploded views, cross-sections, visual modes, and usability evaluation.',
  skills: [
    {
      group: 'Unity',
      items: ['C#', 'Unity WebGL', 'URP', 'UI Toolkit', 'Shader Graph', 'runtime interaction systems', 'component selection', 'visual modes', 'performance-conscious deployment'],
    },
    {
      group: 'Real-Time 3D',
      items: ['CAD-to-realtime optimization', 'high-poly to low-poly workflow', 'retopology', 'UVs', 'baking', 'mesh optimization', 'technical visualization', 'WebGL constraints'],
    },
    {
      group: '3D Tools',
      items: ['Blender', 'Marmoset Toolbag', 'RizomUV', 'CAD-derived asset cleanup', 'hard-surface modeling', 'technical asset preparation'],
    },
    {
      group: 'Programming & Tooling',
      items: ['C#', 'Python', 'Git/GitHub', 'AI-assisted coding workflows', 'basic FastAPI', 'LangGraph prototype experience', 'web automation concepts'],
    },
    {
      group: 'Design & Evaluation',
      items: ['technical documentation', 'usability evaluation', 'SUS', 'NASA-TLX Raw', 'Think-Aloud', 'multimedia engineering', 'visual communication'],
    },
    {
      group: 'Foundations',
      items: ['computer graphics', 'linear algebra', 'physics', 'electronics coursework', 'systems thinking'],
    },
  ],
  projects: [
    {
      id: 'twinsight-x500',
      name: 'TwinSight X500 — Unity WebGL Technical Visualization Prototype',
      meta: 'Thesis project | Unity, C#, WebGL, URP, UI Toolkit, Blender',
      bullets: [
        'Built TwinSight X500, a Unity WebGL technical visualization prototype for drone assembly inspection, including component selection, exploded view, cross-section tools, visual modes, and technical UI.',
        'Created a CAD-to-realtime pipeline using Blender optimization and asset preparation, reducing CAD-derived geometry from 6.5M+ triangles to 95,617 optimized triangles.',
        'Evaluated the prototype with 12 participants (96 task-condition records) using SUS (average 91.88), NASA-TLX Raw (8.69 for the 3D viewer vs 19.89 for 2D support), and Think-Aloud methodology.',
      ],
    },
    {
      id: 'ara-framework',
      name: 'ARA Framework — AI-Assisted Research Automation Prototype',
      meta: 'Prototype | Python, LangGraph, LangChain, Redis, Semantic Scholar API',
      bullets: [
        'Built ARA Framework, a Python/LangGraph research automation prototype for multi-agent literature analysis, technical planning, and structured report generation.',
      ],
    },
    {
      id: 'blender-portrait',
      name: 'Hyperrealistic Blender Portrait — Technical Art Study',
      meta: 'Personal project | Blender, topology, materials, grooming, lighting, rendering',
      bullets: [
        'Completed a high-fidelity Blender portrait study focused on topology, material definition, grooming, lighting, and realistic rendering, used as supporting evidence of 3D pipeline literacy.',
      ],
    },
    {
      id: 'ai-news-aggregator',
      name: 'ai-news-aggregator — Full-stack AI News Prototype',
      meta: 'Private / optional | FastAPI, React, PostgreSQL, Redis, Python',
      bullets: [
        'Developed a prototype full-stack AI news aggregation and analysis platform using a Python backend, database-backed storage, and a web frontend. [include only if functional/demo-ready]',
      ],
      optional: true,
    },
  ],
  experience: [
    {
      id: 'independent',
      role: 'Independent Technical Artist & Developer',
      org: 'Freelance / Self-Directed Projects',
      period: 'Colombia | Mar 2024 – Present',
      bullets: [
        'Built portfolio and thesis projects combining Unity, C#, Blender, WebGL, Python automation, and technical visualization workflows.',
        'Developed interactive 3D systems, real-time visualization prototypes, and technical documentation for web-based and multimedia applications.',
        'Used AI-assisted development workflows to accelerate implementation, debugging, research, and documentation while maintaining final technical ownership.',
      ],
    },
  ],
  education: [
    {
      id: 'unad',
      degree: 'B.Eng. / Ingeniería Multimedia',
      institution: 'Universidad Nacional Abierta y a Distancia — UNAD',
      period: 'Expected [date]',
      bullets: [
        'Thesis: TwinSight X500 — Unity WebGL interactive technical visualization prototype for drone assembly inspection.',
        'Relevant focus: computer graphics, multimedia systems, software development, technical documentation, usability evaluation, and interactive 3D applications.',
      ],
    },
    {
      id: 'unal',
      degree: 'Advanced Coursework in Electronic Engineering',
      institution: 'Universidad Nacional de Colombia — UNAL',
      period: '2013 – 2018',
      bullets: [
        'Completed advanced coursework in mathematics, physics, electronics, systems, simulation, programming logic, and engineering fundamentals.',
        'Academic background supports technical reasoning in real-time systems, optimization, hardware-aware thinking, and technical visualization.',
      ],
    },
  ],
  languages: [
    { language: 'Spanish', level: 'Native' },
    { language: 'English', level: 'C1 self-assessed; comfortable with technical interviews and documentation' },
    // Revisión 2026-09-09 (feedback usuario): FUERA el portugués — revelaba la
    // estrategia de ciudadanía UE a los empleadores — y el alemán «planned»:
    // solo se listan idiomas con nivel real. El A1 alemán está en estudio
    // activo diario (verificado por el propio sistema de idiomas de la app).
    { language: 'German', level: 'Beginner (A1) — in active daily study' },
  ],
  training: [
    { name: 'CG Cookie HUMAN — High-Fidelity Character Pipeline & Topology' },
    { name: 'Alive! — 3D Animation Mechanics & Dynamic Motion' },
    { name: 'Rebelway courses — Houdini / real-time FX / procedural workflows', wordingNote: 'Non-certified training used for skill development and portfolio production (doc-17 §12).' },
  ],
};
