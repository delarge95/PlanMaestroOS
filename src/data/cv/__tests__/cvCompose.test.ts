// src/data/cv/__tests__/cvCompose.test.ts — AG-PORT
// Composition and doc-28B benchmark evaluation for the CV module.

import { describe, expect, it } from "vitest";
import { composeAllCvs, composeCv, evaluateCvBenchmark, hasScaleMarker } from "../cvCompose";
import { cvSkillGroups, twinsightBullets } from "../cvBase";
import { cvVariants, defaultCvVariantSlug } from "../cvVariants";
import type { CvVariant } from "../types";

describe("composeCv", () => {
  it("composes every declared variant without missing bullets", () => {
    for (const variant of cvVariants) {
      const cv = composeCv(variant);
      const selected = cv.sections.find((s) => s.id === "selected-project");
      expect(selected, variant.slug).toBeDefined();
      expect(selected?.projects?.[0].bullets.length, variant.slug).toBeGreaterThan(0);
      for (const bullet of selected?.projects?.[0].bullets ?? []) {
        expect(bullet.text.length, variant.slug).toBeGreaterThan(10);
      }
    }
  });

  it("orders sections project-led: projects before skills, education, languages, links (doc 28B §5.1)", () => {
    const cv = composeCv(cvVariants[0]);
    const ids = cv.sections.map((section) => section.id);
    expect(ids.indexOf("selected-project")).toBe(0);
    expect(ids.indexOf("additional-projects")).toBeGreaterThan(0);
    expect(ids.indexOf("skills")).toBeGreaterThan(ids.indexOf("additional-projects"));
    expect(ids.indexOf("education")).toBeGreaterThan(ids.indexOf("skills"));
    expect(ids.indexOf("languages")).toBeGreaterThan(ids.indexOf("education"));
    expect(ids.indexOf("links")).toBe(ids.length - 1);
    // Experience is excluded for early applications (doc 28B §9.6)
    expect(ids).not.toContain("experience");
  });

  it("can include the experience block when explicitly requested", () => {
    const cv = composeCv(cvVariants[0], { includeExperience: true });
    expect(cv.sections.some((section) => section.id === "experience")).toBe(true);
  });

  it("orders skill groups by the variant emphasis order", () => {
    const toolsVariant = cvVariants.find((v) => v.slug === "tools-python-automation")!;
    const cv = composeCv(toolsVariant);
    const skills = cv.sections.find((section) => section.kind === "skills")?.skills ?? [];
    expect(skills.map((group) => group.id)).toEqual(toolsVariant.skillGroupOrder);
    // All base groups are covered by the declared order
    for (const group of cvSkillGroups) {
      expect(toolsVariant.skillGroupOrder).toContain(group.id);
    }
  });

  it("adds additional projects only when the variant selects bullets for them", () => {
    const webgl = cvVariants.find((v) => v.slug === "unity-webgl")!;
    const cv = composeCv(webgl);
    const additional = cv.sections.find((section) => section.id === "additional-projects");
    // Doc 17 §6 selects no ARA bullet for the WebGL variant
    expect(additional).toBeUndefined();

    const techArtist = cvVariants.find((v) => v.slug === "unity-technical-artist")!;
    const cvTa = composeCv(techArtist);
    const additionalTa = cvTa.sections.find((section) => section.id === "additional-projects");
    expect(additionalTa?.projects?.map((p) => p.id)).toEqual(["ara", "human"]);
  });

  it("appends the documented structure-scale bullet when variant bullets carry no scale marker (doc 28B §9.3)", () => {
    const cv = composeCv(cvVariants[0]);
    const bullets = cv.sections.find((s) => s.id === "selected-project")?.projects?.[0].bullets;
    const scale = bullets?.find((b) => b.text.includes("28 canonical research parts"));
    expect(scale).toBeDefined();
    expect(scale?.source).toContain("doc-28B");
  });

  it("resolves selected TwinSight bullets from the bullet bank with citations", () => {
    const variant = cvVariants.find((v) => v.slug === defaultCvVariantSlug)!;
    const cv = composeCv(variant);
    const bullets = cv.sections.find((s) => s.id === "selected-project")?.projects?.[0].bullets;
    // Variant selection + the appended structure-scale bullet (doc 28B §9.3)
    const expectedLength = variant.projectBullets.twinsight.some((key) =>
      hasScaleMarker(twinsightBullets[key]?.text ?? "")
    )
      ? variant.projectBullets.twinsight.length
      : variant.projectBullets.twinsight.length + 1;
    expect(bullets?.length).toBe(expectedLength);
    for (const key of variant.projectBullets.twinsight) {
      expect(twinsightBullets[key], `bullet ${key}`).toBeDefined();
    }
  });
});

describe("composeAllCvs", () => {
  it("sorts by doc 17 §17 production priority and keeps all variants", () => {
    const all = composeAllCvs(cvVariants);
    expect(all).toHaveLength(cvVariants.length);
    for (let i = 1; i < all.length; i += 1) {
      expect(all[i - 1].variant.producePriority).toBeLessThanOrEqual(
        all[i].variant.producePriority
      );
    }
  });
});

describe("evaluateCvBenchmark", () => {
  it("applies the headline, hygiene and seniority rules to every variant", () => {
    for (const cv of composeAllCvs(cvVariants)) {
      const checks = evaluateCvBenchmark(cv);
      const byId = Object.fromEntries(checks.map((check) => [check.id, check]));
      expect(byId["headline-narrow"].status, cv.variant.slug).toBe("applied");
      expect(byId["proof-before-personality"].status, cv.variant.slug).toBe("applied");
      expect(byId["header-hygiene"].status, cv.variant.slug).toBe("applied");
      expect(byId["no-seniority-overclaim"].status, cv.variant.slug).toBe("applied");
      // Every check cites its doc-28B section
      for (const check of checks) {
        expect(check.source).toMatch(/doc-28B/);
      }
    }
  });

  it("applies project scale when documented, flags unverified metrics as attention (doc 28B §4.3, §4.5)", () => {
    // Variant 1 bullets carry no scale marker: compose appends the documented
    // 28/30/257 structure bullet, and nothing in it awaits verification.
    const v1 = composeCv(cvVariants[0]);
    const v1ById = Object.fromEntries(evaluateCvBenchmark(v1).map((c) => [c.id, c]));
    expect(v1ById["project-scale"].status).toBe("applied");

    // Variant 2 includes the SUS/NASA-TLX evaluation bullet, still flagged
    // verify until the final thesis report confirms the scores.
    const v2 = composeCv(cvVariants[1]);
    const v2ById = Object.fromEntries(evaluateCvBenchmark(v2).map((c) => [c.id, c]));
    expect(v2ById["project-scale"].status).toBe("attention");

    // Placeholder links and pending confirmations apply to every variant.
    expect(v1ById["links-connected"].status).toBe("attention"); // [PORTFOLIO_URL] placeholder
    expect(v1ById["no-published-placeholders"].status).toBe("attention"); // [date], placeholders
  });

  it("detects soft-skill phrases when injected (doc 28B §4.2)", () => {
    const variant: CvVariant = {
      ...cvVariants[0],
      summary: "Passionate team player seeking creative opportunities."
    };
    const checks = evaluateCvBenchmark(composeCv(variant));
    expect(checks.find((c) => c.id === "proof-before-personality")?.status).toBe("attention");
  });

  it("detects seniority overclaim in the headline (doc 28B §8.2)", () => {
    const variant: CvVariant = { ...cvVariants[0], headline: "Senior Real-Time 3D Developer" };
    const checks = evaluateCvBenchmark(composeCv(variant));
    expect(checks.find((c) => c.id === "no-seniority-overclaim")?.status).toBe("attention");
  });
});
