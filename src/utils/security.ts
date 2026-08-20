/**
 * src/utils/security.ts
 * Security utility for validating third-party dynamic iframe / embed URLs.
 */

const DEFAULT_ALLOWED_EMBED_DOMAINS = [
  'youtube.com',
  'www.youtube.com',
  'youtu.be',
  'vimeo.com',
  'player.vimeo.com',
  'notion.so',
  'www.notion.so',
  'notion.site',
  'notion.com',
  'v1.embednotion.com'
];

/**
 * Validates that an embed URL uses HTTPS protocol and matches allowed domain patterns.
 */
export function isValidEmbedUrl(url: string | null | undefined, customAllowedDomains?: string[]): boolean {
  if (!url || typeof url !== 'string') return false;

  try {
    const parsed = new URL(url.trim());
    if (parsed.protocol !== 'https:') {
      return false;
    }

    const domains = customAllowedDomains || DEFAULT_ALLOWED_EMBED_DOMAINS;
    const hostname = parsed.hostname.toLowerCase();

    return domains.some(domain => hostname === domain || hostname.endsWith(`.${domain}`));
  } catch {
    return false;
  }
}
