import { describe, it, expect } from 'vitest';
import { isValidEmbedUrl } from '../security';

describe('security utils - isValidEmbedUrl', () => {
  it('permite URLs HTTPS de dominios permitidos (Notion, YouTube, Vimeo)', () => {
    expect(isValidEmbedUrl('https://v1.embednotion.com/embed/plan-maestro')).toBe(true);
    expect(isValidEmbedUrl('https://www.notion.so/my-workspace/page-123')).toBe(true);
    expect(isValidEmbedUrl('https://myworkspace.notion.site/page')).toBe(true);
    expect(isValidEmbedUrl('https://www.youtube.com/embed/d3_D18u_AUI')).toBe(true);
    expect(isValidEmbedUrl('https://youtu.be/d3_D18u_AUI')).toBe(true);
    expect(isValidEmbedUrl('https://player.vimeo.com/video/76979871')).toBe(true);
  });

  it('rechaza esquemas no HTTPS', () => {
    expect(isValidEmbedUrl('http://v1.embednotion.com/embed/plan-maestro')).toBe(false);
    expect(isValidEmbedUrl('javascript:alert(1)')).toBe(false);
    expect(isValidEmbedUrl('data:text/html,<script>alert(1)</script>')).toBe(false);
  });

  it('rechaza dominios no autorizados', () => {
    expect(isValidEmbedUrl('https://malicious-phishing-site.com/embed')).toBe(false);
    expect(isValidEmbedUrl('https://notion.so.attacker.com/page')).toBe(false);
  });

  it('maneja valores vacíos, nulos o malformados', () => {
    expect(isValidEmbedUrl(null)).toBe(false);
    expect(isValidEmbedUrl(undefined)).toBe(false);
    expect(isValidEmbedUrl('')).toBe(false);
    expect(isValidEmbedUrl('   ')).toBe(false);
    expect(isValidEmbedUrl('not-a-url')).toBe(false);
  });

  it('permite dominios personalizados opcionales', () => {
    expect(isValidEmbedUrl('https://trusted-domain.org/embed', ['trusted-domain.org'])).toBe(true);
    expect(isValidEmbedUrl('https://youtube.com/embed/123', ['trusted-domain.org'])).toBe(false);
  });
});
