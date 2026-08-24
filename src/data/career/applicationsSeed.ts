// AUTO-GENERADO por rag/career/scripts/parse-tracker.ts — NO editar a mano.
// Fuente: _roadmap_laboral/tracker/Tracker_Estrategia_Laboral_Alexander_v1.xlsx (hojas Applications / Weekly Plan / Lists).
// Regla de importación: cada campo proviene 1:1 del tracker; singleNextAction se deriva de notes/portfolioAngle cuando la fila no trae texto.

import type { JobApplication, PipelineStage, TrackerStatus, TargetLayer, FitBreakdown, WeeklyPlanWeek } from './applications';

/** Aplicaciones REALES del tracker (sustituye a los mocks Epic/Ubisoft/Riot). */
export const applicationsSeed: JobApplication[] = [
  {
    id: 'trk-1',
    companyName: "Treeview Studio",
    roleTitle: "Unity/XR Technical Artist",
    stage: 'Frío',
    trackerStatus: 'Saved',
    singleNextAction: "Verify remote/contractor route",
    followUpDateIso: "2026-06-24",
    updatedAtIso: "2026-06-17",
    layer: 'A1',
    roleFamily: "Unity Technical Artist",
    fitScore: 12,
    fitBreakdown: { roleFit: 2, portfolioMatch: 2, remote: 2, contract: 1, authorization: 2, salary: 1, experience: 2 },
    portfolioAngle: "TwinSight pipeline + Unity/WebGL",
    contactUrl: "",
    notes: "Verify remote/contractor route",
    source: 'tracker-xlsx'
  },
  {
    id: 'trk-2',
    companyName: "Active Theory",
    roleTitle: "Realtime 3D/WebGL",
    stage: 'Frío',
    trackerStatus: 'Saved',
    singleNextAction: "Creative tech but avoid pure marketing",
    followUpDateIso: "2026-06-24",
    updatedAtIso: "2026-06-17",
    layer: 'A1',
    roleFamily: "Unity WebGL",
    fitScore: 10,
    fitBreakdown: { roleFit: 2, portfolioMatch: 2, remote: 1, contract: 1, authorization: 1, salary: 1, experience: 2 },
    portfolioAngle: "Browser-based 3D demo",
    contactUrl: "",
    notes: "Creative tech but avoid pure marketing",
    source: 'tracker-xlsx'
  },
  {
    id: 'trk-3',
    companyName: "Product Visualization Target",
    roleTitle: "Technical Visualization Developer",
    stage: 'Frío',
    trackerStatus: 'Saved',
    singleNextAction: "Replace with real company",
    followUpDateIso: "2026-06-24",
    updatedAtIso: "2026-06-17",
    layer: 'A1',
    roleFamily: "Technical Visualization",
    fitScore: 12,
    fitBreakdown: { roleFit: 2, portfolioMatch: 2, remote: 2, contract: 1, authorization: 2, salary: 1, experience: 2 },
    portfolioAngle: "CAD-to-realtime inspection",
    contactUrl: "",
    notes: "Replace with real company",
    source: 'tracker-xlsx'
  }
];

/** Plan de 16 semanas del tracker (hoja "Weekly Plan") — alimenta el tablero semanal doc-34. */
export const trackerWeeklyPlan: WeeklyPlanWeek[] = [
  {
    week: 1,
    startIso: "2026-06-15",
    phase: "Focus",
    primaryGoal: "Congelar narrativa y estructura",
    mon: "Narrative",
    tue: "Asset audit",
    wed: "Targets seed",
    thu: "Study blocker",
    fri: "Review",
    status: "In Progress",
    completionPct: 0,
    blocker: "",
    nextAction: ""
  },
  {
    week: 2,
    startIso: "2026-06-22",
    phase: "Portfolio",
    primaryGoal: "Homepage + TwinSight skeleton",
    mon: "Hero",
    tue: "Case sections",
    wed: "Targets",
    thu: "Visual",
    fri: "QA",
    status: "Not Started",
    completionPct: 0,
    blocker: "",
    nextAction: ""
  },
  {
    week: 3,
    startIso: "2026-06-29",
    phase: "TwinSight",
    primaryGoal: "Completar case study",
    mon: "Problem/solution",
    tue: "Pipeline",
    wed: "Roles",
    thu: "Media",
    fri: "Claims",
    status: "Not Started",
    completionPct: 0,
    blocker: "",
    nextAction: ""
  },
  {
    week: 4,
    startIso: "2026-07-06",
    phase: "Demo",
    primaryGoal: "Demo 90s + teaser",
    mon: "Script",
    tue: "Record",
    wed: "Soft feedback",
    thu: "Edit",
    fri: "Publish",
    status: "Not Started",
    completionPct: 0,
    blocker: "",
    nextAction: ""
  },
  {
    week: 5,
    startIso: "2026-07-13",
    phase: "GitHub",
    primaryGoal: "README and repo cleanup",
    mon: "Overview",
    tue: "Features",
    wed: "Hygiene",
    thu: "C# note",
    fri: "Pins",
    status: "Not Started",
    completionPct: 0,
    blocker: "",
    nextAction: ""
  },
  {
    week: 6,
    startIso: "2026-07-20",
    phase: "Public profiles",
    primaryGoal: "CV + LinkedIn",
    mon: "CV",
    tue: "LinkedIn",
    wed: "3 apps",
    thu: "Pitch",
    fri: "Links",
    status: "Not Started",
    completionPct: 0,
    blocker: "",
    nextAction: ""
  },
  {
    week: 7,
    startIso: "2026-07-27",
    phase: "ArtStation",
    primaryGoal: "Human renders + breakdown",
    mon: "Renders",
    tue: "Breakdown",
    wed: "A1 list",
    thu: "Visual polish",
    fri: "Publish",
    status: "Not Started",
    completionPct: 0,
    blocker: "",
    nextAction: ""
  },
  {
    week: 8,
    startIso: "2026-08-03",
    phase: "Soft launch",
    primaryGoal: "8-12 A1 targets",
    mon: "Prep",
    tue: "Apply",
    wed: "Outreach",
    thu: "Fix blocker",
    fri: "Review",
    status: "Not Started",
    completionPct: 0,
    blocker: "",
    nextAction: ""
  },
  {
    week: 9,
    startIso: "2026-08-10",
    phase: "Iteration",
    primaryGoal: "Improve conversion",
    mon: "Adjust",
    tue: "Apply",
    wed: "Follow-up",
    thu: "Interview prep",
    fri: "Targeting",
    status: "Not Started",
    completionPct: 0,
    blocker: "",
    nextAction: ""
  },
  {
    week: 10,
    startIso: "2026-08-17",
    phase: "Main wave",
    primaryGoal: "10-15 roles",
    mon: "Setup",
    tue: "Apply",
    wed: "Outreach",
    thu: "Study",
    fri: "Conversion",
    status: "Not Started",
    completionPct: 0,
    blocker: "",
    nextAction: ""
  },
  {
    week: 11,
    startIso: "2026-08-24",
    phase: "Interviews",
    primaryGoal: "Defense readiness",
    mon: "Walkthrough",
    tue: "Legal/salary",
    wed: "Apply",
    thu: "Test prep",
    fri: "Objections",
    status: "Not Started",
    completionPct: 0,
    blocker: "",
    nextAction: ""
  },
  {
    week: 12,
    startIso: "2026-08-31",
    phase: "Main wave",
    primaryGoal: "Second wave + follow-ups",
    mon: "List",
    tue: "Apply",
    wed: "Follow-up",
    thu: "Polish",
    fri: "Gate",
    status: "Not Started",
    completionPct: 0,
    blocker: "",
    nextAction: ""
  },
  {
    week: 13,
    startIso: "2026-09-07",
    phase: "ARA",
    primaryGoal: "ARA MVP if package ready",
    mon: "Decision",
    tue: "README/MVP",
    wed: "Mixed roles",
    thu: "AI study",
    fri: "Claims",
    status: "Not Started",
    completionPct: 0,
    blocker: "",
    nextAction: ""
  },
  {
    week: 14,
    startIso: "2026-09-14",
    phase: "Pivot",
    primaryGoal: "Evidence-based adjustment",
    mon: "Decide",
    tue: "Update",
    wed: "Apply",
    thu: "Pitch",
    fri: "Compare",
    status: "Not Started",
    completionPct: 0,
    blocker: "",
    nextAction: ""
  },
  {
    week: 15,
    startIso: "2026-09-21",
    phase: "Negotiation",
    primaryGoal: "Offers and contracts",
    mon: "Ranges",
    tue: "Clauses",
    wed: "Pipeline",
    thu: "Simulation",
    fri: "Decision",
    status: "Not Started",
    completionPct: 0,
    blocker: "",
    nextAction: ""
  },
  {
    week: 16,
    startIso: "2026-09-28",
    phase: "Cycle close",
    primaryGoal: "Audit and next 90 days",
    mon: "Metrics",
    tue: "Next cycle",
    wed: "Final wave",
    thu: "Retro",
    fri: "Plan",
    status: "Not Started",
    completionPct: 0,
    blocker: "",
    nextAction: ""
  }
];

/** Regla de decisión de Fit Score tal cual la declara el tracker (fila 2 de Applications). */
export const fitScoreRule: string = "Score first, apply second. Fit Score >= 10 = aplicar rapido; 7-9 = investigar; <=6 = descartar.";

/** Reglas canónicas del tracker (hoja "Lists", columna Canonical Rules). */
export const trackerCanonicalRules: string[] = [
  "Portuguese passport expected around 2028",
  "No current EU work authorization claim",
  "Primary role: Unity Technical Artist",
  "Accept 3M COP only if field-aligned",
  "Ideal realistic target: USD 2000",
  "Ambitious target: USD 6000",
  "Avoid pure marketing",
  "TwinSight is technical visualization, not live IoT digital twin"
];

/** Vocabulario de estados de aplicación del tracker (hoja "Lists", columna App Statuses). */
export const trackerAppStatuses: TrackerStatus[] = [
  "Saved",
  "Applied",
  "Contacted",
  "Interview",
  "Test",
  "Offer",
  "Rejected",
  "No Fit",
  "Paused"
];

/** Fecha de importación (ISO) del último parseo. */
export const trackerImportedAt: string = "2026-08-24T10:51:52.005Z";
