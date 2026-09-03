import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { expandQuery, hybridScore } from './synonyms.js';
import { validateChunks } from './chunkValidate.js';
import { findGiantJsonImports } from './largeJsonLoader.js';

describe('rag', () => {
  it('expandQuery añade sinónimos y deduce', () => {
    const q = expandQuery('dolor Hombro');
    assert.ok(q.includes('hombro') && q.includes('supraspinatus') && q.includes('dolor'));
  });

  it('hybridScore pondera título×5 cuerpo×2 tag×3', () => {
    const s = hybridScore('Supraspinatus Tendon', 'hombro duele', ['hombro'], ['supraspinatus', 'hombro']);
    assert.equal(s, 5 + 2 + 3);
  });

  it('validateChunks rechaza TODO-cita, >1200, prefijo y duplicados', () => {
    const { ok, errors } = validateChunks('grays-', [
      { id: 'grays-ok', sourceId: 's1', topic: 'muscle', tags: [], locator: { page: 10 }, summary: 'x' },
      { id: 'bad', sourceId: 'TODO-cita', topic: '', tags: [], locator: {}, summary: 'y'.repeat(1201) },
      { id: 'grays-ok', sourceId: 's1', topic: 'm', tags: [], locator: { page: 1 }, summary: 'z' },
    ]);
    assert.equal(ok, false);
    assert.ok(errors.some((e) => e.includes('TODO-cita')));
    assert.ok(errors.some((e) => e.includes('1200')));
    assert.ok(errors.some((e) => e.includes('prefijo')));
    assert.ok(errors.some((e) => e.includes('duplicado')));
  });

  it('findGiantJsonImports caza master_rag_dataset', () => {
    const hits = findGiantJsonImports([
      { path: 'a.ts', content: `import x from '../../../data/master_rag_dataset.json'`, jsonSizes: { 'master_rag_dataset.json': 1_330_000 } },
      { path: 'b.ts', content: `import x from './tiny.json'`, jsonSizes: { 'tiny.json': 1000 } },
    ]);
    assert.equal(hits.length, 1);
    assert.match(hits[0], /master_rag_dataset/);
  });
});
