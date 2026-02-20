"use client";

import { useTranslations } from 'next-intl';
import { Link } from '@/src/i18n/routing';

export function HomeContent() {
  const t = useTranslations('home');
  
  return (
    <div className="flex flex-col items-center justify-center gap-6 px-4 text-center min-h-screen pt-20 pb-8">
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent tracking-tighter">
        {t('title')}
      </h1>
      <p className="text-lg md:text-xl lg:text-2xl bg-gradient-to-r from-gray-200 to-gray-400 bg-clip-text text-transparent tracking-tighter max-w-2xl">
        {t('subtitle')}
      </p>
      <Link href="/test">
        <button className="gradient-button px-8 py-3 text-white font-semibold rounded-lg hover:scale-105 transition-transform duration-300">
          {t('startTest')}
        </button>
      </Link>
    </div>
  );
}
