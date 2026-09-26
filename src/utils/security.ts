// src/utils/security.ts - Security utilities for input and URL validation

const ALLOWED_EMBED_DOMAINS = [
  'youtube.com',
  'www.youtube.com',
  'youtu.be',
  'player.vimeo.com',
  'vimeo.com',
  'notion.so',
  'www.notion.so',
  'notion.site',
  'v1.embednotion.com',
];

/**
 * Validates whether a given URL is a valid, secure HTTPS embed URL
 * from an allowed domain list.
 */
export function isValidEmbedUrl(urlString?: string | null): boolean {
  if (!urlString || typeof urlString !== 'string') return false;

  try {
    const parsed = new URL(urlString);

    // Enforce HTTPS protocol
    if (parsed.protocol !== 'https:') {
      return false;
    }

    const hostname = parsed.hostname.toLowerCase();

    // Check if hostname matches any allowed domain or subdomain thereof
    return ALLOWED_EMBED_DOMAINS.some(domain =>
      hostname === domain || hostname.endsWith(`.${domain}`)
    );
  } catch (e) {
    return false;
  }
}
