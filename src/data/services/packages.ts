import type { LevelId } from './types';

export interface ComponentePaquete {
  serviceId: string;
  nivel: LevelId;
  cantidad?: number;
}

export interface PackageDef {
  id: string;
  nombreEs: string;
  descripcionEs: string;
  clienteObjetivoEs: string;
  componentes: ComponentePaquete[];
  batchPctAplicable?: boolean;
}

export const PACKAGES: PackageDef[] = [
  {
    id: 'PK-CAD-WEBGL',
    nombreEs: 'Conversión CAD corporativa → WebGL',
    descripcionEs:
      'Conversión del catálogo de modelos CAD de la empresa a assets web optimizados + visor interactivo para explorarlos. Incluye discovery con crédito del 50% al contratar.',
    clienteObjetivoEs: 'Empresas ingenieriles/industriales (directo o vía agencia de diseño)',
    componentes: [
      { serviceId: 'g1-discovery-scoping', nivel: 'N2' },
      { serviceId: 'f1-cad-webgl-ready', nivel: 'N2', cantidad: 5 },
      { serviceId: 'c2-visor-custom', nivel: 'N2' },
    ],
    batchPctAplicable: true,
  },
  {
    id: 'PK-CAD-TWIN',
    nombreEs: 'Gemelo visual industrial (piloto)',
    descripcionEs:
      'Asset gemelo desde CAD + capa de datos vivos (mock→real) + dashboard de estado. Puerta de entrada honesta a digital twin.',
    clienteObjetivoEs: 'Industria manufacturera / energética',
    componentes: [
      { serviceId: 'f1-cad-webgl-ready', nivel: 'N3' },
      { serviceId: 'c3-webapp-3d', nivel: 'N2' },
    ],
  },
  {
    id: 'PK-LANZAMIENTO',
    nombreEs: 'Lanzamiento de producto (film + web)',
    descripcionEs:
      'Film de producto renderizado + toma hero sobre footage real + asset RT interactivo embebido en landing.',
    clienteObjetivoEs: 'Agencias de diseño con clientes consumer/industrial',
    componentes: [
      { serviceId: 'a2-render-animacion', nivel: 'N2' },
      { serviceId: 'd1-compositing-foto', nivel: 'N2' },
      { serviceId: 'b1-asset-rt-estatico', nivel: 'N2' },
      { serviceId: 'c1-visor-embebido', nivel: 'N2' },
    ],
  },
  {
    id: 'PK-MICRO-LOOP',
    nombreEs: 'Pack de micro-loops de producto',
    descripcionEs:
      'Loops cortos (2–3 s) para e-commerce y redes, producidos en lote desde el mismo setup. Ideal tier XS/N1.',
    clienteObjetivoEs: 'E-commerce / marketing digital',
    componentes: [{ serviceId: 'a2-render-animacion', nivel: 'XS', cantidad: 4 }],
    batchPctAplicable: true,
  },
];
