import { describe, it, expect } from 'vitest';
import { isValidEmbedUrl } from '../security';

describe('isValidEmbedUrl', () => {
  it('should return false for empty or non-string inputs', () => {
    expect(isValidEmbedUrl('')).toBe(false);
    expect(isValidEmbedUrl(null as any)).toBe(false);
    expect(isValidEmbedUrl(undefined as any)).toBe(false);
  });

  it('should return false for malformed URLs', () => {
    expect(isValidEmbedUrl('not-a-url')).toBe(false);
    expect(isValidEmbedUrl('https://')).toBe(false);
    expect(isValidEmbedUrl('://youtube.com')).toBe(false);
  });

  it('should return false for URLs using insecure HTTP or non-HTTPS protocols', () => {
    expect(isValidEmbedUrl('http://youtube.com')).toBe(false);
    expect(isValidEmbedUrl('http://v1.embednotion.com')).toBe(false);
    expect(isValidEmbedUrl('ftp://youtube.com')).toBe(false);
  });

  it('should return true for valid whitelisted domains with HTTPS', () => {
    // YouTube
    expect(isValidEmbedUrl('https://youtube.com/embed/12345')).toBe(true);
    expect(isValidEmbedUrl('https://www.youtube.com/watch?v=12345')).toBe(true);
    expect(isValidEmbedUrl('https://youtu.be/12345')).toBe(true);

    // Notion
    expect(isValidEmbedUrl('https://notion.so/my-workspace')).toBe(true);
    expect(isValidEmbedUrl('https://www.notion.so/page')).toBe(true);
    expect(isValidEmbedUrl('https://notion.site/shared-doc')).toBe(true);
    expect(isValidEmbedUrl('https://notion.com/home')).toBe(true);
    expect(isValidEmbedUrl('https://v1.embednotion.com/embed/plan-maestro')).toBe(true);

    // Vimeo
    expect(isValidEmbedUrl('https://vimeo.com/12345')).toBe(true);
    expect(isValidEmbedUrl('https://www.vimeo.com/12345')).toBe(true);
    expect(isValidEmbedUrl('https://player.vimeo.com/video/12345')).toBe(true);
  });

  it('should return false for domains outside the whitelist, even if they contain keywords or are subdomains of unauthorized domains', () => {
    expect(isValidEmbedUrl('https://attacker.com')).toBe(false);
    expect(isValidEmbedUrl('https://fakeyoutube.com')).toBe(false);
    expect(isValidEmbedUrl('https://youtube.com.attacker.com')).toBe(false);
    expect(isValidEmbedUrl('https://notion.so.attacker.com/page')).toBe(false);
    expect(isValidEmbedUrl('https://notion-api.com')).toBe(false);
  });

  it('should handle case insensitivity for hostname and protocol', () => {
    expect(isValidEmbedUrl('HTTPS://YOUTUBE.COM/embed/12345')).toBe(true);
    expect(isValidEmbedUrl('https://WWW.NOTION.SO/page')).toBe(true);
  });
});
