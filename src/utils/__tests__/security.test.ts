// src/utils/__tests__/security.test.ts — Unit tests for secure embed URL validation

import { describe, it, expect } from 'vitest';
import { isValidEmbedUrl } from '../security';

describe('isValidEmbedUrl (§Security Validation)', () => {
  it('allows valid HTTPS embed URLs for whitelisted domains', () => {
    expect(isValidEmbedUrl('https://v1.embednotion.com/embed/plan-maestro')).toBe(true);
    expect(isValidEmbedUrl('https://notion.so/my-page')).toBe(true);
    expect(isValidEmbedUrl('https://www.youtube.com/embed/dQw4w9WgXcQ')).toBe(true);
    expect(isValidEmbedUrl('https://youtu.be/dQw4w9WgXcQ')).toBe(true);
    expect(isValidEmbedUrl('https://player.vimeo.com/video/123456789')).toBe(true);
  });

  it('rejects HTTP non-secure embed URLs', () => {
    expect(isValidEmbedUrl('http://v1.embednotion.com/embed/plan-maestro')).toBe(false);
    expect(isValidEmbedUrl('http://www.youtube.com/embed/dQw4w9WgXcQ')).toBe(false);
  });

  it('rejects non-whitelisted domains', () => {
    expect(isValidEmbedUrl('https://malicious-site.com/embed')).toBe(false);
    expect(isValidEmbedUrl('https://fakeyoutube.com/embed/123')).toBe(false);
    expect(isValidEmbedUrl('https://evilsite.com/?url=notion.so')).toBe(false);
  });

  it('rejects invalid URL formats and javascript: / data: protocols', () => {
    expect(isValidEmbedUrl('javascript:alert(1)')).toBe(false);
    expect(isValidEmbedUrl('data:text/html,<script>alert(1)</script>')).toBe(false);
    expect(isValidEmbedUrl('not-a-valid-url')).toBe(false);
    expect(isValidEmbedUrl('')).toBe(false);
    expect(isValidEmbedUrl(null as any)).toBe(false);
    expect(isValidEmbedUrl(undefined as any)).toBe(false);
  });

  it('allows custom whitelisted domains when passed', () => {
    expect(isValidEmbedUrl('https://trusted-domain.com/video', ['trusted-domain.com'])).toBe(true);
    expect(isValidEmbedUrl('https://other-domain.com/video', ['trusted-domain.com'])).toBe(false);
  });
});
