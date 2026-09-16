// src/styles/typography.ts - Escala tipográfica canon (monocromo, sistema)
// 6 niveles fijos: eyebrow → meta → body → step → section → display.
// Referencia unicamente los tokens canon de src/styles/tokens.css.
export const typo = {
  display: {
    fontSize: 'var(--fs-display)',
    fontWeight: 700,
    lineHeight: 1.15,
    fontFamily: 'var(--font-family-system)',
    letterSpacing: '-0.02em',
  },
  title: {
    fontSize: 'var(--fs-section)',
    fontWeight: 650,
    lineHeight: 1.3,
    fontFamily: 'var(--font-family-system)',
    // [tit-tracking]: el tracking negativo se reserva para display (36px+);
    // a 20px el título pierde aire sin ganancia visual.
  },
  body: {
    fontSize: 'var(--fs-body)',
    fontWeight: 400,
    lineHeight: 1.5,
    fontFamily: 'var(--font-family-system)',
  },
  label: {
    fontSize: 'var(--fs-meta)',
    fontWeight: 550,
    lineHeight: 1.4,
    fontFamily: 'var(--font-family-system)',
  },
  meta: {
    fontSize: 'var(--fs-eyebrow)',
    fontWeight: 450,
    lineHeight: 1.3,
    fontFamily: 'var(--font-family-system)',
  },
  micro: {
    fontSize: 'var(--fs-eyebrow)',
    fontWeight: 600,
    lineHeight: 1.2,
    fontFamily: 'var(--font-family-system)',
    letterSpacing: '0.04em',
  },
} as const;
