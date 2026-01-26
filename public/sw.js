// Service Worker for PWA
const CACHE_NAME = 'mbti-test-v3'; // 버전 업데이트로 캐시 무효화
const urlsToCache = [
  '/',
  '/test',
  '/types',
  '/about',
  '/contact',
  '/privacy-policy',
  '/terms-of-service',
  '/manifest.json',
  // Icons - cache with proper strategy
  '/favicon.ico',
  '/favicon-16x16.png',
  '/favicon-32x32.png',
  '/apple-touch-icon.png',
  '/android-chrome-192x192.png',
  '/android-chrome-512x512.png'
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

// Fetch event - serve from cache when offline
self.addEventListener('fetch', (event) => {
  const request = event.request;
  
  // JavaScript 및 CSS 파일은 캐시하지 않고 항상 네트워크에서 가져옴
  if (request.url.includes('/_next/static/') ||
      request.url.includes('.js') ||
      request.url.includes('.css')) {
    return; // Service Worker 캐시 사용 안 함
  }

  // 아이콘 파일에 대한 특별 처리
  if (request.url.includes('favicon') || 
      request.url.includes('apple-touch-icon') || 
      request.url.includes('android-chrome')) {
    event.respondWith(
      caches.match(request).then((response) => {
        // 캐시된 버전이 있으면 사용, 없으면 네트워크에서 가져와 캐시
        if (response) {
          return response;
        }
        return fetch(request).then((networkResponse) => {
          if (networkResponse.ok) {
            const responseClone = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(request, responseClone);
            });
          }
          return networkResponse;
        });
      })
    );
    return;
  }

  // 다른 정적 파일에 대한 일반적인 캐시 전략
  event.respondWith(
    caches.match(request)
      .then((response) => {
        // Return cached version or fetch from network
        return response || fetch(request);
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