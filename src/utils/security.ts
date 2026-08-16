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
 * Validates whether an embed URL is safe to render in an iframe.
 * Ensures HTTPS protocol and matches against a list of allowed domain names.
 */
export function isValidEmbedUrl(
  rawUrl: string,
  allowedDomains: string[] = DEFAULT_ALLOWED_DOMAINS
): boolean {
  if (!rawUrl || typeof rawUrl !== 'string') return false;

  try {
    const parsed = new URL(rawUrl.trim());
    if (parsed.protocol !== 'https:') {
      return false;
    }

    const hostname = parsed.hostname.toLowerCase();
    return allowedDomains.some(
      (domain) => hostname === domain || hostname.endsWith(`.${domain}`)
    );
  } catch {
    return false;
  }
}
