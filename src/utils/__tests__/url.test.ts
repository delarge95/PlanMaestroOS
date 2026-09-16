import { describe, it, expect } from 'vitest';
import { withBase } from '../url';

describe('withBase URL helper', () => {
  it('returns # for empty or missing path', () => {
    expect(withBase('')).toBe('#');
  });

  it('preserves http:// and https:// URLs', () => {
    expect(withBase('https://example.com')).toBe('https://example.com');
    expect(withBase('http://example.com/page')).toBe('http://example.com/page');
  });

  it('preserves hash fragments', () => {
    expect(withBase('#section')).toBe('#section');
  });

  it('prefixes relative paths with leading slash', () => {
    const result = withBase('app/fitness');
    expect(result).toMatch(/\/app\/fitness$/);
  });

  it('prefixes relative paths starting with slash', () => {
    const result = withBase('/app/fitness');
    expect(result).toMatch(/\/app\/fitness$/);
  });

  it('sanitizes dangerous javascript: URI schemes', () => {
    expect(withBase('javascript:alert(1)')).toBe('#');
    expect(withBase('  JAVASCRIPT:alert(document.cookie)')).toBe('#');
  });

  it('sanitizes dangerous data: URI schemes', () => {
    expect(withBase('data:text/html,<script>alert(1)</script>')).toBe('#');
    expect(withBase('  DATA:text/html;base64,PHNjcmlwdD5hbGVydCgxKTwvc2NyaXB0Pg==')).toBe('#');
  });

  it('sanitizes dangerous vbscript: URI schemes', () => {
    expect(withBase('vbscript:msgbox("XSS")')).toBe('#');
    expect(withBase('  VBSCRIPT:code')).toBe('#');
  });
});
