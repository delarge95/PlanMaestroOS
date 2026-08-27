// src/data/career/portfolioLaunchChecklist.ts — AG-PORT
// Public profile launch sequence from doc 36 (36_public_profile_launch_sequence.md)
// as an interactive checklist synced with the doc-33 sprint board: a launch step
// only becomes enabled when every asset it depends on is "done" on the board
// (and, where doc-36 §4.2 demands order, when its predecessor steps are done).
// Rule (PLAN_MULTIAGENTE §3.7 + doc-36 §5.1): NO invented URLs — public URLs are
// explicit placeholders ([KEY] style, matching src/data/links.ts) that the user
// fills at execution time.

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { PortfolioAssetStatus } from './portfolioChecklist';

export interface PortfolioLaunchUrlPlaceholder {
  /** Placeholder key in [BRACKETS] convention (cf. src/data/links.ts). */
  key: string;
  label: string;
}

export interface PortfolioLaunchStep {
  id: string;
  order: number;
  /** Launch day in the doc-36 §16 timeline (1–6). */
  day: number;
  title: string;
  detail: string;
  /** Board asset ids (portfolioChecklist) that must be "done" before this step unlocks. */
  requiresAssetIds: string[];
  /** Predecessor launch step ids that must be completed first (doc-36 §4.2 order). */
  requiresStepIds: string[];
  urlPlaceholders: PortfolioLaunchUrlPlaceholder[];
  source: string;
}

export const portfolioLaunchSteps: PortfolioLaunchStep[] = [
  {
    id: "publish-demo-video",
    order: 1,
    day: 1,
    title: "Publicar el vídeo demo de 90 s",
    detail:
      "Subir twinsight_x500_demo_90s.mp4 con título y descripción de doc-36 §8 (enlaces como placeholders hasta tener las URLs reales). Primer paso porque todas las páginas necesitan el enlace del vídeo.",
    requiresAssetIds: ["video-demo-90s", "image-thumbnail"],
    requiresStepIds: [],
    urlPlaceholders: [
      { key: "DEMO_VIDEO_URL", label: "URL pública del vídeo demo" }
    ],
    source: "doc-36 §4.1, §8"
  },
  {
    id: "update-github-readme",
    order: 2,
    day: 1,
    title: "Actualizar README de GitHub + carpeta /media",
    detail:
      "Aplicar el README final (fuente 19B), descripción del repo y topics de doc-36 §7; probar imágenes y enlaces. Segundo paso porque aporta la prueba técnica.",
    requiresAssetIds: ["github-readme-final", "github-media-folder"],
    requiresStepIds: [],
    urlPlaceholders: [
      { key: "GITHUB_URL", label: "URL del repo TwinSight" }
    ],
    source: "doc-36 §4.1, §7"
  },
  {
    id: "publish-twinsight-case-study",
    order: 3,
    day: 2,
    title: "Publicar el case study TwinSight en el portafolio",
    detail:
      "Página pública con hero, vídeo embebido, problema/solución, features, pipeline, métricas, arquitectura, modos visuales, evaluación, rol, disclosure de IA, limitaciones y links (checklist doc-36 §6.4). Es el hub central público.",
    requiresAssetIds: ["web-portfolio-media", "video-demo-90s"],
    requiresStepIds: [],
    urlPlaceholders: [
      { key: "PORTFOLIO_URL", label: "URL pública del portafolio" },
      { key: "TWINSIGHT_CASE_STUDY_URL", label: "URL del case study TwinSight" }
    ],
    source: "doc-36 §4.1, §6.4–§6.5"
  },
  {
    id: "update-homepage",
    order: 4,
    day: 2,
    title: "Actualizar homepage (hero, CTAs, orden de proyectos)",
    detail:
      "Headline/subheadline/CTAs exactos de doc-36 §6.1 y orden de proyectos §6.2; rutas hacia el case study ya publicado.",
    requiresAssetIds: ["web-portfolio-media"],
    requiresStepIds: ["publish-twinsight-case-study"],
    urlPlaceholders: [],
    source: "doc-36 §4.1, §6.1–§6.3"
  },
  {
    id: "update-linkedin-profile",
    order: 5,
    day: 3,
    title: "Actualizar perfil LinkedIn (headline, About, skills, proyecto)",
    detail:
      "Headline recomendado, About con apertura y disponibilidad, skills priorizadas y entrada de proyecto TwinSight según doc-36 §9. Quinto paso: LinkedIn envía tráfico a un hub ya terminado.",
    requiresAssetIds: [],
    requiresStepIds: ["update-homepage"],
    urlPlaceholders: [],
    source: "doc-36 §4.1, §9"
  },
  {
    id: "add-linkedin-featured",
    order: 6,
    day: 3,
    title: "Añadir la sección Featured en LinkedIn",
    detail:
      "Orden obligatorio: 1) case study TwinSight 2) demo 90 s 3) repo GitHub 4) breakdown ArtStation 5) ARA Framework (doc-36 §9.3).",
    requiresAssetIds: ["linkedin-featured-media"],
    requiresStepIds: ["update-linkedin-profile"],
    urlPlaceholders: [
      { key: "LINKEDIN_FEATURED_URLS", label: "URLs de los ítems a destacar" }
    ],
    source: "doc-36 §4.1, §9.3"
  },
  {
    id: "publish-artstation-breakdown",
    order: 7,
    day: 4,
    title: "Publicar el breakdown TwinSight en ArtStation",
    detail:
      "Post con orden doc-36 §11.3 (cover → vídeo → screenshots → features → CAD → grid de modos → UI → métricas → tools → links), tags controlados y QA sin overclaiming. Soporte posterior de prueba visual/técnica.",
    requiresAssetIds: ["artstation-cover", "artstation-twinsight-breakdown"],
    requiresStepIds: [],
    urlPlaceholders: [
      { key: "ARTSTATION_BREAKDOWN_URL", label: "URL del post TwinSight en ArtStation" }
    ],
    source: "doc-36 §4.1, §11"
  },
  {
    id: "update-cv-links",
    order: 8,
    day: 5,
    title: "Actualizar los links del CV en todas las variantes",
    detail:
      "Portfolio, GitHub, LinkedIn y case study TwinSight en cada variante (opcionales: demo y ArtStation). El CV se actualiza después de que los enlaces existan para evitar URLs rotas (doc-36 §4.2).",
    requiresAssetIds: ["web-cv-pdf"],
    requiresStepIds: ["publish-demo-video", "update-github-readme", "publish-twinsight-case-study"],
    urlPlaceholders: [
      { key: "CV_PDF_URL", label: "URL del PDF del CV publicado" }
    ],
    source: "doc-36 §4.1, §12"
  },
  {
    id: "update-tracker-default-links",
    order: 9,
    day: 5,
    title: "Actualizar los links por defecto del application tracker",
    detail:
      "Cargar los enlaces finales (portfolio, case study, GitHub, demo, LinkedIn, ArtStation) y las columnas de asset-readiness de doc-36 §13. Último paso operativo para que las aplicaciones usen los links definitivos. Nota de ownership: registrar el evento y el tracker es AG-CAREER; AG-PORT entrega los assets.",
    requiresAssetIds: [],
    requiresStepIds: ["update-cv-links"],
    urlPlaceholders: [
      { key: "TRACKER_DEFAULT_LINKS", label: "Bloque de links por defecto del tracker" }
    ],
    source: "doc-36 §4.1, §13"
  },
  {
    id: "publish-first-linkedin-post",
    order: 10,
    day: 6,
    title: "Publicar el primer post de lanzamiento en LinkedIn",
    detail:
      "Elegir versión técnica/corta/contractor de doc-36 §10, teaser nativo de 30 s y 3–5 hashtags. Hard launch solo tras QA completo; antes, soft launch selectivo (doc-36 §17).",
    requiresAssetIds: ["video-teaser-30s"],
    requiresStepIds: ["add-linkedin-featured"],
    urlPlaceholders: [
      { key: "LAUNCH_POST_LINK", label: "Enlace del post (case study o demo)" }
    ],
    source: "doc-36 §4.1, §10, §17"
  }
];

export const portfolioLaunchDayLabels: Record<number, string> = {
  1: "Día 1 — Vídeo y GitHub",
  2: "Día 2 — Portafolio",
  3: "Día 3 — LinkedIn",
  4: "Día 4 — ArtStation",
  5: "Día 5 — CV y tracker",
  6: "Día 6 — Primer post"
};

/** Pure gating rule: a step unlocks when all required assets are "done" AND all required steps are completed. */
export function isLaunchStepEnabled(
  step: PortfolioLaunchStep,
  effectiveStatuses: Record<string, PortfolioAssetStatus>,
  completedStepIds: readonly string[]
): boolean {
  const assetsReady = step.requiresAssetIds.every(
    (id) => effectiveStatuses[id] === "done"
  );
  const stepsDone = step.requiresStepIds.every((id) => completedStepIds.includes(id));
  return assetsReady && stepsDone;
}

export interface LaunchBlocker {
  kind: "asset" | "step";
  id: string;
  label: string;
}

/** Human-readable reasons why a step is still locked (board status or missing predecessors). */
export function getLaunchBlockers(
  step: PortfolioLaunchStep,
  effectiveStatuses: Record<string, PortfolioAssetStatus>,
  completedStepIds: readonly string[]
): LaunchBlocker[] {
  return [
    ...step.requiresAssetIds
      .filter((id) => effectiveStatuses[id] !== "done")
      .map((id) => ({ kind: "asset" as const, id, label: `Asset no listo: ${id}` })),
    ...step.requiresStepIds
      .filter((id) => !completedStepIds.includes(id))
      .map((id) => ({ kind: "step" as const, id, label: `Paso previo pendiente: ${id}` }))
  ];
}

// ── Final pre-application gate (doc-36 §21) ─────────────────────────────────
// No serious application volume until these six conditions hold. Derived purely
// from completed launch steps — no manual second checklist to maintain.

export interface LaunchGateRow {
  id: string;
  label: string;
  requiredStepId: string;
}

export const preApplicationGateRows: LaunchGateRow[] = [
  { id: "gate-case-study", label: "Case study del portafolio público.", requiredStepId: "publish-twinsight-case-study" },
  { id: "gate-github-readme", label: "README de GitHub actualizado.", requiredStepId: "update-github-readme" },
  { id: "gate-demo-public", label: "Vídeo demo público.", requiredStepId: "publish-demo-video" },
  { id: "gate-linkedin-featured", label: "Featured de LinkedIn con TwinSight.", requiredStepId: "add-linkedin-featured" },
  { id: "gate-cv-links", label: "Links del CV funcionando.", requiredStepId: "update-cv-links" },
  { id: "gate-tracker-links", label: "Tracker con los links finales.", requiredStepId: "update-tracker-default-links" }
];

export function getPreApplicationGate(completedStepIds: readonly string[]): {
  row: LaunchGateRow;
  satisfied: boolean;
}[] {
  return preApplicationGateRows.map((row) => ({
    row,
    satisfied: completedStepIds.includes(row.requiredStepId)
  }));
}

// ── Persisted completion state ────────────────────────────────────────────────
// Same persistence convention as the sprint board store (zustand persist; swaps
// to the CORE IndexedDB adapter later without changing its interface).

interface PortfolioLaunchStore {
  completedStepIds: string[];
  toggleStepCompleted: (id: string, completed: boolean) => void;
  resetLaunch: () => void;
}

export const usePortfolioLaunchStore = create<PortfolioLaunchStore>()(
  persist(
    (set) => ({
      completedStepIds: [],
      toggleStepCompleted: (id, completed) => {
        const exists = portfolioLaunchSteps.some((step) => step.id === id);
        if (!exists) return;
        set((state) => ({
          completedStepIds: completed
            ? Array.from(new Set([...state.completedStepIds, id]))
            : state.completedStepIds.filter((stepId) => stepId !== id)
        }));
      },
      resetLaunch: () => set({ completedStepIds: [] })
    }),
    {
      name: 'portapp-launch-v1',
      version: 1,
      partialize: (state) => ({ completedStepIds: state.completedStepIds })
    }
  )
);
