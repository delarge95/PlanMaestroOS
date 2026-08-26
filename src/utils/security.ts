// src/utils/security.ts - Security validation utilities for dynamic content and embeds

const ALLOWED_EMBED_DOMAINS = new Set([
  'youtube.com',
  'www.youtube.com',
  'youtu.be',
  'vimeo.com',
  'player.vimeo.com',
  'notion.so',
  'www.notion.so',
  'notion.site',
  'notion.com',
  'v1.embednotion.com'
]);

/**
 * Validates whether an embed URL is secure (HTTPS protocol and restricted to whitelisted domains).
 */
export function isValidEmbedUrl(url: string | null | undefined): boolean {
  if (!url || typeof url !== 'string') return false;

  try {
    const parsedUrl = new URL(url);
    if (parsedUrl.protocol !== 'https:') return false;

    const hostname = parsedUrl.hostname.toLowerCase();
    return (
      ALLOWED_EMBED_DOMAINS.has(hostname) ||
      Array.from(ALLOWED_EMBED_DOMAINS).some((domain) => hostname.endsWith(`.${domain}`))
    );
  } catch {
    return false;
  }
}
