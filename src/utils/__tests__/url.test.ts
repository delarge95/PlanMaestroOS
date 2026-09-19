import { describe, it, expect } from 'vitest';
import { withBase } from '../url';

describe('withBase', () => {
  it('returns # for empty or whitespace-only paths', () => {
    expect(withBase('')).toBe('#');
    expect(withBase('   ')).toBe('#');
  });

  it('sanitizes dangerous URI schemes to prevent DOM XSS', () => {
    expect(withBase('javascript:alert(1)')).toBe('#');
    expect(withBase('  javascript:alert("xss")')).toBe('#');
    expect(withBase('JAVASCRIPT:alert(1)')).toBe('#');
    expect(withBase('data:text/html,<script>alert(1)</script>')).toBe('#');
    expect(withBase('vbscript:msgbox("xss")')).toBe('#');
  });

  it('preserves valid absolute URLs and hash links', () => {
    expect(withBase('https://example.com')).toBe('https://example.com');
    expect(withBase('http://example.com/page')).toBe('http://example.com/page');
    expect(withBase('#section')).toBe('#section');
  });

  it('resolves relative paths correctly', () => {
    expect(withBase('/app/fitness')).toBe('/app/fitness');
    expect(withBase('app/german')).toBe('/app/german');
  });
});
