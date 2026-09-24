/**
 * Security validation utility for dynamic third-party embed URLs.
 */

export type AllowedEmbedType = 'notion' | 'youtube' | 'vimeo';

const ALLOWED_DOMAINS: Record<AllowedEmbedType, string[]> = {
  notion: ['notion.so', 'notion.site', 'notion.com', 'v1.embednotion.com'],
  youtube: ['youtube.com', 'www.youtube.com', 'youtu.be', 'www.youtube-nocookie.com'],
  vimeo: ['vimeo.com', 'player.vimeo.com']
};

/**
 * Validates whether a URL is a secure HTTPS embed URL from an allowed provider domain.
 */
export function isValidEmbedUrl(
  url: string | null | undefined,
  allowedTypes?: AllowedEmbedType[]
): boolean {
  if (!url || typeof url !== 'string') {
    return false;
  }

  try {
    const parsed = new URL(url);

    // Require HTTPS scheme to prevent insecure content / javascript: execution
    if (parsed.protocol !== 'https:') {
      return false;
    }

    const hostname = parsed.hostname.toLowerCase();
    const typesToCheck = allowedTypes ?? (['notion', 'youtube', 'vimeo'] as AllowedEmbedType[]);

    return typesToCheck.some((type) => {
      const allowedList = ALLOWED_DOMAINS[type];
      return allowedList ? allowedList.some((domain) => hostname === domain || hostname.endsWith('.' + domain)) : false;
    });
  } catch (error) {
    // Return false if URL parsing fails
    return false;
  }
}
