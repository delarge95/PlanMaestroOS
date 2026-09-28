// src/utils/security.ts - Security validation utilities for iframe dynamic embeds and external content

const ALLOWED_EMBED_DOMAINS = [
  'notion.so',
  'notion.site',
  'notion.com',
  'v1.embednotion.com',
  'youtube.com',
  'www.youtube.com',
  'youtu.be',
  'vimeo.com',
  'player.vimeo.com',
];

/**
 * Validates whether a given URL is safe for iframe embedding.
 * Ensures strict HTTPS scheme and allowed target domain hostnames.
 */
export function isValidEmbedUrl(url: string | null | undefined): boolean {
  if (!url || typeof url !== 'string') return false;

  try {
    const parsed = new URL(url);

    // Require strict HTTPS protocol
    if (parsed.protocol !== 'https:') {
      return false;
    }

    const hostname = parsed.hostname.toLowerCase();

    // Verify against allowed domains (or exact subdomains)
    return ALLOWED_EMBED_DOMAINS.some(
      (domain) => hostname === domain || hostname.endsWith(`.${domain}`)
    );
  } catch {
    return false;
  }
}
