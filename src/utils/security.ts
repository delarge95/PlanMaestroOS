// src/utils/security.ts - Security utilities for input validation and embed URL sanitization

const DEFAULT_ALLOWED_EMBED_DOMAINS = [
  'v1.embednotion.com',
  'notion.so',
  'www.notion.so',
  'notion.site',
  'notion.com',
  'www.notion.com',
  'youtube.com',
  'www.youtube.com',
  'youtu.be',
  'vimeo.com',
  'player.vimeo.com'
];

/**
 * Validates whether a URL is safe to embed in an iframe.
 * Enforces HTTPS protocol and domain whitelist check.
 */
export function isValidEmbedUrl(
  urlStr: string | null | undefined,
  allowedDomains: string[] = DEFAULT_ALLOWED_EMBED_DOMAINS
): boolean {
  if (!urlStr || typeof urlStr !== 'string') {
    return false;
  }

  try {
    const parsed = new URL(urlStr.trim());
    if (parsed.protocol !== 'https:') {
      return false;
    }

    const hostname = parsed.hostname.toLowerCase();
    return allowedDomains.some((domain) => hostname === domain || hostname.endsWith(`.${domain}`));
  } catch (_err) {
    return false;
  }
}
