import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { containsClinicalData, sanitizeNotesForPublicProjection, toLocalField, toNotionField } from './fieldMap.js';
import { MIGRATION_MAP, migrationPlan } from './migrationMap.js';
import { buildBackup, restoreBackup, serializeBackup } from './backupService.js';

describe('sync', () => {
  it('fieldMap traduce ES<->EN y bloquea clínica', () => {
    assert.equal(toNotionField('Titulo'), 'Title');
    assert.equal(toNotionField('ProximaAccion'), 'NextAction');
    assert.equal(toLocalField('Status'), 'Estado');
    assert.equal(toLocalField('Desconocido'), 'Desconocido');
    assert.equal(containsClinicalData('nota de rumiacion diaria'), true);
    assert.equal(containsClinicalData('press banca 60kg'), false);
    assert.equal(sanitizeNotesForPublicProjection('ansiedad_social_raw: 8').ok, false);
    assert.equal(sanitizeNotesForPublicProjection('llamar al reclutador').ok, true);
  });

  it('migrationMap cubre 14 keys y retira la huérfana', () => {
    assert.equal(Object.keys(MIGRATION_MAP).length, 14);
    const plan = migrationPlan(['career-state-v1', 'plan_maestro_career_goals', 'otra']);
    assert.deepEqual(plan.keys, ['career-state-v1']);
    assert.deepEqual(plan.retired, ['plan_maestro_career_goals']);
  });

  it('backup: build -> serialize -> restore roundtrip + versión', () => {
    const b = buildBackup({ fitness: { a: 1 } }, 'session-completed', '2026-09-04T00:00:00Z');
    assert.equal(b.version, 1);
    assert.ok(b.sizes.fitness > 0);
    const r = restoreBackup(serializeBackup(b), new Set(['fitness', 'career']));
    assert.equal(r.ok, true);
    assert.equal(restoreBackup('no-json').ok, false);
    assert.equal(restoreBackup(JSON.stringify({ version: 99, stores: {} })).ok, false);
  });
});
