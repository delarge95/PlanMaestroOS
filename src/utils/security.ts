const ALLOWED_EMBED_DOMAINS = [
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
 * Validates whether a URL string is a secure HTTPS embed URL belonging to allowed domains.
 */
export function isValidEmbedUrl(
  urlStr: string,
  allowedDomains: string[] = ALLOWED_EMBED_DOMAINS
): boolean {
  if (!urlStr || typeof urlStr !== 'string') return false;
  try {
    const parsedUrl = new URL(urlStr.trim());
    if (parsedUrl.protocol !== 'https:') return false;
    const hostname = parsedUrl.hostname.toLowerCase();
    return allowedDomains.some(
      (domain) => hostname === domain || hostname.endsWith('.' + domain)
    );
  } catch {
    return false;
  }
}
