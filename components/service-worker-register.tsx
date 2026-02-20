"use client";

import { useEffect } from "react";

export function ServiceWorkerRegister() {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      // 개발 환경에서는 Service Worker 비활성화
      if (process.env.NODE_ENV === 'development') {
        console.log('Development mode: Service Worker disabled');
        // 기존 Service Worker 제거
        navigator.serviceWorker.getRegistrations().then((registrations) => {
          registrations.forEach((registration) => {
            registration.unregister();
          });
        });
        return;
      }

      navigator.serviceWorker.register('/sw.js')
        .then((registration) => {
          console.log('Service Worker registered successfully:', registration);
          
          // 새 버전 확인
          registration.addEventListener('updatefound', () => {
            const newWorker = registration.installing;
            if (newWorker) {
              newWorker.addEventListener('statechange', () => {
                if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                  // 새 버전이 설치됨 - 사용자에게 알림 또는 자동 새로고침
                  console.log('New version available! Refreshing...');
                  newWorker.postMessage({ type: 'SKIP_WAITING' });
                }
              });
            }
          });
          
          // 페이지 로드 시 업데이트 확인
          registration.update();
        })
        .catch((error) => {
          console.log('Service Worker registration failed:', error);
        });

      // Service Worker 업데이트 감지 시 자동 새로고침
      navigator.serviceWorker.addEventListener('controllerchange', () => {
        window.location.reload();
      });
    }
  }, []);

  return null; // This component doesn't render anything
}
