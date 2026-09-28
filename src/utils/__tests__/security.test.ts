// src/utils/__tests__/security.test.ts
import { describe, it, expect } from 'vitest';
import { isValidEmbedUrl } from '../security';

describe('isValidEmbedUrl', () => {
  it('should accept valid HTTPS URLs from whitelisted embed domains', () => {
    expect(isValidEmbedUrl('https://v1.embednotion.com/embed/plan-maestro')).toBe(true);
    expect(isValidEmbedUrl('https://notion.site/page')).toBe(true);
    expect(isValidEmbedUrl('https://www.youtube.com/embed/dQw4w9WgXcQ')).toBe(true);
    expect(isValidEmbedUrl('https://youtu.be/dQw4w9WgXcQ')).toBe(true);
    expect(isValidEmbedUrl('https://player.vimeo.com/video/123456789')).toBe(true);
  });

  it('should reject non-HTTPS URLs', () => {
    expect(isValidEmbedUrl('http://v1.embednotion.com/embed/plan-maestro')).toBe(false);
    expect(isValidEmbedUrl('http://www.youtube.com/embed/dQw4w9WgXcQ')).toBe(false);
  });

  it('should reject javascript: or data: URIs and malicious scripts', () => {
    expect(isValidEmbedUrl('javascript:alert(1)')).toBe(false);
    expect(isValidEmbedUrl('data:text/html,<script>alert(1)</script>')).toBe(false);
  });

  it('should reject non-whitelisted domains', () => {
    expect(isValidEmbedUrl('https://evil-attacker.com/embed')).toBe(false);
    expect(isValidEmbedUrl('https://youtube.com.attacker.com')).toBe(false);
  });

  it('should handle null, undefined, and empty string safely', () => {
    expect(isValidEmbedUrl(null)).toBe(false);
    expect(isValidEmbedUrl(undefined)).toBe(false);
    expect(isValidEmbedUrl('')).toBe(false);
  });
});
