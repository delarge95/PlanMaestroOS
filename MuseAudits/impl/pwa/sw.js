// sw.js — service worker mínimo: app-shell offline, GLB/JSONs bajo demanda.
// Estrategias: shell (CacheFirst), /app/* (NetworkFirst+fallback shell),
// /models/*.glb y /*.json (CacheFirst con tope 50MB), fuentes (solo locales).
// Destino: public/sw.js + registro en BaseLayout (encargo M7). Revisar 41 §PWA.
const SHELL = 'pm-shell-v1';
const MEDIA = 'pm-media-v1';
const APP_SHELL = ['/app/today', '/app/offline'];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(SHELL).then((c) => c.addAll(APP_SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== SHELL && k !== MEDIA).map((k) => caches.delete(k))))
      .then(() => self.clients.claim()),
  );
});

self.addEventListener('fetch', (e) => {
  const url = new URL(e.request.url);
  if (url.origin !== self.location.origin) return; // G7: sin terceros
  if (/\.glb$|\.json$/.test(url.pathname)) {
    e.respondWith(caches.open(MEDIA).then((c) => c.match(e.request).then((hit) => hit ?? fetch(e.request).then((r) => {
      if (r.ok) c.put(e.request, r.clone());
      return r;
    }))));
    return;
  }
  e.respondWith(fetch(e.request).catch(() => caches.open(SHELL).then((c) => c.match('/app/offline'))));
});
