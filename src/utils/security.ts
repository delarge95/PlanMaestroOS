// src/utils/security.ts
// Security helper functions for input validation and embed URL sanitization.

const ALLOWED_EMBED_DOMAINS = [
  'notion.so',
  'notion.site',
  'notion.com',
  'v1.embednotion.com',
  'youtube.com',
  'youtu.be',
  'vimeo.com',
  'player.vimeo.com'
];

/**
 * Validates whether a given URL is safe to embed in an iframe.
 * Ensures strict HTTPS protocol and hostname against white-listed domains.
 */
export function isValidEmbedUrl(url: string | null | undefined): boolean {
  if (!url || typeof url !== 'string') return false;

  try {
    const parsedUrl = new URL(url.trim());
    if (parsedUrl.protocol !== 'https:') {
      return false;
    }
    const hostname = parsedUrl.hostname.toLowerCase();
    return ALLOWED_EMBED_DOMAINS.some(
      domain => hostname === domain || hostname.endsWith('.' + domain)
    );
  } catch (e) {
    return false;
  }
}
