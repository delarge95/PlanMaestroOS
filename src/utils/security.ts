/**
 * src/utils/security.ts - Reusable security validation utilities
 */

const TRUSTED_DOMAINS = [
  'notion.so',
  'notion.site',
  'notion.com',
  'v1.embednotion.com',
  'youtube.com',
  'youtu.be',
];

/**
 * Validates a third-party dynamic embed URL to enforce HTTPS and verify
 * that it belongs to one of our whitelisted trusted domains.
 */
export function isValidEmbedUrl(url: string | null | undefined): boolean {
  if (!url) return false;

  try {
    const parsed = new URL(url);

    // Only allow HTTPS protocol for embeds
    if (parsed.protocol !== 'https:') {
      return false;
    }

    const hostname = parsed.hostname.toLowerCase();

    // Match the hostname against whitelisted domains
    return TRUSTED_DOMAINS.some(domain => {
      // Exactly matches or ends with .domain (e.g. www.youtube.com matching youtube.com)
      return hostname === domain || hostname.endsWith('.' + domain);
    });
  } catch (err) {
    return false;
  }
}
