/**
 * Utility functions for security validation of inputs and embeds.
 */

const NOTION_ALLOWED_DOMAINS = [
  'notion.so',
  'notion.site',
  'notion.com',
  'v1.embednotion.com'
];

const YOUTUBE_ALLOWED_DOMAINS = [
  'youtube.com',
  'youtu.be'
];

/**
 * Validates whether a dynamic embed URL is safe according to the strict whitelist and protocol rules.
 *
 * @param url The input URL string to validate.
 * @param type The context of the embed ('notion' or 'youtube').
 * @returns boolean indicating if the URL is safe.
 */
export function isValidEmbedUrl(url: string, type: 'notion' | 'youtube'): boolean {
  if (!url) return false;

  try {
    const parsed = new URL(url);

    // Protocol must be strictly HTTPS
    if (parsed.protocol !== 'https:') {
      return false;
    }

    const hostname = parsed.hostname.toLowerCase();
    const allowedDomains = type === 'notion' ? NOTION_ALLOWED_DOMAINS : YOUTUBE_ALLOWED_DOMAINS;

    // Check if the hostname matches one of the allowed domains or is a subdomain of them
    return allowedDomains.some(domain => {
      return hostname === domain || hostname.endsWith('.' + domain);
    });
  } catch (error) {
    // If the string is not a valid URL (e.g. invalid format), reject it
    return false;
  }
}
