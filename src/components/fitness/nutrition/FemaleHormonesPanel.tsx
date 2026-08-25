// src/components/fitness/nutrition/FemaleHormonesPanel.tsx — Ajustes opcionales por perfil hormonal femenino (AG-NUTRI ciclo 2)
import React from 'react';
import { Venus } from 'lucide-react';
import { useNutritionStore } from './nutritionStore';
import { proteinTarget } from '../../../data/fitness/nutrition/calculator';
import {
  FEMALE_DISCLAIMER,
  FEMALE_PROFILES,
  femaleNotesFor,
  type FemaleProfile,
} from '../../../data/fitness/nutrition/femalePhysiology';
import StatusBadge from '../../ui/StatusBadge';

const inputStyle: React.CSSProperties = {
  background: 'var(--surface-elevated, transparent)',
  border: '1px solid var(--color-border-subtle)',
  borderRadius: 'var(--radius-sm)',
  padding: '6px 8px',
  color: 'var(--text-primary)',
  fontSize: 'var(--font-size-meta)',
};

export default function FemaleHormonesPanel() {
  const femaleProfile = useNutritionStore((s) => s.femaleProfile);
  const setInputs = useNutritionStore((s) => s.setInputs);
  const weightKg = useNutritionStore((s) => s.weightKg);
  const goal = useNutritionStore((s) => s.goal);

  const notes = femaleNotesFor(femaleProfile, {
    weightKg,
    currentProteinMidGPerKg:
      femaleProfile === 'perimenopausia' || femaleProfile === 'menopausia'
        ? (() => {
            const values = proteinTarget(weightKg, goal);
            return values.min && weightKg ? values.min / weightKg : undefined;
          })()
        : undefined,
  });

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
      <label style={{ display: 'flex', gap: 'var(--space-2)', alignItems: 'center', flexWrap: 'wrap' }}>
        <span style={{ fontSize: 'var(--font-size-meta)', color: 'var(--text-secondary)' }}>Perfil (opcional, auto-registrado):</span>
        <select
          value={femaleProfile}
          onChange={(e) => setInputs({ femaleProfile: e.target.value as FemaleProfile })}
          style={inputStyle}
          aria-label="Perfil hormonal femenino"
        >
          {FEMALE_PROFILES.map((p) => (
            <option key={p.value} value={p.value}>{p.label}</option>
          ))}
        </select>
      </label>

      {notes.map((note) => (
        <div key={note.title} style={{ border: '1px solid var(--color-border-subtle)', borderRadius: 'var(--radius-md)', padding: 'var(--space-md, 16px)', display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
          <StatusBadge label="Evidencia de efecto pequeño" variant="neutral" />
          <strong style={{ fontSize: 'var(--font-size-meta)', color: 'var(--text-primary)' }}>{note.title}</strong>
          {note.lines.map((line) => (
            <div key={line.text.slice(0, 40)}>
              <p style={{ margin: 0, fontSize: 'var(--font-size-meta)', color: 'var(--text-secondary)', lineHeight: 1.55 }}>{line.text}</p>
              {line.why.length > 0 && (
                <p style={{ margin: '2px 0 0', fontSize: 'var(--font-size-micro, 0.7rem)', color: 'var(--text-tertiary)' }}>
                  {line.why.map((w) => `${w.source} · ${w.locator} · ${w.ruleId}`).join(' | ')}
                </p>
              )}
            </div>
          ))}
        </div>
      ))}

      <p style={{ margin: 0, fontSize: 'var(--font-size-micro, 0.7rem)', color: 'var(--text-tertiary)', lineHeight: 1.5 }}>
        {FEMALE_DISCLAIMER}
      </p>
    </div>
  );
}
