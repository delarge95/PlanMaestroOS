import { describe, it, expect } from 'vitest';
import { isValidEmbedUrl } from '../security';

describe('isValidEmbedUrl', () => {
  it('allows valid HTTPS URLs from whitelisted domains', () => {
    expect(isValidEmbedUrl('https://v1.embednotion.com/embed/plan-maestro')).toBe(true);
    expect(isValidEmbedUrl('https://www.youtube.com/embed/dQw4w9WgXcQ')).toBe(true);
    expect(isValidEmbedUrl('https://youtu.be/dQw4w9WgXcQ')).toBe(true);
    expect(isValidEmbedUrl('https://player.vimeo.com/video/123456789')).toBe(true);
    expect(isValidEmbedUrl('https://notion.site/page')).toBe(true);
  });

  it('rejects non-HTTPS URLs', () => {
    expect(isValidEmbedUrl('http://www.youtube.com/embed/dQw4w9WgXcQ')).toBe(false);
    expect(isValidEmbedUrl('http://v1.embednotion.com/embed/plan-maestro')).toBe(false);
  });

  it('rejects untrusted domains', () => {
    expect(isValidEmbedUrl('https://malicious-site.com/embed')).toBe(false);
    expect(isValidEmbedUrl('https://notion.so.attacker.com/embed')).toBe(false);
    expect(isValidEmbedUrl('https://youtube.com.attacker.com/embed')).toBe(false);
  });

  it('rejects invalid or javascript URIs', () => {
    expect(isValidEmbedUrl('javascript:alert(1)')).toBe(false);
    expect(isValidEmbedUrl('data:text/html,<script>alert(1)</script>')).toBe(false);
    expect(isValidEmbedUrl('')).toBe(false);
    expect(isValidEmbedUrl(null as any)).toBe(false);
  });
});
