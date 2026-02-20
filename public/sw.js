// Service Worker for PWA
const CACHE_VERSION = '1.0.0'; // 메이저 업데이트 시 변경
const CACHE_NAME = `mbti-test-v${CACHE_VERSION}-${Date.now()}`; // 타임스탬프로 항상 새 캐시
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

// SKIP_WAITING 메시지 처리 - 즉시 활성화
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

// Install event - cache static resources only
self.addEventListener('install', (event) => {
  console.log('[SW] Installing new service worker...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('[SW] Caching static assets');
        return cache.addAll(urlsToCache);
      })
      .then(() => {
        console.log('[SW] Skip waiting - activate immediately');
        return self.skipWaiting();
      })
  );
});

// Fetch event - Network First strategy for HTML, Cache First for static assets
self.addEventListener('fetch', (event) => {
  const request = event.request;
  const url = new URL(request.url);
  
  // non-GET 요청은 캐시하지 않음
  if (request.method !== 'GET') {
    return;
  }

  // HTML 페이지는 항상 네트워크에서 먼저 가져오기 (절대 캐싱하지 않음)
  if (request.mode === 'navigate' || request.headers.get('Accept')?.includes('text/html')) {
    event.respondWith(
      fetch(request, { cache: 'no-store' }) // 강제로 캐시 사용 안 함
        .catch(() => {
          // 네트워크 실패 시에만 캐시 확인
          return caches.match(request);
        })
    );
    return;
  }

  // Next.js 빌드 파일 (/_next/) - 절대 캐싱하지 않음
  if (url.pathname.startsWith('/_next/')) {
    event.respondWith(
      fetch(request, { cache: 'no-store' })
        .catch(() => caches.match(request))
    );
    return;
  }

  // JavaScript, CSS, JSON 파일 - 절대 캐싱하지 않음
  if (url.pathname.endsWith('.js') || 
      url.pathname.endsWith('.css') || 
      url.pathname.endsWith('.json') ||
      url.pathname.endsWith('.map')) {
    event.respondWith(
      fetch(request, { cache: 'no-store' })
        .catch(() => caches.match(request))
    );
    return;
  }

  // API 요청은 캐시하지 않음
  if (url.pathname.includes('/api/')) {
    event.respondWith(
      fetch(request, { cache: 'no-store' })
        .catch(() => caches.match(request))
    );
    return;
  }

  // 아이콘 및 이미지 파일만 캐시 우선 전략
  if (url.pathname.includes('favicon') || 
      url.pathname.includes('apple-touch-icon') || 
      url.pathname.includes('android-chrome') ||
      url.pathname.match(/\.(png|jpg|jpeg|svg|webp|ico)$/)) {
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

  // 그 외 모든 요청은 네트워크 우선 (캐시 사용 안 함)
  event.respondWith(
    fetch(request, { cache: 'no-store' })
      .catch(() => caches.match(request))
  );
});

// Activate event - clean up old caches and claim clients
self.addEventListener('activate', (event) => {
  console.log('[SW] Activating new service worker...');
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('[SW] Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
      console.log('[SW] Claiming all clients');
      return self.clients.claim();
    })
  );
});
