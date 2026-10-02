import { describe, it, expect } from 'vitest';
import { isValidEmbedUrl } from '../security';

describe('isValidEmbedUrl - Security validation for iFrame embeds', () => {
  it('allows valid Notion embed URLs over HTTPS', () => {
    expect(isValidEmbedUrl('https://v1.embednotion.com/embed/plan-maestro')).toBe(true);
    expect(isValidEmbedUrl('https://www.notion.so/workspace/page-123')).toBe(true);
    expect(isValidEmbedUrl('https://my-site.notion.site/page')).toBe(true);
  });

  it('allows valid YouTube and Vimeo embed URLs over HTTPS', () => {
    expect(isValidEmbedUrl('https://www.youtube.com/embed/dQw4w9WgXcQ')).toBe(true);
    expect(isValidEmbedUrl('https://youtu.be/dQw4w9WgXcQ')).toBe(true);
    expect(isValidEmbedUrl('https://player.vimeo.com/video/123456789')).toBe(true);
  });

  it('rejects unsecure HTTP protocol', () => {
    expect(isValidEmbedUrl('http://v1.embednotion.com/embed/plan-maestro')).toBe(false);
    expect(isValidEmbedUrl('http://www.youtube.com/embed/dQw4w9WgXcQ')).toBe(false);
  });

  it('rejects javascript: and data: protocols (XSS vectors)', () => {
    expect(isValidEmbedUrl('javascript:alert(1)')).toBe(false);
    expect(isValidEmbedUrl('data:text/html,<script>alert(1)</script>')).toBe(false);
    expect(isValidEmbedUrl('javascript:void(0)')).toBe(false);
  });

  it('rejects untrusted or malicious domains', () => {
    expect(isValidEmbedUrl('https://evil-phishing-site.com')).toBe(false);
    expect(isValidEmbedUrl('https://notion.so.attacker.com')).toBe(false);
    expect(isValidEmbedUrl('https://youtube.com.malicious.net')).toBe(false);
  });

  it('handles empty, malformed, or non-string input gracefully', () => {
    expect(isValidEmbedUrl('')).toBe(false);
    expect(isValidEmbedUrl('   ')).toBe(false);
    expect(isValidEmbedUrl('not a url')).toBe(false);
    expect(isValidEmbedUrl(null as any)).toBe(false);
    expect(isValidEmbedUrl(undefined as any)).toBe(false);
  });

  it('supports custom allowed domain whitelists', () => {
    const customList = ['trusted-partner.com'];
    expect(isValidEmbedUrl('https://app.trusted-partner.com/embed', customList)).toBe(true);
    expect(isValidEmbedUrl('https://v1.embednotion.com/embed/plan-maestro', customList)).toBe(false);
  });
});
