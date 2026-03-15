// 這是 PWA 安裝必備的 Service Worker
// 即使不快取任何檔案，也必須存在才能觸發安裝提示
self.addEventListener('install', (event) => {
  console.log('Service Worker installed');
});

self.addEventListener('fetch', (event) => {
  // 保持空邏輯即可
});
