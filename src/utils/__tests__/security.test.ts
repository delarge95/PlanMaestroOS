import { describe, it, expect } from 'vitest';
import { isValidEmbedUrl, DEFAULT_ALLOWED_EMBED_DOMAINS } from '../security';

describe('isValidEmbedUrl', () => {
  it('returns true for valid whitelisted HTTPS URLs', () => {
    expect(isValidEmbedUrl('https://www.youtube.com/embed/dQw4w9WgXcQ')).toBe(true);
    expect(isValidEmbedUrl('https://youtu.be/dQw4w9WgXcQ')).toBe(true);
    expect(isValidEmbedUrl('https://v1.embednotion.com/embed/plan-maestro')).toBe(true);
    expect(isValidEmbedUrl('https://player.vimeo.com/video/123456')).toBe(true);
    expect(isValidEmbedUrl('https://notion.so/my-page')).toBe(true);
    expect(isValidEmbedUrl('https://subdomain.notion.site/page')).toBe(true);
  });

  it('returns false for HTTP non-secure URLs', () => {
    expect(isValidEmbedUrl('http://www.youtube.com/embed/dQw4w9WgXcQ')).toBe(false);
    expect(isValidEmbedUrl('http://v1.embednotion.com/embed/plan-maestro')).toBe(false);
  });

  it('returns false for non-whitelisted domains', () => {
    expect(isValidEmbedUrl('https://malicious-site.com/embed')).toBe(false);
    expect(isValidEmbedUrl('https://fakeyoutube.com/embed')).toBe(false);
    expect(isValidEmbedUrl('https://phishingnotion.com')).toBe(false);
  });

  it('returns false for invalid inputs or javascript: URIs', () => {
    expect(isValidEmbedUrl(null)).toBe(false);
    expect(isValidEmbedUrl(undefined)).toBe(false);
    expect(isValidEmbedUrl('')).toBe(false);
    expect(isValidEmbedUrl('javascript:alert(1)')).toBe(false);
    expect(isValidEmbedUrl('data:text/html,<script>alert(1)</script>')).toBe(false);
  });

  it('supports custom domain whitelists', () => {
    const customList = ['trusteddomain.org'];
    expect(isValidEmbedUrl('https://trusteddomain.org/app', customList)).toBe(true);
    expect(isValidEmbedUrl('https://sub.trusteddomain.org/app', customList)).toBe(true);
    expect(isValidEmbedUrl('https://youtube.com', customList)).toBe(false);
  });
});
