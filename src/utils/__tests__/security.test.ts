import { describe, it, expect } from 'vitest';
import { isValidEmbedUrl, ALLOWED_EMBED_DOMAINS } from '../security';

describe('isValidEmbedUrl', () => {
  it('allows valid HTTPS YouTube embed URLs', () => {
    expect(isValidEmbedUrl('https://www.youtube.com/embed/dQw4w9WgXcQ')).toBe(true);
    expect(isValidEmbedUrl('https://youtu.be/dQw4w9WgXcQ')).toBe(true);
  });

  it('allows valid HTTPS Vimeo embed URLs', () => {
    expect(isValidEmbedUrl('https://player.vimeo.com/video/123456789')).toBe(true);
    expect(isValidEmbedUrl('https://vimeo.com/123456789')).toBe(true);
  });

  it('allows valid HTTPS Notion embed URLs', () => {
    expect(isValidEmbedUrl('https://v1.embednotion.com/embed/plan-maestro')).toBe(true);
    expect(isValidEmbedUrl('https://notion.site/my-doc')).toBe(true);
    expect(isValidEmbedUrl('https://www.notion.so/my-workspace')).toBe(true);
  });

  it('rejects HTTP URLs', () => {
    expect(isValidEmbedUrl('http://www.youtube.com/embed/dQw4w9WgXcQ')).toBe(false);
    expect(isValidEmbedUrl('http://v1.embednotion.com/embed/plan-maestro')).toBe(false);
  });

  it('rejects dangerous javascript and data URI schemes', () => {
    expect(isValidEmbedUrl('javascript:alert(1)')).toBe(false);
    expect(isValidEmbedUrl('data:text/html,<script>alert(1)</script>')).toBe(false);
  });

  it('rejects untrusted domains', () => {
    expect(isValidEmbedUrl('https://evil-site.com/embed')).toBe(false);
    expect(isValidEmbedUrl('https://phishing-notion.com')).toBe(false);
  });

  it('handles null, undefined, empty, or malformed strings gracefully', () => {
    expect(isValidEmbedUrl(null)).toBe(false);
    expect(isValidEmbedUrl(undefined)).toBe(false);
    expect(isValidEmbedUrl('')).toBe(false);
    expect(isValidEmbedUrl('not a url')).toBe(false);
  });
});
