// src/components/fitness/LibrarySkills.tsx
import React from 'react';
import SkillsHub from './skills/SkillsHub';

export default function LibrarySkills() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
      <SkillsHub />
    </div>
  );
}
