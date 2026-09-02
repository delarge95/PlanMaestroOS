// Extrae los datos EXACTOS del motor de la web (solo lectura) → JSON
import { SERVICES } from 'file:///E:/Laboral/.worktrees/servicios/src/data/services/catalogCore.ts';
import { getRateCard } from 'file:///E:/Laboral/.worktrees/servicios/src/data/services/rateCard.ts';
import { SERVICE_VARIABLES } from 'file:///E:/Laboral/.worktrees/servicios/src/data/services/serviceVariables.ts';
import { writeFileSync } from 'node:fs';

const TIERS = ['XS', 'S', 'M', 'L', 'XL'] as const;

const cardCOP = getRateCard('COP');
const cardUSD = getRateCard('USD');

const services = SERVICES.map(svc => ({
  id: svc.id,
  nombre: svc.nameEs,
  familia: svc.family,
  entrega: svc.entregaDiasEs ? `${svc.entregaDiasEs[0]}-${svc.entregaDiasEs[1]}` : '',
  subtasks: svc.subtasks.filter(st => !st.optional).map(st => ({
    nombre: st.nameEs,
    clase: st.rateClass,
    horas: Object.fromEntries(TIERS.map(t => [t, [st.hours[t]?.min ?? 0, st.hours[t]?.max ?? 0]])),
  })),
}));

// tierMaps de todas las variables numéricas/select (para la hoja Cotizador Web)
const vars: any[] = [];
for (const [svcId, cfg] of Object.entries(SERVICE_VARIABLES)) {
  for (const v of cfg.variables) {
    vars.push({
      servicio: svcId,
      id: v.id,
      pregunta: v.preguntaEs,
      tipo: v.type,
      min: v.min ?? null,
      max: v.max ?? null,
      step: v.step ?? null,
      unidad: v.unidadEs ?? '',
      tierMap: v.tierMap ?? null,
      opciones: v.opciones?.map(o => ({ valor: o.valorEs, tier: o.tierHint ?? null })) ?? null,
    });
  }
}

const rates = {
  COP: cardCOP.rates, USD: cardUSD.rates,
  minProjectCOP: cardCOP.minProject, minProjectUSD: cardUSD.minProject,
};

writeFileSync('E:/Laboral/verificacion-cotizacion/datos.json', JSON.stringify({ services, vars, rates, TIERS }, null, 1));
console.log('servicios:', services.length, '| subtasks:', services.reduce((a, s) => a + s.subtasks.length, 0), '| vars:', vars.length);
