import { describe, it, expect } from 'vitest';
import { isValidEmbedUrl } from '../security';

describe('isValidEmbedUrl security validation', () => {
  it('allows HTTPS URLs from whitelisted embed domains', () => {
    expect(isValidEmbedUrl('https://www.youtube.com/embed/dQw4w9WgXcQ')).toBe(true);
    expect(isValidEmbedUrl('https://youtu.be/dQw4w9WgXcQ')).toBe(true);
    expect(isValidEmbedUrl('https://player.vimeo.com/video/123456789')).toBe(true);
    expect(isValidEmbedUrl('https://v1.embednotion.com/embed/plan-maestro')).toBe(true);
    expect(isValidEmbedUrl('https://notion.so/embed/123')).toBe(true);
    expect(isValidEmbedUrl('https://subdomain.notion.site/page')).toBe(true);
  });

  it('rejects non-HTTPS protocols (HTTP, javascript:, data:)', () => {
    expect(isValidEmbedUrl('http://www.youtube.com/embed/dQw4w9WgXcQ')).toBe(false);
    expect(isValidEmbedUrl('javascript:alert(1)')).toBe(false);
    expect(isValidEmbedUrl('data:text/html,<script>alert(1)</script>')).toBe(false);
  });

  it('rejects domains not in the whitelist', () => {
    expect(isValidEmbedUrl('https://evil-site.com/embed')).toBe(false);
    expect(isValidEmbedUrl('https://notion.so.attacker.com/embed')).toBe(false);
    expect(isValidEmbedUrl('https://youtube.com.malicious.net/video')).toBe(false);
  });

  it('handles null, undefined, empty, or invalid input gracefully', () => {
    expect(isValidEmbedUrl(null)).toBe(false);
    expect(isValidEmbedUrl(undefined)).toBe(false);
    expect(isValidEmbedUrl('')).toBe(false);
    expect(isValidEmbedUrl('  ')).toBe(false);
    expect(isValidEmbedUrl('not a url')).toBe(false);
  });
});
