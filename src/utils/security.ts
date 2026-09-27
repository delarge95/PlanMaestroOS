/**
 * Security validation utility for third-party embeds (iframes).
 * Enforces HTTPS protocol and domain whitelisting to mitigate XSS and unauthorized embed risks.
 */

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

export function isValidEmbedUrl(url: string | null | undefined): boolean {
  if (!url || typeof url !== 'string') return false;

  try {
    const parsed = new URL(url);

    // Enforce HTTPS
    if (parsed.protocol !== 'https:') {
      return false;
    }

    const hostname = parsed.hostname.toLowerCase();

    // Check if hostname matches or is a subdomain of an allowed domain
    return ALLOWED_EMBED_DOMAINS.some(
      (allowedDomain) => hostname === allowedDomain || hostname.endsWith(`.${allowedDomain}`)
    );
  } catch (e) {
    return false;
  }
}
