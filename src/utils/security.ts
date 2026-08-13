// src/utils/security.ts - Secure embed URL validation utility

const ALLOWED_DOMAINS = [
  'notion.so',
  'notion.site',
  'notion.com',
  'v1.embednotion.com',
  'youtube.com',
  'youtu.be',
  'vimeo.com',
  'player.vimeo.com',
];

/**
 * Validates third-party dynamic iframe URLs against a strict domain whitelist and enforces HTTPS protocol.
 * @param url String representing the URL to be validated
 * @returns boolean indicating if the URL is secure and whitelisted
 */
export function isValidEmbedUrl(url: string | null | undefined): boolean {
  if (!url) return false;

  try {
    const parsedUrl = new URL(url);

    // Enforce HTTPS protocol
    if (parsedUrl.protocol !== 'https:') {
      return false;
    }

    const hostname = parsedUrl.hostname.toLowerCase();

    // Check if hostname matches or ends with any of the allowed domains
    return ALLOWED_DOMAINS.some((domain) => {
      return hostname === domain || hostname.endsWith('.' + domain);
    });
  } catch (e) {
    return false;
  }
}
