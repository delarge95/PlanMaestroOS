import { describe, it, expect } from 'vitest';
import { isValidEmbedUrl } from '../security';

describe('isValidEmbedUrl', () => {
  it('allows valid HTTPS embed URLs for whitelisted domains', () => {
    expect(isValidEmbedUrl('https://www.youtube.com/embed/dQw4w9WgXcQ')).toBe(true);
    expect(isValidEmbedUrl('https://youtu.be/dQw4w9WgXcQ')).toBe(true);
    expect(isValidEmbedUrl('https://player.vimeo.com/video/123456')).toBe(true);
    expect(isValidEmbedUrl('https://v1.embednotion.com/embed/plan-maestro')).toBe(true);
    expect(isValidEmbedUrl('https://subdomain.notion.site/page')).toBe(true);
  });

  it('rejects non-HTTPS protocols', () => {
    expect(isValidEmbedUrl('http://www.youtube.com/embed/dQw4w9WgXcQ')).toBe(false);
    expect(isValidEmbedUrl('javascript:alert(1)')).toBe(false);
    expect(isValidEmbedUrl('data:text/html,<script>alert(1)</script>')).toBe(false);
    expect(isValidEmbedUrl('file:///etc/passwd')).toBe(false);
  });

  it('rejects unapproved domains', () => {
    expect(isValidEmbedUrl('https://malicious-site.com/embed')).toBe(false);
    expect(isValidEmbedUrl('https://phishingyoutube.com/embed')).toBe(false);
    expect(isValidEmbedUrl('https://evilnotion.com')).toBe(false);
  });

  it('handles empty or invalid input values', () => {
    expect(isValidEmbedUrl('')).toBe(false);
    expect(isValidEmbedUrl(null)).toBe(false);
    expect(isValidEmbedUrl(undefined)).toBe(false);
    expect(isValidEmbedUrl('invalid-url-string')).toBe(false);
  });

  it('respects custom allowed domains list', () => {
    const customDomains = ['example.com'];
    expect(isValidEmbedUrl('https://example.com/embed', customDomains)).toBe(true);
    expect(isValidEmbedUrl('https://www.youtube.com/embed/dQw4w9WgXcQ', customDomains)).toBe(false);
  });
});
