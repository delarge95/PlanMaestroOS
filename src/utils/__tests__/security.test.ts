import { describe, it, expect } from 'vitest';
import { isValidEmbedUrl } from '../security';

describe('isValidEmbedUrl', () => {
  const allowedDomains = ['youtube.com', 'vimeo.com', 'notion.so', 'embednotion.com'];

  it('allows valid HTTPS URLs matching whitelisted domains', () => {
    expect(isValidEmbedUrl('https://www.youtube.com/embed/dQw4w9WgXcQ', allowedDomains)).toBe(true);
    expect(isValidEmbedUrl('https://player.vimeo.com/video/123456789', allowedDomains)).toBe(true);
    expect(isValidEmbedUrl('https://v1.embednotion.com/embed/plan-maestro', allowedDomains)).toBe(true);
    expect(isValidEmbedUrl('https://notion.so/my-page', allowedDomains)).toBe(true);
  });

  it('rejects HTTP URLs even if domain is whitelisted', () => {
    expect(isValidEmbedUrl('http://www.youtube.com/embed/dQw4w9WgXcQ', allowedDomains)).toBe(false);
  });

  it('rejects dangerous URL schemes like javascript: or data:', () => {
    expect(isValidEmbedUrl('javascript:alert(1)', allowedDomains)).toBe(false);
    expect(isValidEmbedUrl('data:text/html,<script>alert(1)</script>', allowedDomains)).toBe(false);
  });

  it('rejects domains not present in the whitelist', () => {
    expect(isValidEmbedUrl('https://malicious-site.com/embed', allowedDomains)).toBe(false);
    expect(isValidEmbedUrl('https://fakeyoutube.com/embed', allowedDomains)).toBe(false);
  });

  it('handles empty or non-string inputs safely', () => {
    expect(isValidEmbedUrl('', allowedDomains)).toBe(false);
    expect(isValidEmbedUrl(null, allowedDomains)).toBe(false);
    expect(isValidEmbedUrl(undefined, allowedDomains)).toBe(false);
  });
});
