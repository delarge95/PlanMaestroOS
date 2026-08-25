import type { ResultadoValidacion, ServicioCotizable } from '../data/servicios/tipos';

export const BANDAS_OPERATIVAS = [
  { nivel: 'N1', min: 25, max: 30 },
  { nivel: 'N2', min: 28, max: 35 },
  { nivel: 'N3', min: 35, max: 45 },
  { nivel: 'N4', min: 45, max: 55 },
] as const;

export type NivelIdx = 0 | 1 | 2 | 3;

function pasoRedondeoMin(valor: number): number {
  if (valor < 500) return 10;
  if (valor < 2000) return 50;
  return 100;
}

function pasoRedondeoMax(valor: number): number {
  if (valor < 2000) return 10;
  return 100;
}

export function redondearMin(valor: number): number {
  const paso = pasoRedondeoMin(valor);
  return Math.floor(valor / paso) * paso;
}

export function redondearMax(valor: number): number {
  const paso = pasoRedondeoMax(valor);
  return Math.ceil(valor / paso) * paso;
}

export function calcularCostos(
  horasMin: number,
  horasMax: number,
  nivelIdx: NivelIdx,
): { costoMin: number; costoMax: number } {
  const banda = BANDAS_OPERATIVAS[nivelIdx];
  return {
    costoMin: redondearMin(horasMin * banda.min),
    costoMax: redondearMax(horasMax * banda.max),
  };
}

const TOLERANCIA_REDONDEO = 10;

export function validarServicio(s: ServicioCotizable): ResultadoValidacion {
  const errores: string[] = [];
  const avisos: string[] = [];

  if (s.niveles.length !== 4) {
    errores.push(`${s.id}: se esperaban 4 niveles, hay ${s.niveles.length}`);
    return { ok: false, errores, avisos };
  }

  s.niveles.forEach((n, i) => {
    if (n.horasMin >= n.horasMax) errores.push(`${s.id}·N${i + 1}: horasMin (${n.horasMin}) debe ser < horasMax (${n.horasMax})`);
    if (n.costoMin > n.costoMax) errores.push(`${s.id}·N${i + 1}: costoMin (${n.costoMin}) > costoMax (${n.costoMax})`);
    if (n.entregaDias[0] > n.entregaDias[1]) errores.push(`${s.id}·N${i + 1}: entregaDias invertido`);

    const esperado = calcularCostos(n.horasMin, n.horasMax, i as NivelIdx);
    const deltaMin = Math.abs(esperado.costoMin - n.costoMin);
    const deltaMax = Math.abs(esperado.costoMax - n.costoMax);
    if (deltaMin > TOLERANCIA_REDONDEO) {
      errores.push(`${s.id}·N${i + 1}: costoMin publicado ${n.costoMin} no reconstruible (esperado ~${esperado.costoMin}, banda operativa)`);
    } else if (deltaMin > 0) {
      avisos.push(`${s.id}·N${i + 1}: costoMin publicado ${n.costoMin} vs calculado ${esperado.costoMin} (dentro de tolerancia ±${TOLERANCIA_REDONDEO})`);
    }
    if (deltaMax > TOLERANCIA_REDONDEO) {
      errores.push(`${s.id}·N${i + 1}: costoMax publicado ${n.costoMax} no reconstruible (esperado ~${esperado.costoMax}, banda operativa)`);
    } else if (deltaMax > 0) {
      avisos.push(`${s.id}·N${i + 1}: costoMax publicado ${n.costoMax} vs calculado ${esperado.costoMax} (dentro de tolerancia ±${TOLERANCIA_REDONDEO})`);
    }

    if (i > 0) {
      const prev = s.niveles[i - 1];
      if (prev.costoMax > n.costoMin) {
        avisos.push(`${s.id}: solape entre N${i} (max ${prev.costoMax}) y N${i + 1} (min ${n.costoMin}) — documentar en ficha si es intencional`);
      }
      if (prev.horasMax > n.horasMin) {
        avisos.push(`${s.id}: solape de horas entre N${i} (${prev.horasMax}h) y N${i + 1} (${n.horasMin}h)`);
      }
    }
  });

  if (!s.driverPrincipal || s.driverPrincipal.umbrales.length !== 4) {
    errores.push(`${s.id}: driverPrincipal.umbrales debe tener 4 entradas (una por nivel)`);
  }

  return { ok: errores.length === 0, errores, avisos };
}
