// src/utils/security.ts - Security validation for dynamic embeds and external content

const ALLOWED_EMBED_DOMAINS = [
  'notion.so',
  'www.notion.so',
  'notion.site',
  'www.notion.site',
  'notion.com',
  'www.notion.com',
  'v1.embednotion.com',
  'embednotion.com',
  'youtube.com',
  'www.youtube.com',
  'm.youtube.com',
  'youtu.be',
  'vimeo.com',
  'www.vimeo.com',
  'player.vimeo.com'
];

/**
 * Validates that an embed URL uses HTTPS and belongs to a whitelisted third-party domain.
 */
export function isValidEmbedUrl(url: string | null | undefined): boolean {
  if (!url || typeof url !== 'string') return false;

  try {
    const parsed = new URL(url.trim());

    // Protocol must be strict HTTPS
    if (parsed.protocol !== 'https:') {
      return false;
    }

    const hostname = parsed.hostname.toLowerCase();

    return ALLOWED_EMBED_DOMAINS.some(
      (domain) => hostname === domain || hostname.endsWith(`.${domain}`)
    );
  } catch (_e) {
    return false;
  }
}
