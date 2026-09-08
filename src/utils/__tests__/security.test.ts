import { describe, it, expect } from 'vitest';
import { isValidEmbedUrl } from '../security';

describe('isValidEmbedUrl', () => {
  it('returns true for valid HTTPS Notion embed URLs', () => {
    expect(isValidEmbedUrl('https://v1.embednotion.com/embed/plan-maestro')).toBe(true);
    expect(isValidEmbedUrl('https://notion.site/page-123')).toBe(true);
    expect(isValidEmbedUrl('https://www.notion.so/my-workspace/page')).toBe(true);
  });

  it('returns true for valid HTTPS YouTube embed URLs', () => {
    expect(isValidEmbedUrl('https://www.youtube.com/embed/dQw4w9WgXcQ')).toBe(true);
    expect(isValidEmbedUrl('https://youtu.be/dQw4w9WgXcQ')).toBe(true);
  });

  it('returns true for valid HTTPS Vimeo embed URLs', () => {
    expect(isValidEmbedUrl('https://player.vimeo.com/video/12345678')).toBe(true);
    expect(isValidEmbedUrl('https://vimeo.com/12345678')).toBe(true);
  });

  it('returns false for HTTP (non-HTTPS) URLs', () => {
    expect(isValidEmbedUrl('http://v1.embednotion.com/embed/plan-maestro')).toBe(false);
    expect(isValidEmbedUrl('http://www.youtube.com/embed/dQw4w9WgXcQ')).toBe(false);
  });

  it('returns false for untrusted or malicious domains', () => {
    expect(isValidEmbedUrl('https://malicious-site.com/embed')).toBe(false);
    expect(isValidEmbedUrl('https://notion.so.attacker.com/page')).toBe(false);
  });

  it('returns false for javascript:, data:, or malformed URLs', () => {
    expect(isValidEmbedUrl('javascript:alert(1)')).toBe(false);
    expect(isValidEmbedUrl('data:text/html,<script>alert(1)</script>')).toBe(false);
    expect(isValidEmbedUrl('not-a-valid-url')).toBe(false);
    expect(isValidEmbedUrl('')).toBe(false);
    expect(isValidEmbedUrl(null)).toBe(false);
    expect(isValidEmbedUrl(undefined)).toBe(false);
  });
});
