// src/styles/typography.ts - AUDIT-02: Standard 4-Level Typography System
export const typo = {
  display: {
    fontSize: 'var(--font-size-display)',
    fontWeight: 700,
    lineHeight: 1.3,
    fontFamily: 'var(--font-family-system)',
  },
  body: {
    fontSize: 'var(--font-size-body)',
    fontWeight: 400,
    lineHeight: 1.55,
    fontFamily: 'var(--font-family-system)',
  },
  label: {
    fontSize: 'var(--font-size-label)',
    fontWeight: 500,
    lineHeight: 1.4,
    fontFamily: 'var(--font-family-system)',
  },
  micro: {
    fontSize: 'var(--font-size-micro)',
    fontWeight: 600,
    lineHeight: 1.2,
    fontFamily: 'var(--font-family-system)',
    textTransform: 'uppercase' as const,
    letterSpacing: '0.04em',
  },
} as const;
