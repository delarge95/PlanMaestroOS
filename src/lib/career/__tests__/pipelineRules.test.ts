import { describe, it, expect } from 'vitest';
import { validateSingleNextAction, type JobApplication } from '../../../data/career/applications';

describe('Career Pipeline Rules', () => {
  it('should enforce non-empty singleNextAction rule per application', () => {
    const validApp: JobApplication = {
      id: 'app-1',
      companyName: 'Epic Games',
      roleTitle: 'Technical Artist',
      stage: 'Entrevista',
      singleNextAction: 'Confirmar hora de entrevista',
      followUpDateIso: '2026-08-12',
      updatedAtIso: '2026-08-10'
    };

    expect(validateSingleNextAction(validApp)).toBe(true);

    const invalidApp = { ...validApp, singleNextAction: '' };
    expect(validateSingleNextAction(invalidApp)).toBe(false);
  });
});
