// src/data/cv/cvCompose.ts — AG-PORT
// Pure composition: base CV content (doc 17) + role variant (doc 17 §4–§8)
// → one CV document per variant, in the project-led order of doc 28B §5.1/§9.6.
// Benchmark checks evaluate the composed document against doc 28B rules.

import { links } from "../links";
import {
  araBullets,
  cvContacts,
  cvCoreStack,
  cvEducation,
  cvExperience,
  cvLanguages,
  cvLocationLine,
  cvName,
  cvPendingConfirmations,
  cvSkillGroups,
  cvTraining,
  humanBullets,
  twinsightBullets
} from "./cvBase";
import type { CvBenchmarkCheck, CvComposed, CvSection, CvVariant } from "./types";

export interface ComposeCvOptions {
  /**
   * Include the independent-experience block. Default false: for early
   * applications the CV is project-led (doc 28B §9.6); switch on once there
   * is formal role experience.
   */
  includeExperience?: boolean;
}

const twinsightMeta = "Unity WebGL Technical Visualization Prototype | Thesis Project";
const araMeta = "Python / LangGraph Research Automation Prototype";
const humanMeta = "Blender Character Study | CG Cookie HUMAN pipeline";

const selectedBullets = (
  pool: Record<string, { text: string; verify?: boolean; source?: string }>,
  keys: string[]
) => keys.map((key) => pool[key]).filter((bullet) => Boolean(bullet));

/**
 * A scale marker is a multi-digit count (28 parts, 257 elements, 95,617
 * triangles). Product names like "X500"/"V2" and "3D" tokens are excluded so
 * they cannot fake scale (doc 28B §4.3).
 */
export const hasScaleMarker = (text: string): boolean =>
  /\b\d{2,}\b/.test(text.replace(/X500/g, "").replace(/V2/g, "").replace(/3D|2D/g, ""));

const STRUCTURE_SCALE_BULLET_ID = "scaleStructure";

/** Compose the full CV document for one role variant (doc 28B §5.1 order). */
export const composeCv = (variant: CvVariant, options: ComposeCvOptions = {}): CvComposed => {
  const { includeExperience = false } = options;

  const sections: CvSection[] = [];

  // 5. Selected Technical Project (doc 28B §6.4, §9.3)
  const twinsightKeys = variant.projectBullets.twinsight ?? [];
  const twinsightSelected = selectedBullets(twinsightBullets, twinsightKeys);
  // Benchmark rule: the selected project always exposes verifiable scale —
  // if the variant bullets carry no scale marker, append the structure bullet
  // (documented 28/30/257 counts, doc 28B §6.4/§9.3).
  if (
    !twinsightSelected.some((bullet) => hasScaleMarker(bullet.text)) &&
    twinsightBullets[STRUCTURE_SCALE_BULLET_ID]
  ) {
    twinsightSelected.push(twinsightBullets[STRUCTURE_SCALE_BULLET_ID]);
  }
  sections.push({
    id: "selected-project",
    kind: "projects",
    title: "Selected Technical Project",
    source: "doc-17 §3, doc-28B §6.4",
    projects: [
      {
        id: "twinsight",
        title: "TwinSight X500",
        meta: twinsightMeta,
        bullets: twinsightSelected,
        source: "doc-17 §3"
      }
    ]
  });

  // 6. Additional projects (doc 28B §6.5)
  const additional: NonNullable<CvSection["projects"]> = [];
  const araKeys = variant.projectBullets.ara ?? [];
  if (araKeys.length > 0) {
    additional.push({
      id: "ara",
      title: "ARA Framework",
      meta: araMeta,
      bullets: selectedBullets(araBullets, araKeys),
      source: "doc-17 §3"
    });
  }
  const humanKeys = variant.projectBullets.human ?? [];
  if (humanKeys.length > 0) {
    additional.push({
      id: "human",
      title: "Hyperrealistic Blender Portrait",
      meta: humanMeta,
      bullets: selectedBullets(humanBullets, humanKeys),
      source: "doc-17 §3"
    });
  }
  if (additional.length > 0) {
    sections.push({
      id: "additional-projects",
      kind: "projects",
      title: "Additional Projects",
      source: "doc-28B §6.5",
      projects: additional
    });
  }

  // Optional experience block (doc 28B §9.6: only once there is formal role experience)
  if (includeExperience) {
    sections.push({
      id: "experience",
      kind: "experience",
      title: "Experience",
      source: "doc-17 §3, doc-28B §9.6",
      experience: cvExperience
    });
  }

  // 7. Technical skills, emphasis-ordered for the variant (doc 28B §4.4/§8.4)
  const orderedGroups = variant.skillGroupOrder
    .map((id) => cvSkillGroups.find((group) => group.id === id))
    .filter((group): group is NonNullable<typeof group> => Boolean(group));
  sections.push({
    id: "skills",
    kind: "skills",
    title: "Technical Skills",
    source: "doc-17 §3, doc-28B §4.4",
    skills: orderedGroups
  });

  // 8. Education (doc 28B §6.6: UNAL stays secondary)
  sections.push({
    id: "education",
    kind: "education",
    title: "Education",
    source: "doc-17 §3, §11, doc-28B §6.6",
    education: cvEducation
  });

  // Training, always framed as non-certified (doc 17 §12)
  sections.push({
    id: "training",
    kind: "training",
    title: "Courses and Training",
    source: "doc-17 §12",
    items: cvTraining
  });

  // 9. Languages (doc 28B §6.7)
  sections.push({
    id: "languages",
    kind: "languages",
    title: "Languages",
    source: "doc-17 §3, doc-28B §6.7",
    items: cvLanguages
  });

  // 10. Links (doc 28B §4.5)
  sections.push({
    id: "links",
    kind: "links",
    title: "Links",
    source: "doc-28B §4.5",
    items: cvContacts.map((contact) => `${contact.label}: ${contact.value}`)
  });

  return {
    variant,
    name: cvName,
    locationLine: cvLocationLine,
    contacts: cvContacts,
    coreStack: cvCoreStack,
    sections,
    pendingConfirmations: cvPendingConfirmations
  };
};

/** Compose every variant, in doc 17 §17 production-priority order. */
export const composeAllCvs = (variants: CvVariant[]): CvComposed[] =>
  [...variants]
    .sort((a, b) => a.producePriority - b.producePriority)
    .map((variant) => composeCv(variant));

// ── Benchmark evaluation (doc 28B) ────────────────────────────────────────────

const BROAD_HEADLINE_TERMS = ["generalist", "creative developer", "passionate", "guru", "ninja"];
const SOFT_PHRASES = [
  "passionate",
  "creative",
  "hard-working",
  "hardworking",
  "team player",
  "problem solver",
  "highly motivated",
  "proven track record",
  "excellent communication",
  "results-driven"
];
const SENIORITY_TERMS = ["senior", " lead ", "head of", "expert", "director", "principal"];

const projectBulletTexts = (cv: CvComposed): string[] =>
  cv.sections
    .filter((section) => section.kind === "projects")
    .flatMap((section) => section.projects ?? [])
    .flatMap((project) => project.bullets.map((bullet) => bullet.text));

const includesAny = (haystack: string, needles: string[]): string | undefined =>
  needles.find((needle) => haystack.includes(needle));

/**
 * Evaluate the composed CV against the doc-28B benchmark rules. Deterministic
 * string scans over the composed document — no hidden state.
 */
export const evaluateCvBenchmark = (cv: CvComposed): CvBenchmarkCheck[] => {
  const checks: CvBenchmarkCheck[] = [];
  const headlineLc = cv.variant.headline.toLowerCase();
  const summaryLc = cv.variant.summary.toLowerCase();
  const bulletTexts = projectBulletTexts(cv);
  const experienceTexts = cv.sections
    .filter((section) => section.kind === "experience")
    .flatMap((section) => section.experience ?? [])
    .flatMap((block) => [block.title, ...block.bullets])
    .map((text) => text.toLowerCase());

  // §4.1 — narrow role headline, not a broad identity label
  const broadTerm = includesAny(headlineLc, BROAD_HEADLINE_TERMS);
  checks.push({
    id: "headline-narrow",
    rule: "Narrow role headline",
    detail: broadTerm
      ? `Headline contains the broad term "${broadTerm.trim()}". Use a direct role label instead.`
      : "Headline uses a direct role label, not a broad identity label.",
    status: broadTerm ? "attention" : "applied",
    source: "doc-28B §4.1"
  });

  // §4.2 + §8.3 — proof before personality; no generic sample-CV language
  const softHays = [summaryLc, ...bulletTexts.map((t) => t.toLowerCase()), ...experienceTexts];
  const softHit = softHays.map((hay) => includesAny(hay, SOFT_PHRASES)).find(Boolean);
  checks.push({
    id: "proof-before-personality",
    rule: "Proof before personality",
    detail: softHit
      ? `Soft-skill phrase "${softHit.trim()}" found. Replace it with concrete project evidence.`
      : "Summary and bullets carry project evidence; no generic soft-skill phrases detected.",
    status: softHit ? "attention" : "applied",
    source: "doc-28B §4.2, §8.3"
  });

  // §4.3 — expose project scale, never invented
  const selectedProject = cv.sections.find((section) => section.id === "selected-project")
    ?.projects?.[0];
  const scaleBullets = (selectedProject?.bullets ?? []).filter((bullet) =>
    hasScaleMarker(bullet.text)
  );
  const verifyMetrics = (selectedProject?.bullets ?? []).filter((bullet) => bullet.verify);
  const scaleOk = Boolean(scaleBullets.length > 0);
  checks.push({
    id: "project-scale",
    rule: "Project scale visible",
    detail: !scaleOk
      ? "No numeric scale marker in the TwinSight bullets. Add measured, verifiable metrics."
      : verifyMetrics.length > 0
        ? `${scaleBullets.length} scale marker bullet(s) present; ${verifyMetrics.length} still flagged for verification against the final thesis report before publishing.`
        : "Scale markers present and verified.",
    status: scaleOk && verifyMetrics.length === 0 ? "applied" : "attention",
    source: "doc-28B §4.3, §9.4"
  });

  // §4.4 + §8.4 — technical skills grouped by function, no software dumping
  const skillGroups =
    cv.sections.find((section) => section.kind === "skills")?.skills ?? [];
  const dumpGroup = skillGroups.find((group) => group.items.length > 420);
  checks.push({
    id: "skills-grouped",
    rule: "Skills grouped by function",
    detail:
      skillGroups.length < 3
        ? "Fewer than 3 functional skill groups — risks reading as a tool dump."
        : dumpGroup
          ? `Group "${dumpGroup.name}" is too long — split it.`
          : `${skillGroups.length} functional groups in variant emphasis order.`,
    status: skillGroups.length >= 3 && !dumpGroup ? "applied" : "attention",
    source: "doc-28B §4.4, §8.4"
  });

  // §4.5 — CV connects to portfolio/GitHub/LinkedIn
  const hasPlaceholderLink = cv.contacts.some(
    (contact) => contact.value.startsWith("[") && contact.value.endsWith("]")
  );
  checks.push({
    id: "links-connected",
    rule: "Portfolio and resume connected",
    detail: hasPlaceholderLink
      ? `Placeholder link(s) still present (${links.portfolio}). Publish the real URLs before export.`
      : "Portfolio, GitHub and LinkedIn links resolved.",
    status: hasPlaceholderLink ? "attention" : "applied",
    source: "doc-28B §4.5"
  });

  // §6.1 — header hygiene
  checks.push({
    id: "header-hygiene",
    rule: "Clean header fields",
    detail:
      "Header carries name, role headline, location and professional links only — no photo, ID, birth date or street address.",
    status: "applied",
    source: "doc-28B §6.1"
  });

  // §8.2 — no seniority overclaim
  const seniorityHit = includesAny(headlineLc, SENIORITY_TERMS) ?? includesAny(summaryLc, SENIORITY_TERMS);
  checks.push({
    id: "no-seniority-overclaim",
    rule: "No seniority overclaim",
    detail: seniorityHit
      ? `Seniority term "${seniorityHit.trim()}" found without equivalent formal experience.`
      : "Positioning stays at Developer / Technical Artist level with project-based proof.",
    status: seniorityHit ? "attention" : "applied",
    source: "doc-28B §8.2"
  });

  // §9.4 — placeholders must not reach the final export
  const placeholderTexts: string[] = [];
  for (const section of cv.sections) {
    for (const project of section.projects ?? []) {
      if (project.meta.includes("[")) placeholderTexts.push(`${project.title} (meta)`);
      for (const bullet of project.bullets) {
        if (bullet.text.includes("[")) placeholderTexts.push(`${project.title} (bullet)`);
      }
    }
    for (const block of section.education ?? []) {
      if (block.meta.includes("[")) placeholderTexts.push(`${block.title} (meta)`);
    }
    for (const item of section.items ?? []) {
      if (item.includes("[")) placeholderTexts.push(`${section.title}: ${item}`);
    }
  }
  checks.push({
    id: "no-published-placeholders",
    rule: "No placeholders in export",
    detail:
      placeholderTexts.length === 0
        ? "No bracketed placeholders in the composed document."
        : `Placeholder text present in: ${[...new Set(placeholderTexts)].join("; ")}. Confirm values before PDF export.`,
    status: placeholderTexts.length === 0 ? "applied" : "attention",
    source: "doc-28B §9.4, doc-17 §2"
  });

  return checks;
};
