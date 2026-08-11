// scripts/capture-saved.ts - Script de Ingesta Manual de Enlaces (FB/IG/YT)

import type { SavedItem } from '../src/data/gastronomy/types';

export function parseLinkToSavedItem(url: string, rawTitle?: string): SavedItem {
  let platform: SavedItem['platform'] = 'other';
  if (url.includes('youtube.com') || url.includes('youtu.be')) platform = 'yt';
  else if (url.includes('instagram.com')) platform = 'ig';
  else if (url.includes('facebook.com')) platform = 'fb';

  return {
    id: `saved-${Date.now()}`,
    url,
    platform,
    title: rawTitle || `Receta / Contenido guardado desde ${platform.toUpperCase()}`,
    category: 'Gastronomía',
    savedAt: new Date().toISOString().split('T')[0],
    status: 'queue'
  };
}

console.log('[Capture Saved] Validador de captura de enlaces activo.');
