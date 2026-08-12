// src/components/fitness/LibrarySkills.tsx
import React, { useState } from 'react';
import { CalisthenicsProgressions } from './skills/CalisthenicsProgressions';
import ErrorBoundary from '../ErrorBoundary';

export default function LibrarySkills() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <ErrorBoundary>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
        <CalisthenicsProgressions
          onSearchTermChange={setSearchTerm}
        />
      </div>
    </ErrorBoundary>
  );
}
