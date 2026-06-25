/* MeikkuLog service worker — offline-tuki.
   Network-first: verkossa saa aina tuoreimman version, offline-tilassa
   palautetaan välimuistista. Sovellus on yhdessä index.html-tiedostossa. */
const CACHE = 'meikkulog-v1';
const CORE = ['./', './index.html'];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(CORE)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  e.respondWith(
    fetch(req).then(res => {
      const copy = res.clone();
      caches.open(CACHE).then(c => { try { c.put(req, copy); } catch (_) {} });
      return res;
    }).catch(() =>
      caches.match(req).then(cached => cached || caches.match('./index.html'))
    )
  );
});
