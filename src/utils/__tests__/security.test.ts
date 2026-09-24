import { describe, it, expect } from 'vitest';
import { isValidEmbedUrl } from '../security';

describe('isValidEmbedUrl', () => {
  it('should return true for valid HTTPS embed URLs from allowed domains', () => {
    expect(isValidEmbedUrl('https://v1.embednotion.com/embed/plan-maestro', ['notion'])).toBe(true);
    expect(isValidEmbedUrl('https://notion.so/my-page', ['notion'])).toBe(true);
    expect(isValidEmbedUrl('https://www.youtube.com/embed/dQw4w9WgXcQ', ['youtube'])).toBe(true);
    expect(isValidEmbedUrl('https://youtu.be/dQw4w9WgXcQ', ['youtube'])).toBe(true);
    expect(isValidEmbedUrl('https://player.vimeo.com/video/12345678', ['vimeo'])).toBe(true);
  });

  it('should return false for HTTP URLs or non-HTTPS schemes', () => {
    expect(isValidEmbedUrl('http://v1.embednotion.com/embed/plan-maestro')).toBe(false);
    expect(isValidEmbedUrl('javascript:alert(1)')).toBe(false);
    expect(isValidEmbedUrl('data:text/html,<script>alert(1)</script>')).toBe(false);
  });

  it('should return false for untrusted or unknown domains', () => {
    expect(isValidEmbedUrl('https://malicious-site.com/embed')).toBe(false);
    expect(isValidEmbedUrl('https://fake-notion.com/embed')).toBe(false);
  });

  it('should return false for null, undefined, or empty inputs', () => {
    expect(isValidEmbedUrl(null)).toBe(false);
    expect(isValidEmbedUrl(undefined)).toBe(false);
    expect(isValidEmbedUrl('')).toBe(false);
  });

  it('should respect the allowedTypes parameter filter', () => {
    expect(isValidEmbedUrl('https://www.youtube.com/embed/dQw4w9WgXcQ', ['notion'])).toBe(false);
    expect(isValidEmbedUrl('https://player.vimeo.com/video/12345678', ['youtube'])).toBe(false);
  });
});
