// Service Worker for PWA
const CACHE_NAME = 'mbti-test-v4'; // 버전 업데이트로 캐시 무효화
const urlsToCache = [
  '/manifest.json',
  // Icons only - don't cache HTML pages
  '/favicon.ico',
  '/favicon-16x16.png',
  '/favicon-32x32.png',
  '/apple-touch-icon.png',
  '/android-chrome-192x192.png',
  '/android-chrome-512x512.png'
];

// Install event - cache static resources only
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(urlsToCache);
      })
      .then(() => self.skipWaiting()) // 즉시 활성화
  );
});

// Fetch event - Network First strategy for HTML, Cache First for static assets
self.addEventListener('fetch', (event) => {
  const request = event.request;
  
  // HTML 페이지는 항상 네트워크에서 먼저 가져오기 (캐싱하지 않음)
  if (request.mode === 'navigate' || request.headers.get('Accept')?.includes('text/html')) {
    event.respondWith(
      fetch(request)
        .then((response) => response)
        .catch(() => caches.match(request)) // 오프라인일 때만 캐시 사용
    );
    return;
  }

  // Next.js 정적 파일 (JS, CSS) - 캐시하지 않고 항상 네트워크
  if (request.url.includes('/_next/static/')) {
    event.respondWith(fetch(request));
    return;
  }

  // JavaScript 및 CSS 파일은 캐시하지 않음
  if (request.url.endsWith('.js') || request.url.endsWith('.css')) {
    event.respondWith(fetch(request));
    return;
  }

  // 아이콘 및 이미지 파일 - 캐시 우선 전략
  if (request.url.includes('favicon') || 
      request.url.includes('apple-touch-icon') || 
      request.url.includes('android-chrome') ||
      request.url.includes('.png') ||
      request.url.includes('.jpg') ||
      request.url.includes('.svg')) {
    event.respondWith(
      caches.match(request).then((response) => {
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

  // 그 외 요청은 네트워크 우선
  event.respondWith(
    fetch(request)
      .then((response) => response)
      .catch(() => caches.match(request))
  );
});

// Activate event - clean up old caches and claim clients
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
    }).then(() => self.clients.claim()) // 즉시 모든 클라이언트 제어
  );
});
