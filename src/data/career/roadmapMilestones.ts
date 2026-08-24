// src/data/career/roadmapMilestones.ts — Hitos del roadmap 16 semanas / 90 días
// (AG-CAREER, ciclo 1, Tarea 5).
//
// FUENTES (trazabilidad §0.1 del plan):
//   - doc-14 §Phase 1/2/3 (plan de ejecución 30/60/90): fases, hitos, cadencias.
//   - doc-15 §4 (role targeting model) y §5 (salary synthesis): familias y meta.
// El doc-01 manda en contradicciones; gap register en doc-16.

export interface RoadmapMilestone {
  id: string;
  title: string;
  phase: 1 | 2 | 3;
  weeks: string;
  description: string;
  deliverables: string[];
  keyMetric: string;
  connectedTimeBlock: string;
  /** Cita exacta de la sección del doc-14/15 que respalda este hito. */
  sourceRef: string;
}

export interface RoadmapPhase {
  phase: 1 | 2 | 3;
  title: string;
  weeks: string;
  objective: string;
  targetApps: string;
  sourceRef: string;
  milestones: RoadmapMilestone[];
}

export interface RoadmapRoleFamily {
  title: string;
  priority: string;
  stack: string;
  target: string;
  sourceRef: string;
}

/** Meta salarial y de modelo de trabajo (doc-15 §5 salary and work-model synthesis). */
export const roadmapGoal = {
  salaryRange: '$1,500 – $3,000 USD/mes',
  workModel: 'Contrato remoto B2B/contractor desde Colombia; movilidad EU (Portugal ~2028 / Alemania) documentada en doc-04',
  sourceRef: 'doc-15 §5 Salary and work-model synthesis · doc-04 §mobility'
} as const;

/** Familias de roles (doc-15 §4: 5 primarias ordenadas + secundarias/fallback). */
export const roadmapRoleFamilies: RoadmapRoleFamily[] = [
  {
    title: 'Real-Time 3D / Interactive 3D Developer',
    priority: 'Alta (1)',
    stack: 'Unity, WebGL, C#, CAD',
    target: 'Estudios e industria 3D',
    sourceRef: 'doc-15 §4 Primary role families #1'
  },
  {
    title: 'Unity WebGL / Web 3D Developer',
    priority: 'Alta (2)',
    stack: 'Unity WebGL, despliegue web, optimización',
    target: 'Producto interactivo y configuradores',
    sourceRef: 'doc-15 §4 Primary role families #2'
  },
  {
    title: 'Technical Visualization / Digital Twin / Simulation',
    priority: 'Alta (3) — nicho estratégico',
    stack: 'Simulation, WebGL, data flow, CAD-to-realtime',
    target: 'Empresas industriales (targets doc-11)',
    sourceRef: 'doc-15 §4 Primary role families #3'
  },
  {
    title: 'Unity Technical Artist',
    priority: 'Alta (4)',
    stack: 'Shader Graph, Profiling, optimización, tools',
    target: 'Juegos & visualización (enmarcado en tools/runtime)',
    sourceRef: 'doc-15 §4 Primary role families #4'
  },
  {
    title: 'Tools / Pipeline / Python Automation',
    priority: 'Secundaria (5)',
    stack: 'Python, CLI, automatización (ARA)',
    target: 'Herramientas internas',
    sourceRef: 'doc-15 §4 Primary role families #5'
  }
];

/** Fases e hitos del plan 30/60/90 (doc-14) con cadencias del §6-§7. */
export const roadmapPhases: RoadmapPhase[] = [
  {
    phase: 1,
    title: 'Fase 1: Preparación, Case Study & Portfolio MVP',
    weeks: 'Semanas 1 – 4 (Días 1–30)',
    objective: 'Construir presencia de mercado mínima creíble y eliminar bloqueadores antes de postular.',
    targetApps: '15–25 aplicaciones cualificadas (lote 1)',
    sourceRef: 'doc-14 §2 Phase 1 — Days 1–30',
    milestones: [
      {
        id: 'm1',
        title: 'Días 1-3: Asset Inventory & Decision Lock',
        phase: 1,
        weeks: 'Semana 1',
        description: 'Confirmar nombre TwinSight X500, posicionamiento de 1 frase y recopilación de capturas/videos.',
        deliverables: ['Carpeta /job_search_assets estructurada', 'Posicionamiento bloqueado', 'Repositorios clasificados'],
        keyMetric: '100% Assets organizados',
        connectedTimeBlock: 'Bloque B (14:45-16:45)',
        sourceRef: 'doc-14 §2 Day 1–3 asset inventory and decision lock'
      },
      {
        id: 'm2',
        title: 'Días 4-10: TwinSight Case Study Package',
        phase: 1,
        weeks: 'Semana 2',
        description: 'Crear el paquete público de prueba: case study de 11 secciones, guion de video demo 90s, 8-12 capturas y métricas de optimización.',
        deliverables: ['Draft de Case Study en Markdown', 'Guion de video walkthrough 90s', 'Tabla de optimización CAD-to-lowpoly'],
        keyMetric: 'Comprensión en <90 seg',
        connectedTimeBlock: 'Bloque A (09:20-11:40)',
        sourceRef: 'doc-14 §2 Day 4–10 TwinSight case study package'
      },
      {
        id: 'm3',
        title: 'Días 11-15: GitHub Cleanup',
        phase: 1,
        weeks: 'Semana 2-3',
        description: 'Fijar repositorios principales (TwinSight, ARA, Blender breakdown), redactar READMEs profesionales y ocultar experimentos viejos.',
        deliverables: ['TwinSight README listo', 'ARA README skeleton', '6 Repositorios fijados'],
        keyMetric: '0 Repositorios confusos',
        connectedTimeBlock: 'Bloque B (14:45-16:45)',
        sourceRef: 'doc-14 §2 Day 11–15 GitHub cleanup'
      },
      {
        id: 'm4',
        title: 'Días 16-20: Alineación LinkedIn & CV 1 Pauta',
        phase: 1,
        weeks: 'Semana 3',
        description: 'Redactar titular técnico, sección About, experiencia freelance y construir CV base de 1 página optimizado para ATS.',
        deliverables: ['CV 1 pág Unity Tech Artist', 'Perfil LinkedIn actualizado', 'Sección Featured activa'],
        keyMetric: 'Alineación 100% entre canales',
        connectedTimeBlock: 'Bloque A (09:20-11:40)',
        sourceRef: 'doc-14 §2 Day 16–20 LinkedIn and CV alignment'
      },
      {
        id: 'm5',
        title: 'Días 21-25: Portfolio MVP',
        phase: 1,
        weeks: 'Semana 4',
        description: 'Lanzar web mínima en producción con TwinSight, ARA y Blender.',
        deliverables: ['Portfolio MVP en vivo'],
        keyMetric: 'Portfolio en producción',
        connectedTimeBlock: 'Bloque B (14:45-16:45)',
        sourceRef: 'doc-14 §2 Day 21–25 portfolio MVP'
      },
      {
        id: 'm6',
        title: 'Días 26-30: Primer Lote de Aplicaciones',
        phase: 1,
        weeks: 'Semana 4',
        description: 'Enviar el primer lote de 15-25 aplicaciones dirigidas con tracker activo.',
        deliverables: ['Tracker de aplicaciones activo', 'Primer lote enviado'],
        keyMetric: '15–25 aplicaciones enviadas',
        connectedTimeBlock: 'Bloque B (14:45-16:45)',
        sourceRef: 'doc-14 §2 Day 26–30 first application batch'
      }
    ]
  },
  {
    phase: 2,
    title: 'Fase 2: Cadencia de Aplicaciones & Exposición Progresiva',
    weeks: 'Semanas 5 – 8 (Días 31–60)',
    objective: 'Pasar del setup al contacto real de mercado: probar si el posicionamiento genera respuestas.',
    targetApps: 'Cadencia semanal mínima: 15 apps + 15 outreach + 10 reclutadores + 10 follow-ups (total fase 50-90)',
    sourceRef: 'doc-14 §3 Phase 2 — Days 31–60 (§Week 5 weekly minimum)',
    milestones: [
      {
        id: 'm7',
        title: 'Semanas 5-6: Cadencia de Aplicaciones & Feedback Loop',
        phase: 2,
        weeks: 'Semanas 5-6',
        description: 'Mantener la cadencia semanal mínima del doc-14. Evaluar tasa de respuesta y corregir titulares/mensajes.',
        deliverables: ['30 Aplicaciones adicionales', '10 Mensajes a reclutadores/sem', 'Ajuste de plantilla si no hay respuestas'],
        keyMetric: 'Cadencia semanal mínima sostenida',
        connectedTimeBlock: 'Bloque B (14:45-16:45)',
        sourceRef: 'doc-14 §3 Week 5 application cadence begins'
      },
      {
        id: 'm8',
        title: 'Semana 7: ARA Framework & Prueba Secundaria',
        phase: 2,
        weeks: 'Semana 7',
        description: 'Publicar el repositorio ARA con diagrama de arquitectura, demostrando habilidades de automatización en Python y tooling.',
        deliverables: ['Diagrama de arquitectura ARA', 'README con AI disclosure', 'Script demo operativo'],
        keyMetric: 'Prueba de tooling activa',
        connectedTimeBlock: 'Bloque A (09:20-11:40)',
        sourceRef: 'doc-14 §3 Phase 2 · doc-09 §ARA'
      },
      {
        id: 'm9',
        title: 'Semana 8: Sprint de Preparación de Entrevistas',
        phase: 2,
        weeks: 'Semana 8',
        description: 'Ensayar respuestas cortas para 10 preguntas frecuentes (por qué TwinSight, nivel de IA usado, optimización WebGL, expectativas salariales).',
        deliverables: ['Respuestas a 10 preguntas grabadas', 'Scorecard de ofertas listo', 'Rango $1.5k–$3k USD anclado'],
        keyMetric: '10 Respuestas fluidas',
        connectedTimeBlock: 'Exposición CBT (14:00-14:40)',
        sourceRef: 'doc-14 §8 Interview preparation system · doc-23 §answer bank'
      }
    ]
  },
  {
    phase: 3,
    title: 'Fase 3: Conversión a Ofertas & Negociación Salarial',
    weeks: 'Semanas 9 – 16 (Días 61–90+)',
    objective: 'Escalar lo que funciona, descartar caminos débiles y convertir entrevistas en ofertas.',
    targetApps: 'Outreach cualificado a segmentos A1/A2 (80% de la energía en segmento A)',
    sourceRef: 'doc-14 §4 Phase 3 — Days 61–90 (§Week 10 target refinement)',
    milestones: [
      {
        id: 'm10',
        title: 'Semanas 9-10: Refinamiento de Objetivos (A1/A2/B1/B2/C)',
        phase: 3,
        weeks: 'Semanas 9-10',
        description: 'Clasificar las 120 empresas objetivo del doc-11 en segmentos A1/A2/B1/B2/C/Reject. Enfocar el 80% de energía en outreach especulativo a A1.',
        deliverables: ['120 empresas clasificadas (doc-11)', 'Mensajes especulativos a Tech Art Leads', 'Referidos en comunidades 3D'],
        keyMetric: '80% Foco en Segmento A',
        connectedTimeBlock: 'Bloque B (14:45-16:45)',
        sourceRef: 'doc-14 §4 Week 10 target refinement · doc-11 §First-wave verification queue'
      },
      {
        id: 'm11',
        title: 'Semanas 11-12: Conversión en Entrevistas & Live Code Walkthrough',
        phase: 3,
        weeks: 'Semanas 11-12',
        description: 'Ejecutar las historias técnicas (optimización CAD, WebGL, UI Toolkit, evaluación SUS). Demostrar solvencia en pruebas técnicas.',
        deliverables: ['Walkthrough en vivo ensayado', 'Defensa de decisiones CAD-to-realtime', 'Evaluación de ofertas recibidas'],
        keyMetric: '3-6 Procesos de entrevista',
        connectedTimeBlock: 'Exposición CBT (14:00-14:40)',
        sourceRef: 'doc-14 §8 Interview preparation system · doc-35 §defense'
      },
      {
        id: 'm12',
        title: 'Semanas 13-16: Negociación & Cierre de Contrato',
        phase: 3,
        weeks: 'Semanas 13-16',
        description: 'Aplicar la scorecard de ofertas (doc-24). Firmar contrato remoto B2B dentro del rango objetivo.',
        deliverables: ['Oferta aceptada ($1.5k–$3k USD/mo)', 'Contrato B2B revisado', 'Plan de onboarding 30 días'],
        keyMetric: 'Contrato firmado $1.5k+',
        connectedTimeBlock: 'Bloque A (09:20-11:40)',
        sourceRef: 'doc-14 §4 Phase 3 · doc-24 §Offer evaluation scorecard'
      }
    ]
  }
];

/** Total de hitos (para el indicador de progreso). */
export const totalMilestones = roadmapPhases.reduce((n, p) => n + p.milestones.length, 0);
