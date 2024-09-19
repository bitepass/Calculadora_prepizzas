const CACHE_NAME = 'prepizzas-calculator-v1';
const urlsToCache = [
  '/Calculadora_prepizzas/',
  '/Calculadora_prepizzas/index.html',
  '/Calculadora_prepizzas/manifest.json',
  '/Calculadora_prepizzas/icon-192x192.png',
  '/Calculadora_prepizzas/icon-512x512.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => response || fetch(event.request))
  );
});