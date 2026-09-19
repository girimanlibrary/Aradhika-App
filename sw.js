// Minimal service worker — only exists so the browser can install this as an app.
// It does not cache data; the app always talks to Supabase live over the internet.
self.addEventListener("install", (e) => { self.skipWaiting(); });
self.addEventListener("activate", (e) => { self.clients.claim(); });
self.addEventListener("fetch", (e) => {
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});
