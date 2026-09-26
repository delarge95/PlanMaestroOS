import { describe, it, expect } from 'vitest';
import { isValidEmbedUrl } from '../security';

describe('isValidEmbedUrl security utility', () => {
  it('should accept valid HTTPS YouTube URLs', () => {
    expect(isValidEmbedUrl('https://www.youtube.com/embed/dQw4w9WgXcQ')).toBe(true);
    expect(isValidEmbedUrl('https://youtu.be/dQw4w9WgXcQ')).toBe(true);
  });

  it('should accept valid HTTPS Vimeo URLs', () => {
    expect(isValidEmbedUrl('https://player.vimeo.com/video/123456789')).toBe(true);
    expect(isValidEmbedUrl('https://vimeo.com/123456789')).toBe(true);
  });

  it('should accept valid HTTPS Notion URLs', () => {
    expect(isValidEmbedUrl('https://v1.embednotion.com/embed/plan-maestro')).toBe(true);
    expect(isValidEmbedUrl('https://www.notion.so/my-page')).toBe(true);
    expect(isValidEmbedUrl('https://workspace.notion.site/page')).toBe(true);
  });

  it('should reject non-HTTPS protocols', () => {
    expect(isValidEmbedUrl('http://www.youtube.com/embed/dQw4w9WgXcQ')).toBe(false);
    expect(isValidEmbedUrl('javascript:alert(1)')).toBe(false);
    expect(isValidEmbedUrl('data:text/html,<script>alert(1)</script>')).toBe(false);
  });

  it('should reject unauthorized domains', () => {
    expect(isValidEmbedUrl('https://malicious-site.com/embed')).toBe(false);
    expect(isValidEmbedUrl('https://phishing-youtube.com/embed')).toBe(false);
  });

  it('should reject null, undefined, or empty string inputs', () => {
    expect(isValidEmbedUrl(null)).toBe(false);
    expect(isValidEmbedUrl(undefined)).toBe(false);
    expect(isValidEmbedUrl('')).toBe(false);
  });
});
