// src/utils/__tests__/security.test.ts
import { describe, it, expect } from 'vitest';
import { isValidEmbedUrl } from '../security';

describe('isValidEmbedUrl', () => {
  it('should accept valid HTTPS URLs from whitelisted domains', () => {
    expect(isValidEmbedUrl('https://notion.so/my-workspace')).toBe(true);
    expect(isValidEmbedUrl('https://sub.notion.so/page')).toBe(true);
    expect(isValidEmbedUrl('https://notion.site/abcd')).toBe(true);
    expect(isValidEmbedUrl('https://notion.com')).toBe(true);
    expect(isValidEmbedUrl('https://v1.embednotion.com/xyz')).toBe(true);
    expect(isValidEmbedUrl('https://www.youtube.com/watch?v=12345')).toBe(true);
    expect(isValidEmbedUrl('https://youtu.be/12345')).toBe(true);
    expect(isValidEmbedUrl('https://vimeo.com/12345')).toBe(true);
    expect(isValidEmbedUrl('https://player.vimeo.com/video/12345')).toBe(true);
  });

  it('should reject non-HTTPS URLs', () => {
    expect(isValidEmbedUrl('http://notion.so/my-workspace')).toBe(false);
    expect(isValidEmbedUrl('ftp://notion.so/my-workspace')).toBe(false);
    expect(isValidEmbedUrl('notion.so/my-workspace')).toBe(false);
  });

  it('should reject URLs from non-whitelisted domains', () => {
    expect(isValidEmbedUrl('https://malicious.com/notion.so')).toBe(false);
    expect(isValidEmbedUrl('https://notion.so.malicious.com')).toBe(false);
    expect(isValidEmbedUrl('https://attacker.site')).toBe(false);
  });

  it('should handle null, undefined, and empty string', () => {
    expect(isValidEmbedUrl(null)).toBe(false);
    expect(isValidEmbedUrl(undefined)).toBe(false);
    expect(isValidEmbedUrl('')).toBe(false);
  });

  it('should reject malformed URLs', () => {
    expect(isValidEmbedUrl('https://')).toBe(false);
    expect(isValidEmbedUrl('invalid-url')).toBe(false);
  });
});
