import { describe, it, expect } from 'vitest';
import { sanitizeErrorMessage, createAuditEntry } from '../auditLogger';

describe('auditLogger security sanitization', () => {
  it('returns undefined when message is undefined', () => {
    expect(sanitizeErrorMessage(undefined)).toBeUndefined();
  });

  it('handles empty string correctly', () => {
    expect(sanitizeErrorMessage('')).toBeUndefined();
  });

  it('redacts classic and modern Notion tokens', () => {
    const raw = 'Failed request with notion_secret_123456789 and ntn_9876543210abc';
    const sanitized = sanitizeErrorMessage(raw);
    expect(sanitized).toBe('Failed request with [REDACTED_SECRET] and [REDACTED_SECRET]');
  });

  it('redacts classic ghp_ tokens and fine-grained github_pat_ tokens', () => {
    const raw = 'Auth error with ghp_1234567890abcdef and github_pat_11AAAAAAA_abcdef';
    const sanitized = sanitizeErrorMessage(raw);
    expect(sanitized).toBe('Auth error with [REDACTED_SECRET] and [REDACTED_SECRET]');
  });

  it('redacts OpenAI and Gemini API keys', () => {
    const raw = 'OpenAI failed sk-1234567890abcdef and sk-proj-1234567890abcdef and Gemini AIzaSy1234567890abcdef';
    const sanitized = sanitizeErrorMessage(raw);
    expect(sanitized).toBe('OpenAI failed [REDACTED_SECRET] and [REDACTED_SECRET] and Gemini [REDACTED_SECRET]');
  });

  it('redacts Bearer and Basic authorization header tokens', () => {
    const raw = 'Header Bearer eyJhbGciOi... and Basic dXNlcjpwYXNz';
    const sanitized = sanitizeErrorMessage(raw);
    expect(sanitized).toBe('Header [REDACTED_SECRET] and [REDACTED_SECRET]');
  });

  it('creates sanitized audit entry with jobId and timestamp', () => {
    const entry = createAuditEntry({
      origin: 'notion',
      entity: 'task',
      operation: 'sync',
      actor: 'system',
      result: 'failed',
      retries: 1,
      errorSanitized: 'Error with secret_key_abc123'
    });

    expect(entry.jobId).toMatch(/^job_\d+_[a-z0-9]+/);
    expect(entry.timestamp).toBeDefined();
    expect(entry.errorSanitized).toBe('Error with [REDACTED_SECRET]');
  });
});
