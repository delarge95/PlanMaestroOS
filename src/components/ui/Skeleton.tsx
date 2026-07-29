// src/components/ui/Skeleton.tsx
// AUDIT-08: Loading skeleton universal para evitar pantallas en blanco

interface SkeletonProps {
  width?: string;
  height?: string;
  borderRadius?: string;
}

export function Skeleton({ width = '100%', height = '20px', borderRadius = '8px' }: SkeletonProps) {
  return (
    <div style={{
      width,
      height,
      borderRadius,
      background: 'linear-gradient(90deg, var(--color-surface-raised) 25%, var(--color-surface-overlay) 50%, var(--color-surface-raised) 75%)',
      backgroundSize: '200% 100%',
      animation: 'shimmer 1.5s infinite',
    }} />
  );
}

export function SkeletonCard({ lines = 3 }: { lines?: number }) {
  return (
    <div style={{
      background: 'var(--color-surface-base)',
      border: '1px solid var(--color-border-subtle)',
      borderRadius: '18px',
      padding: 'var(--space-lg)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-sm)',
    }}>
      <Skeleton height="16px" width="60%" />
      {Array.from({ length: lines }).map((_, i) => (
        <Skeleton key={i} height="14px" width={i === lines - 1 ? '40%' : '100%'} />
      ))}
    </div>
  );
}

export default Skeleton;
