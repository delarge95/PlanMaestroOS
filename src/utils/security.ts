/**
 * src/utils/security.ts
 *
 * Utilidad de seguridad para la validación y saneamiento de URLs de incrustación (iFrames).
 * Previene vulnerabilidades de Cross-Site Scripting (XSS), Clickjacking e Inyección de Protocolos.
 */

export const ALLOWED_EMBED_DOMAINS = [
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
 * Valida si una URL es segura para ser cargada en un iFrame.
 * - Requiere protocolo HTTPS estricto.
 * - Requiere que el dominio corresponda a la lista blanca de dominios permitidos.
 */
export function isValidEmbedUrl(rawUrl: string, customAllowedDomains?: string[]): boolean {
  if (!rawUrl || typeof rawUrl !== 'string') return false;

  try {
    const parsed = new URL(rawUrl.trim());

    // Exigir protocolo HTTPS
    if (parsed.protocol !== 'https:') {
      return false;
    }

    const domains = customAllowedDomains || ALLOWED_EMBED_DOMAINS;
    const hostname = parsed.hostname.toLowerCase();

    // Validar concordancia exacta o subdominio legítimo
    return domains.some((domain) => {
      const cleanDomain = domain.toLowerCase();
      return hostname === cleanDomain || hostname.endsWith(`.${cleanDomain}`);
    });
  } catch (_e) {
    // Si la URL no se puede parsear, es inválida
    return false;
  }
}
