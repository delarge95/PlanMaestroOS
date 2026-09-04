import { describe, it, expect } from 'vitest';
import { isValidEmbedUrl } from '../security';

describe('isValidEmbedUrl', () => {
  it('allows valid Notion embed URLs', () => {
    expect(isValidEmbedUrl('https://v1.embednotion.com/embed/plan-maestro')).toBe(true);
    expect(isValidEmbedUrl('https://myworkspace.notion.site/page-123')).toBe(true);
    expect(isValidEmbedUrl('https://notion.so/my-page')).toBe(true);
  });

  it('allows valid YouTube and Vimeo URLs', () => {
    expect(isValidEmbedUrl('https://www.youtube.com/embed/dQw4w9WgXcQ')).toBe(true);
    expect(isValidEmbedUrl('https://player.vimeo.com/video/12345678')).toBe(true);
  });

  it('rejects HTTP non-secure URLs', () => {
    expect(isValidEmbedUrl('http://v1.embednotion.com/embed/plan-maestro')).toBe(false);
    expect(isValidEmbedUrl('http://www.youtube.com/embed/dQw4w9WgXcQ')).toBe(false);
  });

  it('rejects unwhitelisted untrusted domains', () => {
    expect(isValidEmbedUrl('https://malicious-site.com/phishing')).toBe(false);
    expect(isValidEmbedUrl('https://evilnotion.com/embed')).toBe(false);
  });

  it('rejects javascript: and data: URIs', () => {
    expect(isValidEmbedUrl('javascript:alert(1)')).toBe(false);
    expect(isValidEmbedUrl('data:text/html,<script>alert(1)</script>')).toBe(false);
  });

  it('handles empty or non-string inputs safely', () => {
    expect(isValidEmbedUrl('')).toBe(false);
    expect(isValidEmbedUrl(null)).toBe(false);
    expect(isValidEmbedUrl(undefined)).toBe(false);
  });
});
