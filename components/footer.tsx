"use client";

import React from 'react';

export function Footer() {
  return (
    <footer className="bg-black/20 backdrop-blur-md border-t border-white/10 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-400 text-sm">
              © 2026 MBTI 성격 유형 테스트. All rights reserved.
            </p>
          </div>
            <div className="flex space-x-6">
              <a href="/about" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
                About
              </a>
              <a href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
                개인정보<br className="sm:hidden" />처리방침
              </a>
              <a href="/terms-of-service" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
                이용<br className="sm:hidden" />약관
              </a>
              <a href="/contact" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
                문의<br className="sm:hidden" />하기
              </a>
            </div>
        </div>
        <div className="mt-6 pt-6 border-t border-white/10">
          <p className="text-gray-500 text-xs text-center">
            이 테스트는 참고용이며, 전문적인 심리 상담을 대체하지 않습니다.
          </p>
        </div>
      </div>
    </footer>
  );
}