/**
 * Utility functions for security validation and URL sanitization.
 */

/**
 * Validates whether an embed URL uses a secure HTTPS scheme and matches allowed domains.
 * Prevents XSS via javascript: or data: schemes, open redirects, and untrusted iframe embeds.
 */
export function isValidEmbedUrl(url: string | null | undefined, allowedDomains: string[]): boolean {
  if (!url || typeof url !== 'string') return false;

  try {
    const parsed = new URL(url);

    // Enforce HTTPS protocol
    if (parsed.protocol !== 'https:') {
      return false;
    }

    const hostname = parsed.hostname.toLowerCase();

    // Check if hostname matches or ends with any allowed domain (e.g. notion.so or .notion.so)
    return allowedDomains.some((domain) => {
      const d = domain.toLowerCase();
      return hostname === d || hostname.endsWith(`.${d}`);
    });
  } catch {
    return false;
  }
}
