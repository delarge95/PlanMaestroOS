// src/utils/security.ts - Security utilities for input and URL validation

const DEFAULT_ALLOWED_EMBED_DOMAINS = [
  'youtube.com',
  'www.youtube.com',
  'youtu.be',
  'player.vimeo.com',
  'vimeo.com',
  'v1.embednotion.com',
  'notion.so',
  'notion.site',
  'www.notion.so'
];

/**
 * Validates whether a URL is safe to embed in an iframe.
 * Checks for valid HTTPS protocol and domain whitelist.
 */
export function isValidEmbedUrl(
  url: string | null | undefined,
  allowedDomains: string[] = DEFAULT_ALLOWED_EMBED_DOMAINS
): boolean {
  if (!url || typeof url !== 'string') return false;

  try {
    const parsedUrl = new URL(url);

    // Enforce HTTPS protocol for dynamic embeds
    if (parsedUrl.protocol !== 'https:') {
      return false;
    }

    const hostname = parsedUrl.hostname.toLowerCase();

    // Verify hostname is in allowed domains list or is a subdomain of an allowed domain
    return allowedDomains.some((domain) => {
      const cleanDomain = domain.toLowerCase();
      return hostname === cleanDomain || hostname.endsWith('.' + cleanDomain);
    });
  } catch {
    return false;
  }
}
