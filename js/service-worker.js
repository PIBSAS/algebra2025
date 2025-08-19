const CACHE_NAME = "algebra-2025-cache-v1";
const urlsToCache = [
  "/algebra2025/",
  "/algebra2025/index.html",
  "/algebra2025/styles.css",
  "/algebra2025/script.js",
  "/algebra2025/android-chrome-192x192.png",
  "/algebra2025/android-chrome-512x512.png"
];

// Instalar y cachear archivos iniciales
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

// Activar y limpiar cachés viejos
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            return caches.delete(cache);
          }
        })
      )
    )
  );
});

// Interceptar peticiones y responder con caché si existe
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
