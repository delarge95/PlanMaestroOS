import { planFromTreeAnswers } from '../src/data/services/treeToQuote';
import { derivarTier } from '../src/data/services/serviceVariables';
import { computeQuote } from '../src/data/services/formula';
import { WEB3D_BRANCHES } from '../src/data/services/decisionTree';

console.log('subbranches web-3d:', Object.keys(WEB3D_BRANCHES).join(' | '));

function cita(a: Record<string, any>, tag: string) {
  const plan = planFromTreeAnswers('web-3d', 'ver-modelo', a);
  if (!plan || plan.picks.length === 0) { console.log(`[${tag}] SIN PICKS`); return; }
  const lineas = plan.picks.map((p0: any) => {
    const t = derivarTier(p0.serviceId, p0.vals);
    const q = computeQuote(p0.serviceId, t, 'COP', {});
    return `${p0.serviceId}/${t}: ${q ? q.totalMin + '-' + q.totalMax : 'null'}`;
  });
  console.log(`[${tag}] ${lineas.join(' | ')}`);
}

const base = { 'modelo-existente': 'no-crear' };
cita({ ...base }, 'crear defaults');
cita({ ...base, 'nivel-detalle': 5 }, 'crear nivel 5');
cita({ ...base, 'nivel-detalle': 5, 'cantidad-piezas': 50 }, 'crear nivel 5 + 50 piezas');
cita({ ...base, 'nivel-detalle': 5, 'cantidad-piezas': 50, superficie: 5, 'materiales-acabado': 'detallado' }, 'crear TODO alto');
