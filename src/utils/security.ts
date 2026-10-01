// src/utils/security.ts - Validador de URLs de Embebidos Seguros (§0.3 Sentinel)

export const DEFAULT_EMBED_ALLOWED_DOMAINS = [
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

/**
 * Valida si una URL dada es segura para embeber en un iframe.
 * Requiere protocolo HTTPS y coincidencia con la lista blanca de dominios permitidos.
 */
export function isValidEmbedUrl(
  urlStr: string | null | undefined,
  allowedDomains: string[] = DEFAULT_EMBED_ALLOWED_DOMAINS
): boolean {
  if (!urlStr || typeof urlStr !== 'string') return false;
  try {
    const parsed = new URL(urlStr);
    if (parsed.protocol !== 'https:') return false;
    const hostname = parsed.hostname.toLowerCase();
    return allowedDomains.some(
      (domain) => hostname === domain.toLowerCase() || hostname.endsWith(`.${domain.toLowerCase()}`)
    );
  } catch {
    return false;
  }
}
