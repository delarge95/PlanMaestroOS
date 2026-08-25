import { describe, expect, it } from "vitest";
import {
  portfolioAssetChecklist,
  pendingPortfolioAssetCount,
  pendingPortfolioAssets,
  portfolioAssetsByPlatform,
  portfolioAssetsByStatus,
  PORTFOLIO_ASSET_STATUSES,
  artstationBreakdownSpecs,
  artstationProfileChecklist,
  artstationChecklistAreas
} from "../portfolioChecklist";

describe("portfolioChecklist (doc-33 asset sprint)", () => {
  it("has unique ids", () => {
    const ids = portfolioAssetChecklist.map((item) => item.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("every item cites a doc-33 section", () => {
    for (const item of portfolioAssetChecklist) {
      expect(item.source).toMatch(/^doc-33 §/);
    }
  });

  it("every item uses a valid platform", () => {
    const platforms = new Set(["artstation", "github", "linkedin", "web"]);
    for (const item of portfolioAssetChecklist) {
      expect(platforms.has(item.platform)).toBe(true);
    }
  });

  it("every item has title and detail", () => {
    for (const item of portfolioAssetChecklist) {
      expect(item.title.trim().length).toBeGreaterThan(3);
      expect(item.detail.trim().length).toBeGreaterThan(3);
    }
  });

  it("covers the four doc-33 package platforms", () => {
    for (const platform of ["artstation", "github", "linkedin", "web"] as const) {
      expect(portfolioAssetsByPlatform(platform).length).toBeGreaterThan(0);
    }
  });

  it("pending count matches items not done", () => {
    const notDone = portfolioAssetChecklist.filter((item) => item.status !== "done");
    expect(pendingPortfolioAssetCount).toBe(notDone.length);
    expect(pendingPortfolioAssets).toHaveLength(notDone.length);
  });

  it("starts fully pending (sprint not executed yet)", () => {
    expect(portfolioAssetChecklist.every((item) => item.status === "pending")).toBe(true);
  });

  it("exposes exactly the four board states", () => {
    expect(PORTFOLIO_ASSET_STATUSES).toEqual(["pending", "in_progress", "review", "done"]);
  });

  it("every item has a valid visual owner (alex production or AG-PORT integration)", () => {
    const owners = new Set(["alex", "ag-port"]);
    for (const item of portfolioAssetChecklist) {
      expect(owners.has(item.owner)).toBe(true);
    }
    // Both responsibilities must be represented on the board.
    expect(new Set(portfolioAssetChecklist.map((item) => item.owner)).size).toBe(2);
    // Asset production (capture/edit/export) belongs to the human owner.
    const producedIds = [
      "video-demo-90s",
      "image-thumbnail",
      "artstation-twinsight-breakdown",
      "linkedin-featured-media"
    ];
    for (const id of producedIds) {
      expect(portfolioAssetChecklist.find((item) => item.id === id)?.owner).toBe("alex");
    }
    // Site integration items belong to AG-PORT.
    for (const id of ["web-portfolio-media", "web-cv-pdf"]) {
      expect(portfolioAssetChecklist.find((item) => item.id === id)?.owner).toBe("ag-port");
    }
  });

  it("groups by status without losing items", () => {
    const total = PORTFOLIO_ASSET_STATUSES.reduce(
      (sum, status) => sum + portfolioAssetsByStatus(status).length,
      0
    );
    expect(total).toBe(portfolioAssetChecklist.length);
  });

  it("unblocks link keys reference known placeholder keys", () => {
    const knownKeys = new Set(["twinsightDemo", "twinsightGithub", "humanArtStation", "cv"]);
    for (const item of portfolioAssetChecklist) {
      for (const key of item.unblocksLinkKeys ?? []) {
        expect(knownKeys.has(key)).toBe(true);
      }
    }
  });
});

describe("artstationBreakdownSpecs (doc-29C structure)", () => {
  it("contains the two planned assets: TwinSight flagship + portrait supporting", () => {
    expect(artstationBreakdownSpecs.map((spec) => spec.id)).toEqual([
      "twinsight-x500",
      "blender-portrait"
    ]);
  });

  it("section ids are unique and orders are sequential per spec", () => {
    for (const spec of artstationBreakdownSpecs) {
      const ids = spec.sections.map((section) => section.id);
      expect(new Set(ids).size).toBe(ids.length);
      expect(spec.sections.map((section) => section.order)).toEqual(
        spec.sections.map((_, index) => index + 1)
      );
    }
  });

  it("every section cites a doc-29C locator", () => {
    for (const spec of artstationBreakdownSpecs) {
      for (const section of spec.sections) {
        expect(section.source).toMatch(/^doc-29C §/);
      }
    }
  });

  it("TwinSight includes the load-bearing breakdown kinds (before/after, wireframe, milestones, software)", () => {
    const twinsight = artstationBreakdownSpecs[0];
    const kinds = new Set(twinsight.sections.map((section) => section.kind));
    for (const kind of ["before-after", "wireframe", "pipeline", "software", "metrics", "limitations"]) {
      expect(kinds.has(kind as (typeof twinsight.sections)[number]["kind"])).toBe(true);
    }
  });

  it("portrait includes wireframe (topology) and sculpt milestone sections", () => {
    const portrait = artstationBreakdownSpecs[1];
    const kinds = new Set(portrait.sections.map((section) => section.kind));
    expect(kinds.has("wireframe")).toBe(true);
    expect(kinds.has("sculpt-stages")).toBe(true);
    expect(kinds.has("software")).toBe(true);
  });

  it("guidance is paraphrased (short) and software lists are non-empty", () => {
    for (const spec of artstationBreakdownSpecs) {
      expect(spec.software.length).toBeGreaterThan(0);
      expect(spec.tags.length).toBeGreaterThan(0);
      for (const section of spec.sections) {
        expect(section.guidance.length).toBeGreaterThan(10);
        expect(section.guidance.length).toBeLessThan(400);
      }
    }
  });
});

describe("artstationProfileChecklist (doc-28E profile setup)", () => {
  it("ids are unique and every item cites a doc", () => {
    const ids = artstationProfileChecklist.map((item) => item.id);
    expect(new Set(ids).size).toBe(ids.length);
    for (const item of artstationProfileChecklist) {
      expect(item.source).toMatch(/^doc-(28E|29C) §/);
    }
  });

  it("covers the mandated areas: skills, software, availability, links, hero artwork", () => {
    const areas = new Set(artstationProfileChecklist.map((item) => item.area));
    for (const area of ["skills", "software", "availability", "links", "hero-artwork"]) {
      expect(areas.has(area as (typeof artstationProfileChecklist)[number]["area"])).toBe(true);
    }
  });

  it("checklist area labels match every used area (no orphan groups)", () => {
    const labelAreas = new Set(artstationChecklistAreas.map((entry) => entry.area));
    for (const item of artstationProfileChecklist) {
      expect(labelAreas.has(item.area)).toBe(true);
    }
  });
});
