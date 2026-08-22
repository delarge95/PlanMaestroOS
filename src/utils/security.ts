// src/utils/security.ts - Security utilities for input and embed URL validation

const ALLOWED_EMBED_DOMAINS = [
  'notion.so',
  'www.notion.so',
  'notion.site',
  'notion.com',
  'v1.embednotion.com',
  'youtube.com',
  'www.youtube.com',
  'youtu.be',
  'vimeo.com',
  'www.vimeo.com',
  'player.vimeo.com'
];

/**
 * Validates whether a given URL is safe for iframe embedding.
 * Ensures the scheme is strictly HTTPS and the hostname is in the allowed whitelist.
 */
export function isValidEmbedUrl(urlStr: string | null | undefined): boolean {
  if (!urlStr || typeof urlStr !== 'string') return false;

  try {
    const parsedUrl = new URL(urlStr);

    // Enforce strictly HTTPS protocol
    if (parsedUrl.protocol !== 'https:') {
      return false;
    }

    const hostname = parsedUrl.hostname.toLowerCase();

    // Check against allowed domain whitelist
    return ALLOWED_EMBED_DOMAINS.some(
      (allowedDomain) => hostname === allowedDomain || hostname.endsWith(`.${allowedDomain}`)
    );
  } catch (e) {
    // Malformed URL or relative URL without base
    return false;
  }
}
