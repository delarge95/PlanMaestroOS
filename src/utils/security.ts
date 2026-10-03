/**
 * src/utils/security.ts
 * Reusable security validation utilities.
 */

const DEFAULT_ALLOWED_DOMAINS = [
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
 * Validates that an iframe embed URL uses HTTPS and matches a whitelisted domain.
 */
export function isValidEmbedUrl(url: string | null | undefined, customDomains?: string[]): boolean {
  if (!url || typeof url !== 'string') return false;
  try {
    const parsed = new URL(url.trim());
    if (parsed.protocol !== 'https:') return false;

    const domains = customDomains || DEFAULT_ALLOWED_DOMAINS;
    const hostname = parsed.hostname.toLowerCase();

    return domains.some(
      (domain) => hostname === domain.toLowerCase() || hostname.endsWith('.' + domain.toLowerCase())
    );
  } catch {
    return false;
  }
}
