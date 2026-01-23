// Service Worker for PWA
const CACHE_NAME = 'mbti-test-v2'; // 버전 업데이트로 캐시 무효화
const urlsToCache = [
  '/',
  '/test',
  '/types',
  '/about',
  '/contact',
  '/privacy-policy',
  '/terms-of-service',
  '/manifest.json'
];

// Install event - cache resources
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(urlsToCache);
      })
  );
});

// Fetch event - serve from cache when offline (JavaScript 파일 제외)
self.addEventListener('fetch', (event) => {
  // JavaScript 파일은 캐시하지 않고 항상 네트워크에서 가져옴
  if (event.request.url.includes('/_next/static/') ||
      event.request.url.includes('.js') ||
      event.request.url.includes('.css')) {
    return; // Service Worker 캐시 사용 안 함
  }

  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Return cached version or fetch from network
        return response || fetch(event.request);
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});