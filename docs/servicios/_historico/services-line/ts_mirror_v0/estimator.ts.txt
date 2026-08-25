// src/data/services/estimator.ts — AG-SERV
// Motor de estimación determinista. Toda cifra de UI debe salir de aquí (trazabilidad §0 del catálogo).

import { CAD_PIECE_CLASSES, CAD_VOLUME_DISCOUNTS, TASKS } from "./serviceCatalog";
import { getRateClass } from "./rateCard";
import type {
  CadPieceCount,
  ComplexityTier,
  Estimate,
  HourRange,
  ServicePackage,
  ServiceTask,
  Subtask,
  PackageEstimate,
} from "./types";

export function floorTo5(n: number): number {
  return Math.floor(n / 5) * 5;
}

export function ceilTo5(n: number): number {
  return Math.ceil(n / 5) * 5;
}

export function estimateSubtask(subtask: Subtask, tier: ComplexityTier): Estimate | null {
  const hours = subtask.hoursByTier[tier];
  if (!hours) return null;
  const rate = getRateClass(subtask.rateClass);
  return {
    hours: { ...hours },
    costUsd: {
      minUsd: floorTo5(hours.min * rate.minUsdPerHour),
      maxUsd: ceilTo5(hours.max * rate.maxUsdPerHour),
    },
  };
}

export function getTaskById(taskId: string): ServiceTask {
  const task = TASKS.find((t) => t.id === taskId);
  if (!task) throw new Error(`Tarea desconocida: ${taskId}`);
  return task;
}

/** Resuelve las subtareas de una tarea, expandiendo módulos si es compuesta (B1-B4). */
export function getTaskSubtasks(task: ServiceTask): readonly Subtask[] {
  if (task.moduleIds) {
    const pipeline = getTaskById("B-PIPELINE");
    const byId = new Map((pipeline.subtasks ?? []).map((s) => [s.id, s]));
    return task.moduleIds.map((mid) => {
      const mod = byId.get(mid);
      if (!mod) throw new Error(`Módulo desconocido: ${mid}`);
      return mod;
    });
  }
  return task.subtasks ?? [];
}

function addEstimates(list: readonly Estimate[]): Estimate {
  return {
    hours: {
      min: list.reduce((acc, e) => acc + e.hours.min, 0),
      max: list.reduce((acc, e) => acc + e.hours.max, 0),
    },
    costUsd: {
      minUsd: list.reduce((acc, e) => acc + e.costUsd.minUsd, 0),
      maxUsd: list.reduce((acc, e) => acc + e.costUsd.maxUsd, 0),
    },
  };
}

/**
 * Estima una tarea con el MISMO tier. Regla de validez: TODAS las subtareas no-opcionales
 * deben aplicar en ese tier; las opcionales se suman solo si tienen el tier. null si no es válido.
 */
export function estimateTaskAtTier(taskOrId: ServiceTask | string, tier: ComplexityTier): Estimate | null {
  const task = typeof taskOrId === "string" ? getTaskById(taskOrId) : taskOrId;
  const subs = getTaskSubtasks(task);
  let estimates: Estimate[] = [];
  for (const s of subs) {
    const est = estimateSubtask(s, tier);
    if (est) {
      estimates.push(est);
    } else if (!s.optional) {
      return null;
    }
  }
  if (estimates.length === 0) return null;
  return addEstimates(estimates);
}

export interface TaskEstimateLine {
  subtask: Subtask;
  estimate: Estimate;
}

/** Estimación con tiers mixtos por subtarea; devuelve el desglose línea a línea + total. */
export function estimateTaskWithTiers(
  taskOrId: ServiceTask | string,
  tierBySubtaskId: ReadonlyMap<string, ComplexityTier>,
): { lines: TaskEstimateLine[]; total: Estimate } {
  const task = typeof taskOrId === "string" ? getTaskById(taskOrId) : taskOrId;
  const lines: TaskEstimateLine[] = [];
  for (const subtask of getTaskSubtasks(task)) {
    const tier = tierBySubtaskId.get(subtask.id);
    if (!tier) continue;
    const estimate = estimateSubtask(subtask, tier);
    if (estimate) lines.push({ subtask, estimate });
  }
  return { lines, total: addEstimates(lines.map((l) => l.estimate)) };
}

/** Multiplicador por volumen para piezas CAD (descuentos marginales por umbral). */
function cadPieceMultiplier(pieceIndex1Based: number): number {
  let multiplier = 1;
  for (const d of CAD_VOLUME_DISCOUNTS) {
    if (pieceIndex1Based >= d.fromPiece) multiplier *= 1 - d.discountPct / 100;
  }
  return multiplier;
}

/**
 * B7 + excedente por pieza: base (tarea B7 estimada) + horas de pieza con descuentos por volumen.
 * Las horas de pieza se valoran a RT y se agregan al rango base.
 */
export function estimateCadConversion(base: Estimate, pieces: readonly CadPieceCount[]): Estimate {
  let surplusHours: HourRange = { min: 0, max: 0 };
  let runningIndex = 0;
  for (const group of pieces) {
    const pieceClass = CAD_PIECE_CLASSES.find((c) => c.id === group.pieceClassId);
    if (!pieceClass) throw new Error(`Clase de pieza desconocida: ${group.pieceClassId}`);
    for (let i = 0; i < group.quantity; i++) {
      runningIndex += 1;
      const m = cadPieceMultiplier(runningIndex);
      surplusHours.min += pieceClass.hoursPerPiece.min * m;
      surplusHours.max += pieceClass.hoursPerPiece.max * m;
    }
  }
  const rate = getRateClass("RT");
  return {
    hours: { min: base.hours.min + surplusHours.min, max: base.hours.max + surplusHours.max },
    costUsd: {
      minUsd: floorTo5(base.costUsd.minUsd + surplusHours.min * rate.minUsdPerHour),
      maxUsd: ceilTo5(base.costUsd.maxUsd + surplusHours.max * rate.maxUsdPerHour),
    },
  };
}

/**
 * Paquete: suma de composiciones à-la-carte (raw). Publicado = extremos ×(1 - bundleDiscount/2)
 * (bundle -10% sobre punto medio ⇒ -5% en cada extremo), redondeado a múltiplos de 5.
 */
export function estimatePackage(pkg: ServicePackage): PackageEstimate {
  const entries: Estimate[] = [];
  for (const entry of pkg.composition) {
    const single = estimateTaskAtTier(getTaskById(entry.taskId), entry.tier);
    if (!single) throw new Error(`Composición inválida: ${entry.taskId}@${entry.tier}`);
    const count = entry.count ?? 1;
    const discount = 1 - (entry.packDiscountPct ?? 0) / 100;
    for (let i = 0; i < count; i++) {
      entries.push({
        hours: {
          min: single.hours.min * discount,
          max: single.hours.max * discount,
        },
        costUsd: {
          minUsd: single.costUsd.minUsd * discount,
          maxUsd: single.costUsd.maxUsd * discount,
        },
      });
    }
  }
  const raw = addEstimates(entries);
  const factor = 1 - pkg.bundleDiscountPct / 2 / 100;
  return {
    raw,
    published: {
      hours: {
        min: Math.round(raw.hours.min * factor * 10) / 10,
        max: Math.ceil(raw.hours.max * factor),
      },
      costUsd: {
        minUsd: floorTo5(raw.costUsd.minUsd * factor),
        maxUsd: ceilTo5(raw.costUsd.maxUsd * factor),
      },
    },
  };
}
