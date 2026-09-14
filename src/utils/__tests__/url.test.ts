import { describe, it, expect } from 'vitest';
import { withBase } from '../url';

describe('withBase URL sanitizer & resolver', () => {
  it('returns # for empty or missing path', () => {
    expect(withBase('')).toBe('#');
  });

  it('preserves valid HTTP, HTTPS and anchor links', () => {
    expect(withBase('https://example.com')).toBe('https://example.com');
    expect(withBase('http://example.com/page')).toBe('http://example.com/page');
    expect(withBase('#section')).toBe('#section');
  });

  it('prepends base URL to relative paths', () => {
    expect(withBase('/app/fitness')).toBe('/app/fitness');
    expect(withBase('app/career')).toBe('/app/career');
  });

  it('blocks dangerous URI schemes (DOM XSS prevention)', () => {
    expect(withBase('javascript:alert(1)')).toBe('#');
    expect(withBase('JAVASCRIPT:alert(1)')).toBe('#');
    expect(withBase('  javascript:alert(1)')).toBe('#');
    expect(withBase('data:text/html,<script>alert(1)</script>')).toBe('#');
    expect(withBase('vbscript:msgbox(1)')).toBe('#');
  });
});
