// src/utils/__tests__/security.test.ts
import { describe, it, expect } from 'vitest';
import { isValidEmbedUrl } from '../security';

describe('isValidEmbedUrl', () => {
  it('allows valid Notion HTTPS embed URLs', () => {
    expect(isValidEmbedUrl('https://v1.embednotion.com/embed/plan-maestro')).toBe(true);
    expect(isValidEmbedUrl('https://notion.so/my-workspace/page-123')).toBe(true);
    expect(isValidEmbedUrl('https://my-site.notion.site/doc')).toBe(true);
    expect(isValidEmbedUrl('https://notion.com/p/abc')).toBe(true);
  });

  it('allows valid YouTube and Vimeo embed URLs', () => {
    expect(isValidEmbedUrl('https://www.youtube.com/embed/dQw4w9WgXcQ')).toBe(true);
    expect(isValidEmbedUrl('https://youtu.be/dQw4w9WgXcQ')).toBe(true);
    expect(isValidEmbedUrl('https://player.vimeo.com/video/12345678')).toBe(true);
  });

  it('rejects HTTP protocol', () => {
    expect(isValidEmbedUrl('http://v1.embednotion.com/embed/plan-maestro')).toBe(false);
    expect(isValidEmbedUrl('http://youtube.com/watch?v=123')).toBe(false);
  });

  it('rejects non-whitelisted domains', () => {
    expect(isValidEmbedUrl('https://evil.com/phishing')).toBe(false);
    expect(isValidEmbedUrl('https://maliciousnotion.com')).toBe(false);
    expect(isValidEmbedUrl('https://fake-youtube.com/video')).toBe(false);
  });

  it('rejects invalid URL schemes such as javascript:', () => {
    expect(isValidEmbedUrl('javascript:alert(1)')).toBe(false);
    expect(isValidEmbedUrl('data:text/html,<script>alert(1)</script>')).toBe(false);
  });

  it('handles empty or malformed input safely', () => {
    expect(isValidEmbedUrl('')).toBe(false);
    expect(isValidEmbedUrl('   ')).toBe(false);
    expect(isValidEmbedUrl('not-a-url')).toBe(false);
    expect(isValidEmbedUrl(null as unknown as string)).toBe(false);
    expect(isValidEmbedUrl(undefined as unknown as string)).toBe(false);
  });
});
