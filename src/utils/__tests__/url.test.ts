import { describe, it, expect } from 'vitest';
import { withBase } from '../url';

describe('withBase URL Sanitization', () => {
  it('returns # for empty or missing path', () => {
    expect(withBase('')).toBe('#');
  });

  it('sanitizes dangerous URI schemes (DOM XSS prevention)', () => {
    expect(withBase('javascript:alert(1)')).toBe('#');
    expect(withBase('  javascript:alert("XSS")')).toBe('#');
    expect(withBase('JAVASCRIPT:alert(1)')).toBe('#');
    expect(withBase('data:text/html;base64,PHNjcmlwdD5hbGVydCgxKTwvc2NyaXB0Pg==')).toBe('#');
    expect(withBase('vbscript:msgbox(1)')).toBe('#');
  });

  it('preserves valid absolute HTTP and HTTPS URLs', () => {
    expect(withBase('https://example.com/test')).toBe('https://example.com/test');
    expect(withBase('http://example.com')).toBe('http://example.com');
    expect(withBase('#anchor')).toBe('#anchor');
  });

  it('resolves relative paths correctly', () => {
    expect(withBase('/app/fitness')).toMatch(/\/app\/fitness$/);
    expect(withBase('app/fitness')).toMatch(/\/app\/fitness$/);
  });
});
