import type { ServicioCotizable } from './tipos';

export const CATALOGO_F1: ServicioCotizable = {
  id: 'F1',
  familia: 'F',
  nombre: 'CAD → WebGL ready',
  unidad: 'por ensamblaje',
  niveles: [
    { horasMin: 5, horasMax: 12, costoMin: 130, costoMax: 360, entregaDias: [1, 2] },
    { horasMin: 12, horasMax: 35, costoMin: 330, costoMax: 1230, entregaDias: [3, 6] },
    { horasMin: 35, horasMax: 92, costoMin: 1200, costoMax: 4200, entregaDias: [14, 21] },
    { horasMin: 92, horasMax: 250, costoMin: 4100, costoMax: 13800, entregaDias: [28, 70] },
  ],
  driverPrincipal: {
    nombre: 'número de piezas del ensamblaje',
    umbrales: ['≤15 piezas simples/prismáticas', '15–60 piezas mixtas', '60–150 piezas o freeform moderado', '150+ piezas, freeform masivo, cableado/tuberías'],
  },
  confidenceDefault: 'explicit',
  addOns: [
    { id: 'B6-EXPLOSIONADA', refServicio: 'B6', delta: '+$150–390 (N1) … +$3100–9100 (N4)' },
    { id: 'USDZ-AR', delta: '+10%' },
    { id: 'REPORTE-PERF-FIRMADO', delta: '+5%' },
    { id: 'LOTE-MULTI', delta: '−15–25% por modelo adicional' },
  ],
  modificadores: ['01§5·fuente-editable', '01§5·urgencia', '01§6.2·SOW'],
};
