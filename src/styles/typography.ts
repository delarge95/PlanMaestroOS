// src/styles/typography.ts - 5-Role Typography System per Clinical Design 02
export const typo = {
  display: {
    fontSize: 'var(--font-size-display)',
    fontWeight: 700,
    lineHeight: 1.3,
    fontFamily: 'var(--font-family-system)',
  },
  title: {
    fontSize: 'var(--font-size-title)',
    fontWeight: 650,
    lineHeight: 1.35,
    fontFamily: 'var(--font-family-system)',
  },
  body: {
    fontSize: 'var(--font-size-body)',
    fontWeight: 400,
    lineHeight: 1.5,
    fontFamily: 'var(--font-family-system)',
  },
  label: {
    fontSize: 'var(--font-size-label)',
    fontWeight: 550,
    lineHeight: 1.4,
    fontFamily: 'var(--font-family-system)',
  },
  meta: {
    fontSize: 'var(--font-size-meta)',
    fontWeight: 450,
    lineHeight: 1.3,
    fontFamily: 'var(--font-family-system)',
  },
  micro: {
    fontSize: 'var(--font-size-meta)',
    fontWeight: 600,
    lineHeight: 1.2,
    fontFamily: 'var(--font-family-system)',
    letterSpacing: '0.04em',
  },
} as const;
