import { beforeEach, describe, expect, it } from "vitest";
import {
  selectBoardCards,
  selectBoardColumns,
  usePortfolioBoardStore,
  withBoardDefaults,
  type PortfolioBoardStatusMap
} from "../portfolioBoardStore";
import { portfolioAssetChecklist } from "../portfolioChecklist";

const store = () => usePortfolioBoardStore.getState();

beforeEach(() => {
  store().resetBoard();
});

describe("portfolioBoardStore (doc-33 sprint board live state)", () => {
  it("starts at the dataset baseline: every asset pending", () => {
    const statuses = withBoardDefaults(store().statuses);
    for (const item of portfolioAssetChecklist) {
      expect(statuses[item.id]).toBe(item.status);
    }
  });

  it("setAssetStatus updates only known ids with valid states", () => {
    store().setAssetStatus("video-demo-90s", "in_progress");
    expect(store().statuses["video-demo-90s"]).toBe("in_progress");

    const before = { ...store().statuses };
    store().setAssetStatus("unknown-id", "done");
    store().setAssetStatus("video-demo-90s", "archived" as never);
    expect(store().statuses).toEqual(before);
  });

  it("resetBoard returns to the dataset defaults", () => {
    store().setAssetStatus("image-thumbnail", "review");
    expect(store().statuses["image-thumbnail"]).toBe("review");
    store().resetBoard();
    expect(store().statuses["image-thumbnail"]).toBe("pending");
  });

  it("withBoardDefaults fills unknown/missing ids from the dataset", () => {
    const partial: PortfolioBoardStatusMap = { "video-demo-90s": "done" };
    const merged = withBoardDefaults(partial);
    expect(merged["video-demo-90s"]).toBe("done");
    for (const item of portfolioAssetChecklist) {
      expect(merged[item.id]).toBeDefined();
    }
  });

  it("selectBoardCards keeps dataset order and applies live status", () => {
    store().setAssetStatus(portfolioAssetChecklist[0].id, "review");
    const cards = selectBoardCards(store().statuses);
    expect(cards.map((card) => card.id)).toEqual(portfolioAssetChecklist.map((item) => item.id));
    expect(cards[0].effectiveStatus).toBe("review");
    expect(cards[1].effectiveStatus).toBe(cards[1].status);
  });

  it("selectBoardColumns partitions all items into exactly four columns", () => {
    store().setAssetStatus("video-demo-90s", "in_progress");
    store().setAssetStatus("image-thumbnail", "review");
    store().setAssetStatus("github-media-folder", "done");
    const columns = selectBoardColumns(store().statuses);
    const total = Object.values(columns).reduce((sum, cards) => sum + cards.length, 0);
    expect(total).toBe(portfolioAssetChecklist.length);
    expect(columns.in_progress.map((c) => c.id)).toEqual(["video-demo-90s"]);
    expect(columns.review.map((c) => c.id)).toEqual(["image-thumbnail"]);
    expect(columns.done.map((c) => c.id)).toEqual(["github-media-folder"]);
    expect(columns.pending.length).toBe(portfolioAssetChecklist.length - 3);
  });
});
