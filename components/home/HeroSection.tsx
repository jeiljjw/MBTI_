"use client";

import { BeamsBackground } from '@/components/ui/beams-background';
import { Link } from '@/src/i18n/routing';

export function HeroSection({ t }: { t: (key: string) => string }) {
  return (
    <BeamsBackground intensity="medium" minHeight="min-h-[70vh]">
      {/* Content */}
      <div className="w-full max-w-5xl mx-auto text-center space-y-8 px-4 py-20">
        {/* 제목 */}
        <h1 className="font-semibold bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent tracking-tighter text-[clamp(2.5rem,6vw,4.5rem)] md:text-6xl lg:text-7xl whitespace-nowrap md:whitespace-pre-line leading-tight">
          {t('title')}
        </h1>
        
        {/* 부제 */}
        <p className="text-xl md:text-2xl lg:text-3xl text-gray-400 tracking-tighter max-w-2xl mx-auto">
          {t('subtitle')}
        </p>

        {/* CTA Button pointing to blog */}
        <div className="pt-8">
          <Link href="/blog">
            <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-bold text-lg hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] transition-all duration-300 transform hover:-translate-y-1">
              {t('startTest')}
            </button>
          </Link>
        </div>
      </div>
    </BeamsBackground>
  );
}
