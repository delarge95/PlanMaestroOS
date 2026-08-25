import React from 'react';
import ErrorBoundary from '../ErrorBoundary';
import ClinicalToday from './ClinicalToday';
import ClinicalExecutionHub from './ClinicalExecutionHub';
import ClinicalDisclaimerNote from './ClinicalDisclaimerNote';
import ClinicalUncompletedTaskProtocol from './ClinicalUncompletedTaskProtocol';

export interface ClinicalWorkspaceProps {
  currentPath?: string;
}

export default function ClinicalWorkspace({ currentPath = '/app/clinical' }: ClinicalWorkspaceProps) {
  return (
    <ErrorBoundary>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-lg, 24px)', width: '100%' }}>
        <ClinicalToday currentPath={currentPath} />
        <ClinicalDisclaimerNote />
        <ClinicalExecutionHub />
        <ClinicalUncompletedTaskProtocol />
      </div>
    </ErrorBoundary>
  );
}
