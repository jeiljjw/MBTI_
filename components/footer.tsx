"use client";

import React from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/src/i18n/routing';

export function Footer() {
  const t = useTranslations('footer');
  const tCommon = useTranslations('common');
  
  return (
    <footer className="bg-black/20 backdrop-blur-md border-t border-white/10 mt-16" suppressHydrationWarning>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-400 text-sm" suppressHydrationWarning>
              {t('copyright')}
            </p>
          </div>
            <div className="flex space-x-6">
              <Link href="/about" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm" suppressHydrationWarning>
                {t('about')}
              </Link>
              <Link href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm" suppressHydrationWarning>
                {t('privacy')}
              </Link>
              <Link href="/terms-of-service" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm" suppressHydrationWarning>
                {t('terms')}
              </Link>
              <Link href="/contact" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm" suppressHydrationWarning>
                {t('contact')}
              </Link>
            </div>
        </div>
        <div className="mt-6 pt-6 border-t border-white/10">
          <p className="text-gray-500 text-xs text-center">
            {tCommon('disclaimer')}
          </p>
        </div>
      </div>
    </footer>
  );
}
