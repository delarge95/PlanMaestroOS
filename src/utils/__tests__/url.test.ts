import { describe, it, expect } from 'vitest';
import { withBase } from '../url';

describe('withBase URL sanitizer', () => {
  it('returns # for empty or missing path', () => {
    expect(withBase('')).toBe('#');
  });

  it('preserves valid absolute http/https URLs and anchors', () => {
    expect(withBase('https://example.com/test')).toBe('https://example.com/test');
    expect(withBase('http://example.com')).toBe('http://example.com');
    expect(withBase('#section')).toBe('#section');
  });

  it('prepends base path for relative URLs', () => {
    expect(withBase('/app/fitness')).toBe('/app/fitness');
    expect(withBase('app/fitness')).toBe('/app/fitness');
  });

  it('sanitizes dangerous URI schemes to prevent DOM XSS', () => {
    expect(withBase('javascript:alert(1)')).toBe('#');
    expect(withBase('JAVASCRIPT:alert(1)')).toBe('#');
    expect(withBase('   javascript:alert(1)   ')).toBe('#');
    expect(withBase('data:text/html,<script>alert(1)</script>')).toBe('#');
    expect(withBase('vbscript:msgbox("XSS")')).toBe('#');
  });
});
