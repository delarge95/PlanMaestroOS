import React from 'react';
import { calisthenicsSkillTree } from '../../data/fitness/programs/calisthenicsPaths';
import SkillProgressionPath from './SkillProgressionPath';

export interface CalisthenicsLearningHubProps {
  onOpenExerciseModal?: (exerciseId: string) => void;
}

export function CalisthenicsLearningHub({
  onOpenExerciseModal
}: CalisthenicsLearningHubProps) {
  const pullSteps = calisthenicsSkillTree.filter((s) => s.category === 'pull');
  const pushSteps = calisthenicsSkillTree.filter((s) => s.category === 'push');
  const coreSteps = calisthenicsSkillTree.filter((s) => s.category === 'core');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-lg)' }}>
      <div style={{ background: 'var(--surface)', border: '1px solid var(--color-border-subtle)', borderRadius: 'var(--radius-lg)', padding: 'var(--space-md)' }}>
        <h2 style={{ fontSize: '1.2rem', fontWeight: 700, margin: '0 0 var(--space-2)', color: 'var(--text)' }}>
          Calistenia & Anillas (Steven Low - Overcoming Gravity)
        </h2>
        <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', margin: 0 }}>
          Progresiones de fuerza con peso corporal. Avanza de nivel únicamente cuando cumplas los criterios estrictos de tolerancia y volumen sin molestia articular.
        </p>
      </div>

      <SkillProgressionPath
        title="Tracción & Escápula (Dominadas & Remos)"
        steps={pullSteps}
        onOpenExerciseModal={onOpenExerciseModal}
      />

      <SkillProgressionPath
        title="Empuje & Hombro (Fondos & Flexiones)"
        steps={pushSteps}
        onOpenExerciseModal={onOpenExerciseModal}
      />

      <SkillProgressionPath
        title="Core & Estabilidad (Hollow Body & Leg Raises)"
        steps={coreSteps}
        onOpenExerciseModal={onOpenExerciseModal}
      />
    </div>
  );
}

export default CalisthenicsLearningHub;
