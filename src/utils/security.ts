// src/utils/security.ts
// Strict security validation utility for dynamic dynamic embeds (iframes, etc.)

const WHITELISTED_DOMAINS = [
  'notion.so',
  'notion.site',
  'notion.com',
  'v1.embednotion.com',
  'youtube.com',
  'youtu.be',
  'vimeo.com',
  'player.vimeo.com'
];

/**
 * Validates whether a given URL is secure and matches the whitelisted domains.
 * Enforces HTTPS protocol and domain matching.
 */
export function isValidEmbedUrl(urlStr: string | null | undefined): boolean {
  if (!urlStr) return false;

  try {
    const parsedUrl = new URL(urlStr);

    // Only allow HTTPS protocol
    if (parsedUrl.protocol !== 'https:') {
      return false;
    }

    const hostname = parsedUrl.hostname.toLowerCase();

    // Check if hostname matches any whitelisted domain or its subdomains
    return WHITELISTED_DOMAINS.some(domain => {
      return hostname === domain || hostname.endsWith('.' + domain);
    });
  } catch (e) {
    // Return false for any malformed URLs
    return false;
  }
}
