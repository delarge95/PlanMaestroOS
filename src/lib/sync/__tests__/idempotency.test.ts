import { describe, it, expect } from 'vitest';

export function deduplicateByExternalId<T extends { externalId: string }>(items: T[]): T[] {
  const map = new Map<string, T>();
  for (const item of items) {
    map.set(item.externalId, item);
  }
  return Array.from(map.values());
}

describe('Sync Idempotency', () => {
  it('should deduplicate entities by externalId to ensure sync idempotency', () => {
    const rawItems = [
      { externalId: 'ext-1', title: 'Task 1 v1' },
      { externalId: 'ext-1', title: 'Task 1 v2' },
      { externalId: 'ext-2', title: 'Task 2' }
    ];

    const deduped = deduplicateByExternalId(rawItems);
    expect(deduped).toHaveLength(2);
    expect(deduped[0].title).toBe('Task 1 v2');
    expect(deduped[1].externalId).toBe('ext-2');
  });
});
