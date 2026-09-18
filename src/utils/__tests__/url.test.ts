import { describe, it, expect } from 'vitest';
import { withBase } from '../url';

describe('withBase URL Sanitizer & Base Resolver', () => {
  it('should return "#" for empty or non-string inputs', () => {
    expect(withBase('')).toBe('#');
    // @ts-expect-error - testing invalid input types
    expect(withBase(null)).toBe('#');
    // @ts-expect-error - testing invalid input types
    expect(withBase(undefined)).toBe('#');
  });

  it('should return "#" for dangerous pseudo-protocols to prevent DOM XSS', () => {
    expect(withBase('javascript:alert(1)')).toBe('#');
    expect(withBase('JAVASCRIPT:alert(1)')).toBe('#');
    expect(withBase('  javascript:void(0) ')).toBe('#');
    expect(withBase('data:text/html,<script>alert(1)</script>')).toBe('#');
    expect(withBase('DATA:text/html;base64,1234')).toBe('#');
    expect(withBase('vbscript:msgbox(1)')).toBe('#');
  });

  it('should preserve valid absolute URLs and hash links', () => {
    expect(withBase('https://example.com')).toBe('https://example.com');
    expect(withBase('http://example.com/page')).toBe('http://example.com/page');
    expect(withBase('#section-1')).toBe('#section-1');
  });

  it('should format relative URLs properly with base URL', () => {
    expect(withBase('/about')).toBe('/about');
    expect(withBase('about')).toBe('/about');
    expect(withBase('app/today')).toBe('/app/today');
  });
});
