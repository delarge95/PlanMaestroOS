import { describe, it, expect } from 'vitest';
import { withBase } from '../url';

describe('withBase', () => {
  it('returns # when empty path is provided', () => {
    expect(withBase('')).toBe('#');
  });

  it('preserves valid HTTP and HTTPS URLs', () => {
    expect(withBase('https://example.com/page')).toBe('https://example.com/page');
    expect(withBase('http://example.com/page')).toBe('http://example.com/page');
  });

  it('preserves hash fragments', () => {
    expect(withBase('#section')).toBe('#section');
  });

  it('prepends base path to relative routes', () => {
    expect(withBase('/about')).toBe('/about');
    expect(withBase('contact')).toBe('/contact');
  });

  it('sanitizes dangerous URI schemes by returning #', () => {
    expect(withBase('javascript:alert(1)')).toBe('#');
    expect(withBase('JAVASCRIPT:alert(1)')).toBe('#');
    expect(withBase('  javascript:alert(1)')).toBe('#');
    expect(withBase('data:text/html,<script>alert(1)</script>')).toBe('#');
    expect(withBase('vbscript:msgbox(1)')).toBe('#');
  });
});
