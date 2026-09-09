import { describe, it, expect } from 'vitest';
import { sanitizeErrorMessage, createAuditEntry } from '../auditLogger';

describe('auditLogger security sanitization', () => {
  it('should return undefined when message is undefined', () => {
    expect(sanitizeErrorMessage(undefined)).toBeUndefined();
  });

  it('should leave non-sensitive error messages untouched', () => {
    const msg = 'Failed to connect to database: Connection refused';
    expect(sanitizeErrorMessage(msg)).toBe(msg);
  });

  it('should redact secret_ tokens', () => {
    const msg = 'Error with secret_abc123456 in request';
    expect(sanitizeErrorMessage(msg)).toBe('Error with [REDACTED_SECRET] in request');
  });

  it('should redact Bearer tokens', () => {
    const msg = 'Authorization failed for Bearer eyJhbGciOiJIUzI1NiJ9.test';
    expect(sanitizeErrorMessage(msg)).toBe('Authorization failed for [REDACTED_SECRET]');
  });

  it('should redact Basic authentication tokens', () => {
    const msg = 'Authentication failed for Basic dXNlcm5hbWU6cGFzc3dvcmQ=';
    expect(sanitizeErrorMessage(msg)).toBe('Authentication failed for [REDACTED_SECRET]');
  });

  it('should redact generic API keys', () => {
    const msg1 = 'Failed call with api_key=xyz123_abc';
    const msg2 = 'Failed call with apikey: 987654321';
    expect(sanitizeErrorMessage(msg1)).toBe('Failed call with [REDACTED_SECRET]');
    expect(sanitizeErrorMessage(msg2)).toBe('Failed call with [REDACTED_SECRET]');
  });

  it('should redact Notion API tokens', () => {
    const msg = 'Notion API error with secret_xyz789';
    expect(sanitizeErrorMessage(msg)).toBe('Notion API error with [REDACTED_SECRET]');
  });

  it('should redact GitHub Personal Access Tokens', () => {
    const msg = 'GitHub request failed using ghp_1234567890abcdefghijklmnopqrstuvwxyz';
    expect(sanitizeErrorMessage(msg)).toBe('GitHub request failed using [REDACTED_SECRET]');
  });

  it('should redact Gemini API keys', () => {
    const msg = 'Google AI request failed with key AIzaSyA1B2C3D4E5F6G7H8I9J0';
    expect(sanitizeErrorMessage(msg)).toBe('Google AI request failed with key [REDACTED_SECRET]');
  });

  it('should sanitize errorSanitized when creating audit entry', () => {
    const entry = createAuditEntry({
      origin: 'app_client',
      entity: 'auth',
      operation: 'sync',
      actor: 'user',
      result: 'failed',
      retries: 1,
      errorSanitized: 'Failed with secret_12345'
    });

    expect(entry.errorSanitized).toBe('Failed with [REDACTED_SECRET]');
    expect(entry.jobId).toMatch(/^job_\d+_[a-z0-9]+$/);
    expect(entry.timestamp).toBeTruthy();
  });
});
