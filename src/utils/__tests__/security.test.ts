import { describe, it, expect } from 'vitest';
import { isValidEmbedUrl, DEFAULT_EMBED_ALLOWED_DOMAINS } from '../security';

describe('isValidEmbedUrl - Security Embed URL Validator', () => {
  it('permite URLs válidas HTTPS de dominios permitidos', () => {
    expect(isValidEmbedUrl('https://v1.embednotion.com/embed/plan-maestro')).toBe(true);
    expect(isValidEmbedUrl('https://www.notion.so/my-workspace/page-123')).toBe(true);
    expect(isValidEmbedUrl('https://sub.notion.site/doc')).toBe(true);
    expect(isValidEmbedUrl('https://www.youtube.com/embed/dQw4w9WgXcQ')).toBe(true);
    expect(isValidEmbedUrl('https://youtu.be/dQw4w9WgXcQ')).toBe(true);
    expect(isValidEmbedUrl('https://player.vimeo.com/video/12345678')).toBe(true);
  });

  it('rechaza URLs HTTP sin cifrado (requiere HTTPS)', () => {
    expect(isValidEmbedUrl('http://v1.embednotion.com/embed/plan-maestro')).toBe(false);
    expect(isValidEmbedUrl('http://www.youtube.com/embed/dQw4w9WgXcQ')).toBe(false);
  });

  it('rechaza esquemas peligrosos como javascript: y data:', () => {
    expect(isValidEmbedUrl('javascript:alert(1)')).toBe(false);
    expect(isValidEmbedUrl('data:text/html,<script>alert(1)</script>')).toBe(false);
  });

  it('rechaza dominios no autorizados (previene SSRF e iframe injection)', () => {
    expect(isValidEmbedUrl('https://evil-phishing-site.com/notion')).toBe(false);
    expect(isValidEmbedUrl('https://notion.so.malicious.com')).toBe(false);
    expect(isValidEmbedUrl('https://google.com')).toBe(false);
  });

  it('maneja valores nulos, indefinidos o vacíos de forma segura', () => {
    expect(isValidEmbedUrl(null)).toBe(false);
    expect(isValidEmbedUrl(undefined)).toBe(false);
    expect(isValidEmbedUrl('')).toBe(false);
    expect(isValidEmbedUrl('   ')).toBe(false);
  });

  it('soporta lista de dominios personalizada', () => {
    const customDomains = ['custom-embed.org'];
    expect(isValidEmbedUrl('https://custom-embed.org/view', customDomains)).toBe(true);
    expect(isValidEmbedUrl('https://sub.custom-embed.org/view', customDomains)).toBe(true);
    expect(isValidEmbedUrl('https://notion.so/doc', customDomains)).toBe(false);
  });
});
