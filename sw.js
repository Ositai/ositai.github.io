// 這是 PWA 安裝必備的 Service Worker
// 即使不快取任何檔案，也必須存在才能觸發安裝提示
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('v1').then(cache => {
      return cache.addAll([
        '/',
        '/index.html',
        '/manifest.json'
      ]);
    })
  );
  console.log('Service Worker installed');
});

self.addEventListener('fetch', (event) => {
  // 保持空邏輯即可
});
