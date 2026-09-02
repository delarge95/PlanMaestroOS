// Matriz completa desde el MOTOR REAL: computeQuote COP para 28 servicios × 5 niveles
import { SERVICES } from 'file:///E:/Laboral/.worktrees/servicios/src/data/services/catalogCore.ts';
import { computeQuote } from 'file:///E:/Laboral/.worktrees/servicios/src/data/services/formula.ts';
const tiers = ['XS', 'S', 'M', 'L', 'XL'] as const;
const out: any[] = [];
for (const svc of SERVICES) {
  for (const t of tiers) {
    const q = computeQuote(svc.id, t, 'COP', {});
    out.push({ id: svc.id, tier: t, min: q?.totalMin ?? null, max: q?.totalMax ?? null, hmin: q?.hoursMin ?? null, hmax: q?.hoursMax ?? null });
  }
}
console.log(JSON.stringify(out));
