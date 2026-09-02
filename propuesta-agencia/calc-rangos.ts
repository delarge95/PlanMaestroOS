// Cálculo de rangos COP por servicio/tier — SOLO LECTURA del catálogo
import { SERVICES } from 'file:///E:/Laboral/.worktrees/servicios/src/data/services/catalogCore.ts';
import { getRateCard } from 'file:///E:/Laboral/.worktrees/servicios/src/data/services/rateCard.ts';
import { writeFileSync } from 'node:fs';

const IDS = ['WEB-01', 'WEB-02', 'WEB-03', 'WEB-04', 'WEB-05', 'WEB-06', 'WEB-07', 'CAD-01'];
const TIERS = ['S', 'M', 'L', 'XL'];
const card = getRateCard('COP');
const step = card.roundStep(1000); // 1000 COP

const fmt = (v) => Math.round(v / 10000) * 10000; // redondeo a 10k para presentación

const out = IDS.map((id) => {
  const svc = SERVICES.find((s) => s.id === id);
  const tiers = {};
  for (const t of TIERS) {
    let hMin = 0, hMax = 0, pMin = 0, pMax = 0;
    for (const st of svc.subtasks) {
      if (st.optional) continue;
      const r = st.hours[t];
      if (!r) continue;
      const rate = card.rates[st.rateClass];
      hMin += r.min; hMax += r.max;
      pMin += r.min * rate.min; pMax += r.max * rate.max;
    }
    if (hMin === 0) continue;
    tiers[t] = {
      horas: `${hMin}–${hMax} h`,
      copMin: fmt(Math.max(pMin, card.minProject)),
      copMax: fmt(pMax),
    };
  }
  return {
    id,
    nombre: svc.nameEs,
    desc: svc.descripcionEs,
    entrega: svc.entregaDiasEs ? `${svc.entregaDiasEs[0]}–${svc.entregaDiasEs[1]} días hábiles` : 'a definir',
    tiers,
  };
});
writeFileSync('E:/Laboral/propuesta-agencia/rangos.json', JSON.stringify(out, null, 2));
console.log(JSON.stringify(out, null, 1).slice(0, 3000));
