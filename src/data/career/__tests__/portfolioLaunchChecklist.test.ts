import { beforeEach, describe, expect, it } from "vitest";
import { portfolioAssetChecklist } from "../portfolioChecklist";
import {
  getLaunchBlockers,
  getPreApplicationGate,
  isLaunchStepEnabled,
  portfolioLaunchDayLabels,
  portfolioLaunchSteps,
  preApplicationGateRows,
  usePortfolioLaunchStore
} from "../portfolioLaunchChecklist";

const allPending = Object.fromEntries(
  portfolioAssetChecklist.map((item) => [item.id, item.status])
);

const markDone = (ids: string[]) => {
  const statuses = { ...allPending };
  for (const id of ids) statuses[id] = "done";
  return statuses;
};

describe("portfolioLaunchSteps (doc-36 launch sequence)", () => {
  it("has the exact doc-36 §4.1 order with unique sequential ids", () => {
    expect(portfolioLaunchSteps.map((step) => step.order)).toEqual(
      portfolioLaunchSteps.map((_, index) => index + 1)
    );
    const ids = portfolioLaunchSteps.map((step) => step.id);
    expect(new Set(ids).size).toBe(ids.length);
    expect(ids).toEqual([
      "publish-demo-video",
      "update-github-readme",
      "publish-twinsight-case-study",
      "update-homepage",
      "update-linkedin-profile",
      "add-linkedin-featured",
      "publish-artstation-breakdown",
      "update-cv-links",
      "update-tracker-default-links",
      "publish-first-linkedin-post"
    ]);
  });

  it("every step cites a doc-36 section and a valid day (1–6)", () => {
    for (const step of portfolioLaunchSteps) {
      expect(step.source).toMatch(/^doc-36 §/);
      expect(step.day).toBeGreaterThanOrEqual(1);
      expect(step.day).toBeLessThanOrEqual(6);
      expect(portfolioLaunchDayLabels[step.day]).toBeDefined();
    }
  });

  it("required assets reference real sprint-board items", () => {
    const assetIds = new Set(portfolioAssetChecklist.map((item) => item.id));
    for (const step of portfolioLaunchSteps) {
      for (const id of step.requiresAssetIds) {
        expect(assetIds.has(id)).toBe(true);
      }
    }
  });

  it("required steps reference earlier steps only (no forward or self dependencies)", () => {
    for (let index = 0; index < portfolioLaunchSteps.length; index += 1) {
      const step = portfolioLaunchSteps[index];
      const earlierIds = new Set(
        portfolioLaunchSteps.slice(0, index).map((previous) => previous.id)
      );
      for (const id of step.requiresStepIds) {
        expect(earlierIds.has(id)).toBe(true);
      }
    }
  });

  it("contains NO invented URLs: placeholders are explicit [KEY]-style tokens only", () => {
    const serialized = JSON.stringify(portfolioLaunchSteps);
    expect(serialized).not.toMatch(/https?:\/\//);
    for (const step of portfolioLaunchSteps) {
      for (const placeholder of step.urlPlaceholders) {
        expect(placeholder.key).toMatch(/^[A-Z0-9_]+$/);
        expect(placeholder.label.trim().length).toBeGreaterThan(3);
      }
    }
  });

  it("the first launch post requires the teaser asset produced in doc-33", () => {
    const post = portfolioLaunchSteps.find((step) => step.id === "publish-first-linkedin-post");
    expect(post?.requiresAssetIds).toContain("video-teaser-30s");
  });
});

describe("launch gating synced with the doc-33 board", () => {
  it("a step with unmet assets stays locked and lists its blockers", () => {
    const demo = portfolioLaunchSteps[0];
    expect(isLaunchStepEnabled(demo, allPending, [])).toBe(false);

    const blockers = getLaunchBlockers(demo, allPending, []);
    expect(blockers.map((blocker) => blocker.id).sort()).toEqual([
      "image-thumbnail",
      "video-demo-90s"
    ]);

    expect(isLaunchStepEnabled(demo, markDone(["video-demo-90s"]), [])).toBe(false);
    expect(
      isLaunchStepEnabled(demo, markDone(["video-demo-90s", "image-thumbnail"]), [])
    ).toBe(true);
  });

  it("asset readiness alone does not unlock order-dependent steps (doc-36 §4.2)", () => {
    const homepage = portfolioLaunchSteps.find((step) => step.id === "update-homepage")!;
    const readyStatuses = markDone(["web-portfolio-media"]);
    expect(isLaunchStepEnabled(homepage, readyStatuses, [])).toBe(false);
    expect(
      isLaunchStepEnabled(homepage, readyStatuses, ["publish-twinsight-case-study"])
    ).toBe(true);
  });

  it("CV links unlock only after the proof links exist AND the CV PDF asset is done", () => {
    const cv = portfolioLaunchSteps.find((step) => step.id === "update-cv-links")!;
    const linkStepsDone = [
      "publish-demo-video",
      "update-github-readme",
      "publish-twinsight-case-study"
    ];
    expect(isLaunchStepEnabled(cv, markDone(["web-cv-pdf"]), linkStepsDone)).toBe(true);
    expect(isLaunchStepEnabled(cv, allPending, linkStepsDone)).toBe(false);
    expect(isLaunchStepEnabled(cv, markDone(["web-cv-pdf"]), [])).toBe(false);
  });

  it("tracker step chains after CV links (applications use final links)", () => {
    const tracker = portfolioLaunchSteps.find(
      (step) => step.id === "update-tracker-default-links"
    )!;
    expect(isLaunchStepEnabled(tracker, allPending, ["update-cv-links"])).toBe(true);
    expect(isLaunchStepEnabled(tracker, allPending, [])).toBe(false);
  });
});

describe("pre-application gate (doc-36 §21)", () => {
  it("maps every row to a real launch step and starts unsatisfied", () => {
    const requiredIds = new Set(portfolioLaunchSteps.map((step) => step.id));
    expect(preApplicationGateRows.length).toBe(6);
    for (const row of preApplicationGateRows) {
      expect(requiredIds.has(row.requiredStepId)).toBe(true);
    }
    expect(getPreApplicationGate([]).every((entry) => !entry.satisfied)).toBe(true);
  });

  it("becomes fully satisfied when the six referenced steps complete", () => {
    const completed = preApplicationGateRows.map((row) => row.requiredStepId);
    expect(getPreApplicationGate(completed).every((entry) => entry.satisfied)).toBe(true);
  });
});

describe("portfolioLaunchStore (persisted completions)", () => {
  const store = () => usePortfolioLaunchStore.getState();

  beforeEach(() => {
    store().resetLaunch();
  });

  it("toggles known steps and ignores unknown ids", () => {
    store().toggleStepCompleted("publish-demo-video", true);
    expect(store().completedStepIds).toEqual(["publish-demo-video"]);

    store().toggleStepCompleted("unknown-step", true);
    expect(store().completedStepIds).toEqual(["publish-demo-video"]);

    store().toggleStepCompleted("publish-demo-video", false);
    expect(store().completedStepIds).toEqual([]);
  });

  it("resetLaunch clears all completions", () => {
    store().toggleStepCompleted("add-linkedin-featured", true);
    store().resetLaunch();
    expect(store().completedStepIds).toEqual([]);
  });
});
