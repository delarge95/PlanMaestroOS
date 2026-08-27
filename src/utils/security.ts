// src/utils/security.ts
// Utility for validating dynamic embed URLs against strict HTTPS and domain whitelists

const ALLOWED_EMBED_DOMAINS = [
  'notion.so',
  'notion.site',
  'notion.com',
  'v1.embednotion.com',
  'youtube.com',
  'www.youtube.com',
  'youtu.be',
  'vimeo.com',
  'player.vimeo.com'
];

/**
 * Validates whether a given URL is safe for iframe embedding.
 * Enforces HTTPS protocol and domain whitelist matching.
 */
export function isValidEmbedUrl(urlStr: string): boolean {
  if (!urlStr || typeof urlStr !== 'string') return false;

  try {
    const parsed = new URL(urlStr.trim());

    // Enforce strict HTTPS protocol
    if (parsed.protocol !== 'https:') {
      return false;
    }

    const hostname = parsed.hostname.toLowerCase();

    // Check against allowed domain whitelist (exact or subdomains)
    return ALLOWED_EMBED_DOMAINS.some(
      (domain) => hostname === domain || hostname.endsWith(`.${domain}`)
    );
  } catch {
    return false;
  }
}
