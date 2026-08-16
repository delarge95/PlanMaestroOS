import { describe, it, expect } from 'vitest';
import { isValidEmbedUrl } from '../security';

describe('isValidEmbedUrl', () => {
  it('allows valid HTTPS URLs from default whitelisted domains', () => {
    expect(isValidEmbedUrl('https://v1.embednotion.com/embed/plan-maestro')).toBe(true);
    expect(isValidEmbedUrl('https://www.notion.so/my-page')).toBe(true);
    expect(isValidEmbedUrl('https://my-subdomain.notion.site/page')).toBe(true);
    expect(isValidEmbedUrl('https://www.youtube.com/embed/dQw4w9WgXcQ')).toBe(true);
    expect(isValidEmbedUrl('https://youtu.be/dQw4w9WgXcQ')).toBe(true);
    expect(isValidEmbedUrl('https://player.vimeo.com/video/12345678')).toBe(true);
  });

  it('rejects HTTP and non-HTTPS protocols', () => {
    expect(isValidEmbedUrl('http://v1.embednotion.com/embed/plan-maestro')).toBe(false);
    expect(isValidEmbedUrl('javascript:alert(1)')).toBe(false);
    expect(isValidEmbedUrl('data:text/html,<script>alert(1)</script>')).toBe(false);
  });

  it('rejects non-whitelisted domains', () => {
    expect(isValidEmbedUrl('https://evil.com/phishing')).toBe(false);
    expect(isValidEmbedUrl('https://notion.so.evil.com/page')).toBe(false);
    expect(isValidEmbedUrl('https://fakeyoutube.com/watch')).toBe(false);
  });

  it('handles invalid or empty URLs safely', () => {
    expect(isValidEmbedUrl('')).toBe(false);
    expect(isValidEmbedUrl('   ')).toBe(false);
    expect(isValidEmbedUrl('not-a-url')).toBe(false);
  });
});
