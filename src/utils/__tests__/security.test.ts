import { describe, it, expect } from 'vitest';
import { isValidEmbedUrl } from '../security';

describe('isValidEmbedUrl', () => {
  it('allows valid Notion embed URLs over HTTPS', () => {
    expect(isValidEmbedUrl('https://v1.embednotion.com/embed/plan-maestro')).toBe(true);
    expect(isValidEmbedUrl('https://myworkspace.notion.site/Page-123')).toBe(true);
    expect(isValidEmbedUrl('https://www.notion.so/Page-123')).toBe(true);
    expect(isValidEmbedUrl('https://notion.com/product')).toBe(true);
  });

  it('allows valid YouTube and Vimeo embed URLs over HTTPS', () => {
    expect(isValidEmbedUrl('https://www.youtube.com/embed/dQw4w9WgXcQ')).toBe(true);
    expect(isValidEmbedUrl('https://youtu.be/dQw4w9WgXcQ')).toBe(true);
    expect(isValidEmbedUrl('https://player.vimeo.com/video/123456')).toBe(true);
    expect(isValidEmbedUrl('https://vimeo.com/123456')).toBe(true);
  });

  it('rejects non-HTTPS URLs', () => {
    expect(isValidEmbedUrl('http://v1.embednotion.com/embed/plan-maestro')).toBe(false);
    expect(isValidEmbedUrl('http://www.youtube.com/embed/dQw4w9WgXcQ')).toBe(false);
  });

  it('rejects untrusted domains', () => {
    expect(isValidEmbedUrl('https://evil.com')).toBe(false);
    expect(isValidEmbedUrl('https://notion.so.evil.com')).toBe(false);
    expect(isValidEmbedUrl('https://phishing-youtube.com')).toBe(false);
  });

  it('rejects invalid or dangerous schemes', () => {
    expect(isValidEmbedUrl('javascript:alert(1)')).toBe(false);
    expect(isValidEmbedUrl('data:text/html,<script>alert(1)</script>')).toBe(false);
    expect(isValidEmbedUrl('file:///etc/passwd')).toBe(false);
  });

  it('rejects null, undefined, or empty values', () => {
    expect(isValidEmbedUrl(null)).toBe(false);
    expect(isValidEmbedUrl(undefined)).toBe(false);
    expect(isValidEmbedUrl('')).toBe(false);
  });
});
