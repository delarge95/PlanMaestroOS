// src/utils/security.ts - Safety validation for dynamic dynamic embed URLs

const ALLOWED_DOMAINS = [
  'youtube.com',
  'www.youtube.com',
  'youtu.be',
  'notion.so',
  'www.notion.so',
  'notion.site',
  'notion.com',
  'v1.embednotion.com',
  'vimeo.com',
  'www.vimeo.com',
  'player.vimeo.com'
];

/**
 * Validates third-party dynamic iframe URLs against a strict domain whitelist and protocol check (HTTPS).
 * Helps prevent dynamic iframe exploitation, Phishing, and SSRF.
 */
export function isValidEmbedUrl(urlStr: string): boolean {
  if (!urlStr) return false;

  try {
    const url = new URL(urlStr);

    // Enforce HTTPS
    if (url.protocol !== 'https:') {
      return false;
    }

    // Check if the hostname (ignoring case) is in the whitelist of domains
    const hostname = url.hostname.toLowerCase();
    return ALLOWED_DOMAINS.includes(hostname);
  } catch (error) {
    // If the URL cannot be parsed, it is invalid
    return false;
  }
}
