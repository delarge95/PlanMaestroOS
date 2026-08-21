import { describe, it, expect } from 'vitest';
import { isValidEmbedUrl } from '../security';

describe('isValidEmbedUrl', () => {
  it('allows valid HTTPS Notion URLs', () => {
    expect(isValidEmbedUrl('https://v1.embednotion.com/embed/plan-maestro')).toBe(true);
    expect(isValidEmbedUrl('https://notion.site/my-page')).toBe(true);
    expect(isValidEmbedUrl('https://www.notion.so/my-workspace')).toBe(true);
  });

  it('allows valid HTTPS YouTube URLs', () => {
    expect(isValidEmbedUrl('https://www.youtube.com/embed/dQw4w9WgXcQ')).toBe(true);
    expect(isValidEmbedUrl('https://youtu.be/dQw4w9WgXcQ')).toBe(true);
  });

  it('allows valid HTTPS Vimeo URLs', () => {
    expect(isValidEmbedUrl('https://player.vimeo.com/video/12345678')).toBe(true);
    expect(isValidEmbedUrl('https://vimeo.com/12345678')).toBe(true);
  });

  it('rejects HTTP URLs', () => {
    expect(isValidEmbedUrl('http://www.youtube.com/embed/dQw4w9WgXcQ')).toBe(false);
    expect(isValidEmbedUrl('http://v1.embednotion.com/embed')).toBe(false);
  });

  it('rejects unauthorized or unknown domains', () => {
    expect(isValidEmbedUrl('https://malicious-site.com/embed')).toBe(false);
    expect(isValidEmbedUrl('https://notion.so.evil-domain.com')).toBe(false);
  });

  it('rejects invalid or non-string inputs', () => {
    expect(isValidEmbedUrl(null)).toBe(false);
    expect(isValidEmbedUrl(undefined)).toBe(false);
    expect(isValidEmbedUrl('')).toBe(false);
    expect(isValidEmbedUrl('javascript:alert(1)')).toBe(false);
    expect(isValidEmbedUrl('data:text/html,<script>alert(1)</script>')).toBe(false);
  });
});
