import { describe, it, expect } from 'vitest';
import { isValidEmbedUrl } from '../security';

describe('isValidEmbedUrl', () => {
  it('allows valid HTTPS embed URLs from trusted domains', () => {
    expect(isValidEmbedUrl('https://v1.embednotion.com/embed/plan-maestro')).toBe(true);
    expect(isValidEmbedUrl('https://www.notion.so/my-workspace/page')).toBe(true);
    expect(isValidEmbedUrl('https://workspace.notion.site/doc')).toBe(true);
    expect(isValidEmbedUrl('https://www.youtube.com/embed/dQw4w9WgXcQ')).toBe(true);
    expect(isValidEmbedUrl('https://youtu.be/dQw4w9WgXcQ')).toBe(true);
    expect(isValidEmbedUrl('https://player.vimeo.com/video/123456789')).toBe(true);
  });

  it('rejects HTTP protocol and non-HTTPS schemes', () => {
    expect(isValidEmbedUrl('http://v1.embednotion.com/embed/test')).toBe(false);
    expect(isValidEmbedUrl('javascript:alert(1)')).toBe(false);
    expect(isValidEmbedUrl('data:text/html,<script>alert(1)</script>')).toBe(false);
  });

  it('rejects untrusted domains and spoofed subdomains', () => {
    expect(isValidEmbedUrl('https://evil.com/phishing')).toBe(false);
    expect(isValidEmbedUrl('https://notion.com.evil.com/login')).toBe(false);
    expect(isValidEmbedUrl('https://youtube.com.attacker.com/watch')).toBe(false);
  });

  it('handles null, undefined, and empty/invalid strings gracefully', () => {
    expect(isValidEmbedUrl(null)).toBe(false);
    expect(isValidEmbedUrl(undefined)).toBe(false);
    expect(isValidEmbedUrl('')).toBe(false);
    expect(isValidEmbedUrl('not-a-url')).toBe(false);
  });
});
