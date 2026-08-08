/**
 * src/utils/security.ts
 * Reusable security validation utility for checking embed URLs.
 * Enforces HTTPS protocol and validates domains against a strict whitelist (Notion and YouTube).
 */

const ALLOWED_DOMAINS = [
  'youtube.com',
  'youtu.be',
  'notion.so',
  'notion.site',
  'notion.com',
  'v1.embednotion.com',
];

export function isValidEmbedUrl(urlStr: string): boolean {
  if (!urlStr) return false;

  try {
    const parsed = new URL(urlStr);

    // Enforce HTTPS
    if (parsed.protocol !== 'https:') {
      return false;
    }

    // Check if domain is allowed or is a subdomain of an allowed domain
    const hostname = parsed.hostname.toLowerCase();

    return ALLOWED_DOMAINS.some((domain) => {
      // Matches exactly the domain (e.g., youtube.com) or as a subdomain (e.g., www.youtube.com)
      return hostname === domain || hostname.endsWith(`.${domain}`);
    });
  } catch (error) {
    // If URL parsing fails, it's invalid
    return false;
  }
}
