import { describe, it, expect } from 'vitest';
import { isValidEmbedUrl } from '../security';

describe('isValidEmbedUrl', () => {
  it('allows valid HTTPS Notion embed URLs', () => {
    expect(isValidEmbedUrl('https://v1.embednotion.com/embed/plan-maestro')).toBe(true);
    expect(isValidEmbedUrl('https://www.notion.so/my-page-123')).toBe(true);
    expect(isValidEmbedUrl('https://myworkspace.notion.site/board')).toBe(true);
  });

  it('allows valid HTTPS YouTube embed URLs', () => {
    expect(isValidEmbedUrl('https://www.youtube.com/embed/dQw4w9WgXcQ')).toBe(true);
    expect(isValidEmbedUrl('https://youtu.be/dQw4w9WgXcQ')).toBe(true);
    expect(isValidEmbedUrl('https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ')).toBe(true);
  });

  it('allows valid HTTPS Vimeo embed URLs', () => {
    expect(isValidEmbedUrl('https://player.vimeo.com/video/123456789')).toBe(true);
    expect(isValidEmbedUrl('https://vimeo.com/123456789')).toBe(true);
  });

  it('rejects HTTP unencrypted URLs', () => {
    expect(isValidEmbedUrl('http://v1.embednotion.com/embed/plan-maestro')).toBe(false);
    expect(isValidEmbedUrl('http://youtube.com/watch?v=123')).toBe(false);
  });

  it('rejects javascript: and data: URLs', () => {
    expect(isValidEmbedUrl('javascript:alert("xss")')).toBe(false);
    expect(isValidEmbedUrl('data:text/html,<script>alert(1)</script>')).toBe(false);
  });

  it('rejects non-whitelisted domains', () => {
    expect(isValidEmbedUrl('https://malicious-site.com/embed')).toBe(false);
    expect(isValidEmbedUrl('https://notion.so.evil.com/phish')).toBe(false);
  });

  it('rejects empty, null, or undefined inputs', () => {
    expect(isValidEmbedUrl('')).toBe(false);
    expect(isValidEmbedUrl('   ')).toBe(false);
    expect(isValidEmbedUrl(null as any)).toBe(false);
    expect(isValidEmbedUrl(undefined as any)).toBe(false);
  });
});
