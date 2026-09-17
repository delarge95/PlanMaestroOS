import { describe, it, expect } from 'vitest';
import { isValidEmbedUrl } from '../security';

describe('isValidEmbedUrl', () => {
  it('should accept valid HTTPS URLs from whitelisted domains', () => {
    expect(isValidEmbedUrl('https://v1.embednotion.com/embed/123')).toBe(true);
    expect(isValidEmbedUrl('https://notion.so/my-page')).toBe(true);
    expect(isValidEmbedUrl('https://my-site.notion.site/page')).toBe(true);
    expect(isValidEmbedUrl('https://www.youtube.com/embed/dQw4w9WgXcQ')).toBe(true);
    expect(isValidEmbedUrl('https://youtu.be/dQw4w9WgXcQ')).toBe(true);
    expect(isValidEmbedUrl('https://player.vimeo.com/video/12345')).toBe(true);
  });

  it('should reject non-HTTPS URLs', () => {
    expect(isValidEmbedUrl('http://v1.embednotion.com/embed/123')).toBe(false);
    expect(isValidEmbedUrl('http://youtube.com/watch?v=123')).toBe(false);
  });

  it('should reject dangerous URI schemes (XSS prevention)', () => {
    expect(isValidEmbedUrl('javascript:alert(1)')).toBe(false);
    expect(isValidEmbedUrl('data:text/html,<script>alert(1)</script>')).toBe(false);
    expect(isValidEmbedUrl('vbscript:msgbox(1)')).toBe(false);
  });

  it('should reject untrusted or malformed domains', () => {
    expect(isValidEmbedUrl('https://evil-phishing-site.com')).toBe(false);
    expect(isValidEmbedUrl('https://notion.so.attacker.com')).toBe(false);
    expect(isValidEmbedUrl('not-a-url')).toBe(false);
    expect(isValidEmbedUrl('')).toBe(false);
  });
});
