// src/utils/security.ts - Security utilities for embed URL validation

export const ALLOWED_EMBED_DOMAINS = [
  'youtube.com',
  'www.youtube.com',
  'youtu.be',
  'vimeo.com',
  'player.vimeo.com',
  'notion.so',
  'www.notion.so',
  'notion.site',
  'v1.embednotion.com',
  'notion.com'
];

/**
 * Validates whether an embed URL uses HTTPS and matches allowed trusted domains.
 * Prevents dangerous URI schemes (javascript:, data:) and open redirect / untrusted iframe embeds.
 */
export function isValidEmbedUrl(
  urlStr?: string | null,
  allowedDomains: string[] = ALLOWED_EMBED_DOMAINS
): boolean {
  if (!urlStr) return false;

  try {
    const parsed = new URL(urlStr);

    // Only HTTPS URLs are allowed for external embeds
    if (parsed.protocol !== 'https:') {
      return false;
    }

    const hostname = parsed.hostname.toLowerCase();

    // Check if host matches or ends with an allowed domain (handling subdomains correctly)
    return allowedDomains.some(domain => {
      const cleanDomain = domain.toLowerCase();
      return hostname === cleanDomain || hostname.endsWith(`.${cleanDomain}`);
    });
  } catch {
    return false;
  }
}
