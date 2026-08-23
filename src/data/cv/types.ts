// src/data/cv/types.ts — AG-PORT
// CV module data model. Source of truth: doc 17 (17_cv_base_and_role_variants.md)
// + benchmark rules from doc 28B. Every block carries a source citation.

export interface CvContact {
  label: string;
  value: string;
  /** True while the real value is still a placeholder (doc 17 §2). */
  isPlaceholder?: boolean;
}

export interface CvBullet {
  text: string;
  /** Metric/wording pending final verification (doc 17 §3 "verify" notes). */
  verify?: boolean;
  /** Citation of the doc-17 section this bullet comes from. */
  source?: string;
}

export interface CvProjectBlock {
  id: string;
  title: string;
  meta: string;
  bullets: CvBullet[];
  source: string;
}

export interface CvExperienceBlock {
  title: string;
  meta: string;
  bullets: string[];
  source: string;
}

export interface CvEducationBlock {
  title: string;
  meta: string;
  bullets: string[];
  source: string;
}

export interface CvSkillGroup {
  id: string;
  name: string;
  items: string;
  source: string;
}

export type CvSectionKind =
  | "projects"
  | "experience"
  | "skills"
  | "education"
  | "training"
  | "languages"
  | "links";

export interface CvSection {
  id: string;
  kind: CvSectionKind;
  title: string;
  /** Citation(s) for this section's content, e.g. "doc-17 §3". */
  source: string;
  projects?: CvProjectBlock[];
  experience?: CvExperienceBlock[];
  skills?: CvSkillGroup[];
  education?: CvEducationBlock[];
  /** Simple string lines (training, languages, links). */
  items?: string[];
}

export interface CvVariant {
  slug: string;
  label: string;
  headline: string;
  summary: string;
  /** Role families this variant targets (doc 17 §4–§8). */
  targets: string[];
  /** ATS keywords (doc 17 per-variant keyword lists). */
  keywords: string[];
  /** Recommended export file name (doc 17 §14). */
  fileName: string;
  /** doc 17 §17 production priority (1 = produce now). */
  producePriority: 1 | 2;
  /** Skill group ids in emphasis order for this variant. */
  skillGroupOrder: string[];
  /** Project bullet selections, keyed by project id. */
  projectBullets: {
    twinsight: string[];
    ara: string[];
    human?: string[];
  };
  sources: string[];
}

export interface CvComposed {
  variant: CvVariant;
  name: string;
  locationLine: string;
  contacts: CvContact[];
  coreStack: string[];
  sections: CvSection[];
  /** Readiness items pending user confirmation before PDF export (doc 17 §2, §18). */
  pendingConfirmations: string[];
}

export type CvBenchmarkStatus = "applied" | "attention";

export interface CvBenchmarkCheck {
  id: string;
  rule: string;
  detail: string;
  status: CvBenchmarkStatus;
  source: string;
}
