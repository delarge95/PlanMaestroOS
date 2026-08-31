import { describe, it, expect } from 'vitest';
import { isValidEmbedUrl } from '../security';

describe('isValidEmbedUrl security validation', () => {
  it('should accept valid HTTPS URLs from whitelisted domains', () => {
    expect(isValidEmbedUrl('https://v1.embednotion.com/embed/plan-maestro')).toBe(true);
    expect(isValidEmbedUrl('https://www.youtube.com/embed/dQw4w9WgXcQ')).toBe(true);
    expect(isValidEmbedUrl('https://youtu.be/dQw4w9WgXcQ')).toBe(true);
    expect(isValidEmbedUrl('https://player.vimeo.com/video/123456789')).toBe(true);
    expect(isValidEmbedUrl('https://myworkspace.notion.site/123456')).toBe(true);
  });

  it('should reject non-HTTPS protocols', () => {
    expect(isValidEmbedUrl('http://www.youtube.com/embed/dQw4w9WgXcQ')).toBe(false);
    expect(isValidEmbedUrl('javascript:alert(1)')).toBe(false);
    expect(isValidEmbedUrl('data:text/html,<script>alert(1)</script>')).toBe(false);
  });

  it('should reject unwhitelisted domains', () => {
    expect(isValidEmbedUrl('https://evil-site.com/embed')).toBe(false);
    expect(isValidEmbedUrl('https://fake-youtube.com/embed')).toBe(false);
    expect(isValidEmbedUrl('https://notion.so.evil.com/page')).toBe(false);
  });

  it('should handle null, undefined, empty, or malformed inputs gracefully', () => {
    expect(isValidEmbedUrl(null)).toBe(false);
    expect(isValidEmbedUrl(undefined)).toBe(false);
    expect(isValidEmbedUrl('')).toBe(false);
    expect(isValidEmbedUrl('   ')).toBe(false);
    expect(isValidEmbedUrl('not a url')).toBe(false);
  });
});
