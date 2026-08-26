import type { ReactNode } from 'react';

interface Props {
  pieces: number;
}

const GROUPS: Array<{ hasta: number; label: string; nodes: ReactNode[] }> = [
  {
    hasta: 8,
    label: 'frame + motores + hélices',
    nodes: [
      <rect key="f" x="70" y="60" width="100" height="40" rx="10" />,
      <circle key="m1" cx="50" cy="55" r="12" />, <circle key="m2" cx="190" cy="55" r="12" />,
      <circle key="m3" cx="50" cy="105" r="12" />, <circle key="m4" cx="190" cy="105" r="12" />,
      <rect key="p1" x="28" y="52" width="44" height="6" rx="3" />, <rect key="p2" x="168" y="52" width="44" height="6" rx="3" />,
      <rect key="p3" x="28" y="102" width="44" height="6" rx="3" />, <rect key="p4" x="168" y="102" width="44" height="6" rx="3" />,
    ],
  },
  { hasta: 20, label: 'batería + canopy + cámara', nodes: [<rect key="b" x="95" y="85" width="50" height="18" rx="6" />, <path key="c" d="M110 60 h20 l-4 -14 h-12 z" />] },
  { hasta: 40, label: 'gimbal de 3 ejes', nodes: [<circle key="g1" cx="120" cy="118" r="9" />, <circle key="g2" cx="120" cy="132" r="6" />] },
  { hasta: 90, label: 'tren de aterrizaje + antenas', nodes: [<line key="lg1" x1="80" y1="100" x2="66" y2="130" />, <line key="lg2" x1="160" y1="100" x2="174" y2="130" />, <line key="an" x1="180" y1="60" x2="196" y2="34" />] },
  { hasta: 999, label: 'arneses + tornillería + sensores', nodes: [<path key="w" d="M78 70 q42 30 84 0" fill="none" />, <circle key="s1" cx="86" cy="92" r="3" />, <circle key="s2" cx="154" cy="92" r="3" />] },
];

export function DronePieces({ pieces }: Props) {
  const visibles = GROUPS.filter((g) => pieces >= g.hasta);
  const ultimo = visibles.length > 0 ? visibles[visibles.length - 1].label : '—';
  const aria = 'Drone con aproximadamente ' + pieces + ' piezas';
  return (
    <figure style={{ margin: '16px 0' }}>
      <svg viewBox="0 0 240 160" width="240" height="160" role="img" aria-label={aria}>
        {visibles.flatMap((g, gi) =>
          g.nodes.map((n, ni) => (
            <g key={gi + '-' + ni} fill="#5b5bd6" stroke="#5b5bd6" strokeWidth={2} style={{ opacity: 0.9 }}>
              {n}
            </g>
          )),
        )}
      </svg>
      <figcaption style={{ fontSize: 13, opacity: 0.7 }}>
        ≈ {pieces} piezas · {ultimo}
      </figcaption>
    </figure>
  );
}
