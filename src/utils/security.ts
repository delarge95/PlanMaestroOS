// src/utils/security.ts

/**
 * Validates whether a given URL is safe for iframe embedding.
 * Enforces HTTPS protocol and checks against an explicit whitelist of trusted embed providers
 * (Notion, YouTube, Vimeo).
 */
const ALLOWED_EMBED_DOMAINS = [
  'notion.so',
  'notion.site',
  'notion.com',
  'v1.embednotion.com',
  'youtube.com',
  'youtu.be',
  'youtube-nocookie.com',
  'vimeo.com',
  'player.vimeo.com'
];

export function isValidEmbedUrl(urlStr: string): boolean {
  if (!urlStr || typeof urlStr !== 'string') {
    return false;
  }

  try {
    const parsed = new URL(urlStr);

    // Require HTTPS
    if (parsed.protocol !== 'https:') {
      return false;
    }

    const hostname = parsed.hostname.toLowerCase();

    return ALLOWED_EMBED_DOMAINS.some(
      (domain) => hostname === domain || hostname.endsWith(`.${domain}`)
    );
  } catch {
    return false;
  }
}
