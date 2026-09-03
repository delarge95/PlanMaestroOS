/**
 * src/utils/security.ts
 * Security helper utilities for input validation and sanitization.
 */

const ALLOWED_EMBED_DOMAINS = [
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
];

/**
 * Validates whether a given URL is safe for rendering inside an iframe embed.
 * Ensures the URL uses HTTPS protocol and matches an allowed domain whitelist.
 */
export function isValidEmbedUrl(urlStr?: string | null): boolean {
  if (!urlStr || typeof urlStr !== 'string') return false;

  try {
    const parsed = new URL(urlStr.trim());
    if (parsed.protocol !== 'https:') {
      return false;
    }

    const hostname = parsed.hostname.toLowerCase();
    return ALLOWED_EMBED_DOMAINS.some(domain =>
      hostname === domain || hostname.endsWith(`.${domain}`)
    );
  } catch {
    return false;
  }
}
