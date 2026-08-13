import { describe, it, expect } from 'vitest';
import { isValidEmbedUrl } from '../security';

describe('isValidEmbedUrl', () => {
  it('should accept secure, whitelisted domains', () => {
    expect(isValidEmbedUrl('https://v1.embednotion.com/embed/plan-maestro')).toBe(true);
    expect(isValidEmbedUrl('https://notion.so/workspace/page')).toBe(true);
    expect(isValidEmbedUrl('https://notion.site/page')).toBe(true);
    expect(isValidEmbedUrl('https://www.youtube.com/embed/dQw4w9WgXcQ')).toBe(true);
    expect(isValidEmbedUrl('https://youtu.be/dQw4w9WgXcQ')).toBe(true);
    expect(isValidEmbedUrl('https://player.vimeo.com/video/123456')).toBe(true);
  });

  it('should reject non-HTTPS URLs', () => {
    expect(isValidEmbedUrl('http://youtube.com/embed/dQw4w9WgXcQ')).toBe(false);
    expect(isValidEmbedUrl('http://v1.embednotion.com/embed/plan-maestro')).toBe(false);
  });

  it('should reject non-whitelisted domains', () => {
    expect(isValidEmbedUrl('https://malicious.com/embed')).toBe(false);
    expect(isValidEmbedUrl('https://attacker-youtube.com/embed')).toBe(false);
  });

  it('should handle invalid URLs and falsy values safely', () => {
    expect(isValidEmbedUrl('')).toBe(false);
    expect(isValidEmbedUrl(null)).toBe(false);
    expect(isValidEmbedUrl(undefined)).toBe(false);
    expect(isValidEmbedUrl('not-a-url')).toBe(false);
  });
});
