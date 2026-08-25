import React from 'react';

export default function ClinicalDisclaimerNote({ compact = false }: { compact?: boolean }) {
  return (
    <div
      style={{
        background: 'rgba(0,0,0,0.25)',
        border: '1px dashed rgba(255,255,255,0.18)',
        borderRadius: '10px',
        padding: compact ? '8px 12px' : '12px 16px',
        fontSize: '0.72rem',
        lineHeight: 1.5,
        color: 'var(--color-text-tertiary, var(--color-text-secondary))'
      }}
      role="note"
    >
      <strong style={{ color: 'var(--color-text-secondary)' }}>Aviso:</strong>{' '}
      Herramienta personal de auto-registro y organización conductual (TDAH / ansiedad social / CBT).
      No es un dispositivo médico, no diagnostica ni sustituye evaluación, tratamiento o terapia
      profesional. Ante malestar significativo o persistente, deriva a un profesional de salud
      mental habilitado.
    </div>
  );
}
