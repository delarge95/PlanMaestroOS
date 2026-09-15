// src/utils/security.ts - Security validation utilities for dynamic embeds and external URLs

const ALLOWED_EMBED_DOMAINS = [
  'youtube.com',
  'www.youtube.com',
  'youtu.be',
  'vimeo.com',
  'player.vimeo.com',
  'v1.embednotion.com',
  'notion.so',
  'www.notion.so',
  'notion.site'
];

/**
 * Validates whether an embed URL is secure (HTTPS) and belongs to a whitelisted domain.
 * Prevents embedding dangerous protocols or unauthorized third-party domains in iframes.
 */
export function isValidEmbedUrl(url: string | null | undefined): boolean {
  if (!url) return false;

  const trimmed = url.trim();
  if (!trimmed.toLowerCase().startsWith('https://')) {
    return false;
  }

  try {
    const parsed = new URL(trimmed);
    const hostname = parsed.hostname.toLowerCase();

    return ALLOWED_EMBED_DOMAINS.some(
      domain => hostname === domain || hostname.endsWith(`.${domain}`)
    );
  } catch {
    return false;
  }
}
