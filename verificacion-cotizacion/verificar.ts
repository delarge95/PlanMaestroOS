// Rangos según el MOTOR REAL de la web (computeQuote, COP sin descuentos)
import { computeQuote } from 'file:///E:/Laboral/.worktrees/servicios/src/data/services/formula.ts';
const ids = ['WEB-01', 'WEB-02', 'WEB-03', 'WEB-04', 'WEB-05', 'WEB-06', 'WEB-07', 'CAD-01', 'RTA-01', 'AI-01'];
const tiers = ['XS', 'S', 'M', 'L', 'XL'] as const;
for (const id of ids) {
  const out = tiers.map(t => {
    const q = computeQuote(id, t, 'COP', {});
    return q ? `${t}:${q.totalMin}-${q.totalMax}` : `${t}:null`;
  }).join('  ');
  console.log(id.padEnd(8), out);
}
