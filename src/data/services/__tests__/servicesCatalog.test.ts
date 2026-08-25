// src/data/services/__tests__/servicesCatalog.test.ts — AG-SERV
// Consistencia del catálogo v1: integridad estructural, matemática del motor y anclas del doc.

import { describe, expect, it } from "vitest";
import {
  estimateCadConversion,
  estimatePackage,
  estimateSubtask,
  estimateTaskAtTier,
  getTaskById,
  getTaskSubtasks,
} from "../estimator";
import { RATE_CLASSES } from "../rateCard";
import { CAD_PIECE_CLASSES, DRONE_ANCHORS, FAMILIES, TASKS } from "../serviceCatalog";
import { PACKAGES, RETAINER_BLOCKS } from "../packages";
import type { ComplexityTier, Estimate } from "../types";

const TIERS: readonly ComplexityTier[] = ["S", "M", "L", "XL"];

describe("integridad estructural del catálogo", () => {
  it("ids de familia únicos", () => {
    const ids = FAMILIES.map((f) => f.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("todos los rangos de horas son válidos (min<=max, >=0) y las clases de tarifa existen", () => {
    const rateIds = new Set(RATE_CLASSES.map((r) => r.id));
    for (const task of TASKS) {
      for (const sub of task.subtasks ?? []) {
        for (const tier of TIERS) {
          const hours = sub.hoursByTier[tier];
          if (!hours) continue;
          expect(hours.min, `${sub.id}@${tier}`).toBeLessThanOrEqual(hours.max);
          expect(hours.min, `${sub.id}@${tier}`).toBeGreaterThanOrEqual(0);
        }
        expect(rateIds.has(sub.rateClass), `${sub.id} rateClass`).toBe(true);
      }
    }
  });

  it("ids de subtarea definidos únicos; todo módulo referenciado existe", () => {
    const defining: string[] = [];
    const moduleIds = new Set(
      (getTaskById("B-PIPELINE").subtasks ?? []).map((s) => s.id),
    );
    for (const task of TASKS) {
      if (task.moduleIds) {
        for (const mid of task.moduleIds) {
          expect(moduleIds.has(mid), `${task.id} → ${mid}`).toBe(true);
        }
        continue;
      }
      defining.push(...(task.subtasks ?? []).map((s) => s.id));
    }
    expect(new Set(defining).size).toBe(defining.length);
  });

  it("las clases de pieza CAD están referenciadas correctamente por las anclas de drone", () => {
    const classIds = new Set(CAD_PIECE_CLASSES.map((c) => c.id));
    for (const anchor of DRONE_ANCHORS) {
      for (const group of anchor.pieces) {
        expect(classIds.has(group.pieceClassId), anchor.label).toBe(true);
        expect(group.quantity).toBeGreaterThan(0);
      }
    }
  });
});

describe("motor de estimación", () => {
  it("estimateSubtask aplica la rate card con redondeo a múltiplos de 5", () => {
    const a100 = TASKS.find((t) => t.id === "A1")!.subtasks!.find((s) => s.id === "A1.0")!;
    const est = estimateSubtask(a100, "S")!;
    expect(est.hours).toEqual({ min: 1, max: 2 });
    // TL 32-48 USD/h: min floor5(32)=30, max ceil5(96)=100
    expect(est.costUsd).toEqual({ minUsd: 30, maxUsd: 100 });
  });

  it("devuelve null cuando el tier no aplica (rigging sin tier S)", () => {
    const bm7 = getTaskById("B-PIPELINE").subtasks!.find((s) => s.id === "BM7")!;
    expect(estimateSubtask(bm7, "S")).toBeNull();
    expect(estimateSubtask(bm7, "M")).not.toBeNull();
  });

  it("B1@S compuesto por módulos coincide con la suma manual de sus líneas", () => {
    const b1s = estimateTaskAtTier("B1", "S")!;
    expect(b1s.hours).toEqual({ min: 5.5, max: 17 });
    expect(b1s.costUsd).toEqual({ minUsd: 130, maxUsd: 710 });
  });

  it("B3/B4 no tienen tier S (requieren rig/anim) y el motor lo refleja", () => {
    expect(estimateTaskAtTier("B3", "S")).toBeNull();
    expect(estimateTaskAtTier("B4", "S")).toBeNull();
    expect(estimateTaskAtTier("B3", "M")).not.toBeNull();
  });

  it("conversión CAD drone-S = base B7@S + 7 piezas primitivas (ancla del slider)", () => {
    const base = estimateTaskAtTier("B7", "S")!;
    const est = estimateCadConversion(base, DRONE_ANCHORS[0].pieces);
    expect(est.hours).toEqual({ min: 4.7, max: 13.75 });
    expect(est.costUsd).toEqual({ minUsd: 95, maxUsd: 620 });
  });

  it("los descuentos por volumen reducen el excedente por pieza en cantidades grandes", () => {
    const base = estimateTaskAtTier("B7", "S")!;
    const few = estimateCadConversion(base, [{ pieceClassId: "primitiva", quantity: 20 }]);
    const many = estimateCadConversion(base, [{ pieceClassId: "primitiva", quantity: 120 }]);
    const surplusFew = few.hours.max - base.hours.max;
    const surplusManyPerPiece = (many.hours.max - base.hours.max) / 120;
    expect(surplusManyPerPiece).toBeLessThan(surplusFew / 20);
  });

  it("PK-01 publicado = raw x0.95 en extremos con redondeo a múltiplos de 5 en costo", () => {
    const pkg = PACKAGES.find((p) => p.id === "PK-01")!;
    const est = estimatePackage(pkg);
    expect(est.published.costUsd).toEqual({ minUsd: 435, maxUsd: 1520 });
    expect(est.published.hours.min).toBeCloseTo(17.1, 5);
    expect(est.published.hours.max).toBe(39);
  });

  it("todos los paquetes producen rangos publicados positivos y coherentes", () => {
    for (const pkg of PACKAGES) {
      const est = estimatePackage(pkg);
      expect(est.raw.hours.min, pkg.id).toBeGreaterThan(0);
      expect(est.published.costUsd.minUsd, pkg.id).toBeLessThan(est.published.costUsd.maxUsd);
      expect(est.published.hours.min, pkg.id).toBeLessThanOrEqual(est.published.hours.max);
      // bundle discount aplicado: extremos publicados <= extremos raw
      expect(est.published.costUsd.maxUsd, pkg.id).toBeLessThanOrEqual(est.raw.costUsd.maxUsd);
    }
  });
});

describe("reporte de sincronización doc <-> motor (log)", () => {
  it("imprime totales por tarea/tier y paquetes para calzar CATALOGO_SERVICIOS.md", () => {
    const lines: string[] = [];
    const fmt = (e: Estimate | null) => (e ? `${e.hours.min}-${e.hours.max}h | ${e.costUsd.minUsd}-${e.costUsd.maxUsd}usd` : "-");
    for (const task of TASKS) {
      const subs = getTaskSubtasks(task);
      if (!task.moduleIds && !task.subtasks) continue;
      if (["B-PIPELINE"].includes(task.id)) continue;
      for (const tier of TIERS) {
        const est = estimateTaskAtTier(task, tier);
        if (est) lines.push(`${task.id}@${tier}: ${fmt(est)}`);
      }
    }
    for (const anchor of DRONE_ANCHORS) {
      const base = estimateTaskAtTier("B7", anchor.tier)!;
      lines.push(`drone[${anchor.label}] ${anchor.tier}: ${fmt(estimateCadConversion(base, anchor.pieces))}`);
    }
    for (const pkg of PACKAGES) {
      const est = estimatePackage(pkg);
      lines.push(`${pkg.id} ${pkg.name}: raw ${fmt(est.raw)} | pub ${fmt({ ...est.published })}`);
    }
    for (const block of RETAINER_BLOCKS) {
      lines.push(`retainer ${block.hours}h (-${block.discountPct}%): ver packages.ts`);
    }
    console.log(`SERVICES_REPORT\n${lines.join("\n")}`);
    expect(lines.length).toBeGreaterThan(30);
  });
});
