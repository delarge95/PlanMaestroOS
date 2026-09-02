/**
 * Security Utility: Validates third-party embed URLs to ensure HTTPS protocol
 * and domain whitelisting to protect against open redirects and XSS injection.
 */

const DEFAULT_ALLOWED_EMBED_DOMAINS = [
  'notion.so',
  'notion.site',
  'notion.com',
  'v1.embednotion.com',
  'youtube.com',
  'www.youtube.com',
  'youtu.be',
  'vimeo.com',
  'player.vimeo.com'
];

export function isValidEmbedUrl(
  url: string | null | undefined,
  allowedDomains: string[] = DEFAULT_ALLOWED_EMBED_DOMAINS
): boolean {
  if (!url || typeof url !== 'string') return false;

  try {
    const parsed = new URL(url);
    if (parsed.protocol !== 'https:') {
      return false;
    }

    const hostname = parsed.hostname.toLowerCase();
    return allowedDomains.some((domain) => hostname === domain || hostname.endsWith('.' + domain));
  } catch {
    return false;
  }
}
