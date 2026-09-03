# 13 — Workflows Operativos y Esqueletos de Código TypeScript

> **Documento:** `GeminiAudits/13_WORKFLOWS_OPERATIVOS_Y_ESQUELETOS_DE_CODIGO.md`  
> **Objetivo:** Implementaciones de referencia, esqueletos de código fuertemente tipados y algoritmos operativos listos para ser despachados a los ejecutores para activar el Grafo de Vida, el Triaje de Lesiones, el CV Procedural y el Daily Briefing.

---

## 1. Módulo 1: Motor del Grafo de Vida en Memoria (`LifeGraphEngine.ts`)

Este esqueleto implementa la estructura de datos del grafo unificado en memoria con soporte para consultas de impacto y travesías bidireccionales:

```typescript
// src/lib/graph/lifeGraphEngine.ts
import type { GraphNode, GraphEdge, NodeDomain, EdgeRelationship } from './types';

export class LifeGraphEngine {
  private nodes: Map<string, GraphNode> = new Map();
  private adjacency: Map<string, Array<{ targetId: string; edge: GraphEdge }>> = new Map();
  private reverseAdjacency: Map<string, Array<{ sourceId: string; edge: GraphEdge }>> = new Map();

  /** Registra un nodo en el grafo */
  public addNode<T>(node: GraphNode<T>): void {
    this.nodes.set(node.id, node);
    if (!this.adjacency.has(node.id)) this.adjacency.set(node.id, []);
    if (!this.reverseAdjacency.has(node.id)) this.reverseAdjacency.set(node.id, []);
  }

  /** Registra una arista tipada y con peso */
  public addEdge(edge: GraphEdge): void {
    if (!this.nodes.has(edge.source) || !this.nodes.has(edge.target)) {
      throw new Error(`Edge references non-existing node: ${edge.source} -> ${edge.target}`);
    }

    this.adjacency.get(edge.source)!.push({ targetId: edge.target, edge });
    this.reverseAdjacency.get(edge.target)!.push({ sourceId: edge.source, edge });

    if (edge.bidirectional) {
      this.adjacency.get(edge.target)!.push({ targetId: edge.source, edge });
      this.reverseAdjacency.get(edge.source)!.push({ sourceId: edge.target, edge });
    }
  }

  /** Obtiene un nodo por ID */
  public getNode<T>(id: string): GraphNode<T> | undefined {
    return this.nodes.get(id) as GraphNode<T> | undefined;
  }

  /** Encuentra vecinos salientes por relación específica */
  public getOutgoingNeighbors(nodeId: string, relation?: EdgeRelationship): GraphNode[] {
    const edges = this.adjacency.get(nodeId) || [];
    return edges
      .filter(({ edge }) => !relation || edge.relation === relation)
      .map(({ targetId }) => this.nodes.get(targetId)!)
      .filter(Boolean);
  }

  /** Encuentra vecinos entrantes por relación específica */
  public getIncomingNeighbors(nodeId: string, relation?: EdgeRelationship): GraphNode[] {
    const edges = this.reverseAdjacency.get(nodeId) || [];
    return edges
      .filter(({ edge }) => !relation || edge.relation === relation)
      .map(({ sourceId }) => this.nodes.get(sourceId)!)
      .filter(Boolean);
  }

  /**
   * ALGORITMO DE PROPAGACIÓN DE LESIÓN:
   * Dado un nodo de tejido afectado (e.g. tendón o bursa), recorre el grafo
   * para identificar todos los ejercicios contraindicados y sus sustitutos sanos.
   */
  public propagateInjuryImpact(injuredStructureId: string): {
    contraindicatedExerciseIds: string[];
    suggestedRehabProtocols: string[];
  } {
    const contraExercises = new Set<string>();
    const rehabProtocols = new Set<string>();

    // Buscar ejercicios que cargan o estresan directamente la estructura
    const incomingStress = this.reverseAdjacency.get(injuredStructureId) || [];
    for (const { sourceId, edge } of incomingStress) {
      if (
        edge.relation === 'stresses_tendon' ||
        edge.relation === 'compresses_joint' ||
        edge.relation === 'contraindicated_for'
      ) {
        contraExercises.add(sourceId);
      }
    }

    // Buscar protocolos que rehabilitan la estructura
    for (const { sourceId, edge } of incomingStress) {
      if (edge.relation === 'rehabilitates') {
        rehabProtocols.add(sourceId);
      }
    }

    return {
      contraindicatedExerciseIds: Array.from(contraExercises),
      suggestedRehabProtocols: Array.from(rehabProtocols)
    };
  }
}
```

---

## 2. Módulo 2: Motor de Triaje y Adaptación de Lesiones (`injuryTriageEngine.ts`)

Este esqueleto implementa el cuestionario funcional y el cálculo diferencial de tejido:

```typescript
// src/lib/fitness/injuryTriageEngine.ts

export type TissueType = 'tendon' | 'ligament' | 'bursa' | 'nerve' | 'muscle' | 'unknown';

export interface SymptomEvaluationInput {
  bodyZone: string;
  onset: 'traumatic' | 'gradual';
  painQuality: 'dull_ache' | 'sharp_stabbing' | 'electric_burning' | 'diffuse_stiff';
  morningStiffness: boolean;
  improvesWithWarmup: boolean;
  jointInstability: boolean;
  visibleFocalSwelling: boolean;
  radiatingTingling: boolean;
}

export interface TriageResult {
  suspectedTissue: TissueType;
  clinicalHypothesis: string;
  severityGrade: 'mild' | 'moderate' | 'high_risk_medical_referral';
  actionDirective: 'rehab_load' | 'relative_rest' | 'nerve_gliding' | 'doctor_visit';
  sourceCitation: string;
}

export class InjuryTriageEngine {
  public static evaluate(input: SymptomEvaluationInput): TriageResult {
    // 1. Detección de banderas rojas / inestabilidad traumática (Ligamento)
    if (input.onset === 'traumatic' && input.jointInstability) {
      return {
        suspectedTissue: 'ligament',
        clinicalHypothesis: 'Posible esguince agudo o compromiso ligamentario con inestabilidad.',
        severityGrade: 'high_risk_medical_referral',
        actionDirective: 'doctor_visit',
        sourceCitation: 'Moore Clinically Oriented Anatomy, 6th ed., Cap. Articulaciones'
      };
    }

    // 2. Detección de dolor neuropático (Nervio)
    if (input.radiatingTingling || input.painQuality === 'electric_burning') {
      return {
        suspectedTissue: 'nerve',
        clinicalHypothesis: 'Irritación de raíz nerviosa periférica o atrapamiento mecánico.',
        severityGrade: 'moderate',
        actionDirective: 'nerve_gliding',
        sourceCitation: 'Enoka Neuromechanics of Human Movement, 4th ed., Cap. Control Motor'
      };
    }

    // 3. Detección de Bursitis por fricción (Bursa)
    if (input.visibleFocalSwelling && !input.jointInstability) {
      return {
        suspectedTissue: 'bursa',
        clinicalHypothesis: 'Bursitis por pinzamiento o fricción mecánica localizada.',
        severityGrade: 'moderate',
        actionDirective: 'relative_rest',
        sourceCitation: 'Levangie & Norkin Joint Structure and Function, 6th ed., p. 112'
      };
    }

    // 4. Detección de Tendinopatía por sobrecarga (Tendón)
    if (input.onset === 'gradual' && (input.morningStiffness || input.improvesWithWarmup)) {
      return {
        suspectedTissue: 'tendon',
        clinicalHypothesis: 'Tendinopatía en fase de sobrecarga o degeneración de colágeno.',
        severityGrade: 'moderate',
        actionDirective: 'rehab_load',
        sourceCitation: 'Steven Low, Overcoming Tendonitis (2019), Cap. 4: Heavy Slow Resistance'
      };
    }

    // 5. Por defecto: Distensión o contractura muscular
    return {
      suspectedTissue: 'muscle',
      clinicalHypothesis: 'Sobrecarga miofascial o micro-distensión muscular sin compromiso articular.',
      severityGrade: 'mild',
      actionDirective: 'rehab_load',
      sourceCitation: 'MacIntosh Skeletal Muscle Form and Function, 2nd ed., Cap. 8'
    };
  }
}
```

---

## 3. Módulo 3: Ensamblador Modular de CV Procedural (`cvComposer.ts`)

Este esqueleto selecciona las secciones óptimas para exportar el currículum personalizado por empresa:

```typescript
// src/lib/career/cvComposer.ts

export interface CVProfileData {
  fullName: string;
  title: string;
  location: string;
  email: string;
  linkedinUrl: string;
  githubUrl: string;
  portfolioUrl: string;
  summary: string;
  coreSkills: string[];
  keyProjects: Array<{
    name: string;
    role: string;
    techStack: string[];
    metrics: string[];
    repoUrl?: string;
  }>;
  experienceBullets: string[];
  education: string[];
}

export type TargetRole = 'tech_artist' | 'webgl_dev' | 'cad_realtime' | 'tools_dev';

export class CVComposer {
  /**
   * Ensambla una estructura de CV a medida basada en el rol y palabras clave objetivo
   */
  public static compose(role: TargetRole, targetCompany: string): CVProfileData {
    const baseProfile: CVProfileData = {
      fullName: "Alexander Woodcock Salomón",
      title: this.resolveRoleTitle(role),
      location: "Colombia (Remote worldwide / UTC-5)",
      email: "contact@alexwoodcock.dev",
      linkedinUrl: "https://linkedin.com/in/alex-woodcock",
      githubUrl: "https://github.com/delarge95",
      portfolioUrl: "https://alexwoodcock.dev",
      summary: this.resolveSummary(role, targetCompany),
      coreSkills: this.resolveSkills(role),
      keyProjects: this.resolveProjects(role),
      experienceBullets: this.resolveExperience(role),
      education: [
        "B.S. in Multimedia Engineering (Thesis Complete) — UNAD",
        "Completed Advanced Coursework in Electronic Engineering — Universidad Nacional de Colombia (UNAL)"
      ]
    };

    return baseProfile;
  }

  private static resolveRoleTitle(role: TargetRole): string {
    switch (role) {
      case 'tech_artist': return 'Unity Technical Artist / Real-Time 3D Developer';
      case 'webgl_dev': return 'Interactive WebGL / Three.js 3D Software Engineer';
      case 'cad_realtime': return 'CAD-to-Realtime Visualization Engineer / 3D Pipeline';
      case 'tools_dev': return 'Technical Artist & Creative Tools Developer (Python/AI)';
    }
  }

  private static resolveSummary(role: TargetRole, company: string): string {
    if (role === 'tech_artist') {
      return `Technical Artist specialized in real-time engine optimization, HLSL shaders, and automated 3D asset pipelines. Proven experience reducing draw calls and optimizing GPU frame times in Unity WebGL. Tailored for high-performance visual pipelines at ${company}.`;
    }
    return `Multimedia Software Engineer specializing in real-time browser graphics (WebGL/Three.js/TypeScript) and digital twins. Built TwinSight X500 handling complex 3D assemblies at 60 FPS on client devices.`;
  }

  private static resolveSkills(role: TargetRole): string[] {
    const common = ["Git", "TypeScript", "3D Mathematics", "Agile"];
    if (role === 'tech_artist') {
      return ["Unity Engine", "HLSL / Shader Graph", "Blender", "GPU Profiling (RenderDoc)", "LOD Systems", "VFX Graph", ...common];
    }
    return ["Three.js", "WebGL", "TypeScript", "React / Astro", "GLTF/Draco Optimization", "IndexedDB", ...common];
  }

  private static resolveProjects(role: TargetRole) {
    return [
      {
        name: "TwinSight X500 — Real-Time Industrial Digital Twin",
        role: "Lead Graphics & WebGL Developer",
        techStack: ["WebGL", "Three.js", "TypeScript", "Draco"],
        metrics: [
          "Optimized dense CAD models (2.4M to 180k polygons) retaining 99% visual fidelity.",
          "Sustained locked 60 FPS in standard browser viewports with sub-1.5s initial load."
        ],
        repoUrl: "https://github.com/delarge95/TwinSight-X500"
      },
      {
        name: "ARA Framework — Procedural 3D & AI Automation",
        role: "Systems Architect",
        techStack: ["Python", "Blender API", "LLM Structured Tooling"],
        metrics: [
          "Automated repetitive geometry cleanup and texture baking via headless scripts.",
          "Cut asset turnaround time by 65% for real-time visualization scenes."
        ]
      }
    ];
  }

  private static resolveExperience(role: TargetRole): string[] {
    return [
      "Engineered real-time 3D configurators and interactive web applications using clean TypeScript and modern graphics APIs.",
      "Profiled and mitigated bottlenecks across draw calls, overdraw, and vertex cache misses in interactive viewports.",
      "Standardized multi-agent development workflows and automated testing suites for high-reliability applications."
    ];
  }
}
```

---

## 4. Módulo 4: Orquestador del Daily Briefing Matutino (`morningBriefingOrchestrator.ts`)

Este esqueleto integra el estado clínico, deportivo y laboral para resolver el "Top 3 Absoluto del Día":

```typescript
// src/lib/orchestrator/morningBriefingOrchestrator.ts

export interface MorningCheckinInput {
  sleepHours: number;
  perceivedEnergy: number; // 1 a 5
  reportedPainSeverity: number; // 0 a 10
  pendingJobApplications: number;
  activeTrainingDayName: string;
  overdueLanguageCards: number;
}

export interface DailyBriefingPlan {
  operatingMode: 'normal' | 'extended' | 'min_viable';
  modeReason: string;
  top3PriorityTasks: [
    { domain: 'career'; title: string; durationMin: number },
    { domain: 'fitness'; title: string; durationMin: number },
    { domain: 'languages'; title: string; durationMin: number }
  ];
  activeNudgeMessage?: string;
}

export class MorningBriefingOrchestrator {
  public static generatePlan(input: MorningCheckinInput): DailyBriefingPlan {
    // 1. Evaluación de fatiga y rescate de inercia
    if (input.perceivedEnergy <= 2 || input.sleepHours < 5.5) {
      return {
        operatingMode: 'min_viable',
        modeReason: 'Energía reducida o deuda de sueño detectada. Se activa el Modo Mínimo Viable para proteger la recuperación sin romper la racha.',
        top3PriorityTasks: [
          { domain: 'career', title: 'Guardar 1 vacante en pipeline y leer descripción', durationMin: 10 },
          { domain: 'fitness', title: 'Sesión de Movilidad Suave + 1 serie MEV de mantenimiento', durationMin: 15 },
          { domain: 'languages', title: '5 tarjetas flashcards de repaso en alemán', durationMin: 3 }
        ],
        activeNudgeMessage: 'Hoy el objetivo es consistencia mínima. Protege tu energía; mañana volveremos a empujar fuerte.'
      };
    }

    // 2. Modo Normal estándar
    return {
      operatingMode: 'normal',
      modeReason: 'Biometría y energía en rango óptimo. Bloque de alto rendimiento activado.',
      top3PriorityTasks: [
        { domain: 'career', title: 'Enviar 1 postulación con CV modular personalizado + outreach LinkedIn', durationMin: 35 },
        { domain: 'fitness', title: `Ejecutar sesión: ${input.activeTrainingDayName}`, durationMin: 60 },
        { domain: 'languages', title: `Repasar ${Math.min(input.overdueLanguageCards, 15)} tarjetas vencidas en vocabulario`, durationMin: 15 }
      ]
    };
  }
}
```
