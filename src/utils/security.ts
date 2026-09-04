/**
 * Security utilities for validating third-party embed URLs and inputs.
 */

// Allowed domains for dynamic embed IFrames (e.g., Notion, YouTube, Vimeo)
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
 * Validates whether a given URL is safe for embedding in an iframe.
 * Requires HTTPS protocol and a domain from the whitelist.
 */
export function isValidEmbedUrl(url: string | null | undefined): boolean {
  if (!url || typeof url !== 'string') return false;

  try {
    const parsed = new URL(url);

    // Enforce HTTPS protocol
    if (parsed.protocol !== 'https:') {
      return false;
    }

    const hostname = parsed.hostname.toLowerCase();

    // Check if hostname matches allowed whitelist or is a valid subdomain of an allowed domain
    return ALLOWED_EMBED_DOMAINS.some(
      (domain) => hostname === domain || hostname.endsWith('.' + domain)
    );
  } catch (e) {
    // Malformed URL
    return false;
  }
}
