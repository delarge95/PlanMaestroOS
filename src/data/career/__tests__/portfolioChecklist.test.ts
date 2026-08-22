import { describe, expect, it } from "vitest";
import {
  portfolioAssetChecklist,
  pendingPortfolioAssetCount,
  pendingPortfolioAssets,
  portfolioAssetsByPlatform
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

  it("unblocks link keys reference known placeholder keys", () => {
    const knownKeys = new Set(["twinsightDemo", "twinsightGithub", "humanArtStation", "cv"]);
    for (const item of portfolioAssetChecklist) {
      for (const key of item.unblocksLinkKeys ?? []) {
        expect(knownKeys.has(key)).toBe(true);
      }
    }
  });
});
