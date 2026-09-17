import { describe, it, expect } from 'vitest';
import { withBase } from '../url';

describe('withBase', () => {
  it('should return relative paths prepended with base URL', () => {
    expect(withBase('/app/fitness')).toBe('/app/fitness');
    expect(withBase('app/fitness')).toBe('/app/fitness');
  });

  it('should preserve external HTTP and HTTPS links', () => {
    expect(withBase('https://github.com')).toBe('https://github.com');
    expect(withBase('http://example.com')).toBe('http://example.com');
  });

  it('should preserve hash anchors', () => {
    expect(withBase('#section-1')).toBe('#section-1');
  });

  it('should sanitize dangerous URI schemes to prevent XSS', () => {
    expect(withBase('javascript:alert(1)')).toBe('#');
    expect(withBase('JAVASCRIPT:alert(1)')).toBe('#');
    expect(withBase('data:text/html,<script>alert(1)</script>')).toBe('#');
    expect(withBase('vbscript:msgbox(1)')).toBe('#');
  });

  it('should return # for empty paths', () => {
    expect(withBase('')).toBe('#');
  });
});
