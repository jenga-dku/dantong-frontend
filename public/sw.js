importScripts(
  'https://storage.googleapis.com/workbox-cdn/releases/6.5.4/workbox-sw.js',
);

const CACHE_NAME = 'cache';

const PRECACHE_ASSETS = ['/assets/', '/src/'];

self.addEventListener('install', (event) => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(CACHE_NAME);
      cache.addAll(PRECACHE_ASSETS);
    })(),
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

    registration.showNotification('Hello!', {
      body: 'This is a push notification!',
    }),
      self.addEventListener('push', () => {
        event.waitUntil(
          registration.showNotification('Hello!', {
            body: 'This is a push notification!',
          }),
        );
      });

workbox.precaching.precacheAndRoute(self.__WB_MANIFEST || []);
